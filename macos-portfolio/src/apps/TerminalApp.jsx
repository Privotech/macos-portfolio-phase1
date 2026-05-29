import React, { useState, useEffect, useRef } from "react";

const TypingText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onCompleteRef.current) onCompleteRef.current();
      }
    }, 15);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
};

const TerminalApp = () => {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: `Last login: ${new Date().toLocaleDateString()} on console`,
    },
    {
      type: "system",
      text: 'Welcome to Privotech OS Terminal. Type "help" to see available commands.',
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isTyping]);

  const handleCommand = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Enter" && !isTyping) {
      const command = input.trim().toLowerCase();
      const newHistory = [
        ...history,
        { type: "input", text: `privotech@macbook ~ % ${input}` },
      ];

      if (command !== "") {
        setCommandHistory([...commandHistory, input]);
        setHistoryIndex(-1);
      }

      setIsTyping(true);
      setInput("");

      let outputText = "";
      switch (command) {
        case "help":
          outputText =
            "Available commands: help, about, skills, projects, contact, social, clear";
          break;
        case "about":
          outputText =
            "Hi, I'm Privotech! I am a Software Engineer and UI Designer passionate about building beautiful, functional web applications.";
          break;
        case "skills":
          outputText =
            "Skills: React, Next.js, Node.js, Python, Tailwind CSS, TypeScript, Framer Motion.";
          break;
        case "projects":
          outputText =
            "1. macOS Portfolio\n2. E-Commerce Platform\n3. AI Chat Assistant\nType 'open projects' in a real environment to see more!";
          break;
        case "contact":
          outputText =
            "Email: hello@privotech.dev\nPhone: Available upon request.";
          break;
        case "social":
          outputText =
            "GitHub: github.com/privotech\nLinkedIn: linkedin.com/in/privotech\nTwitter: @privotech";
          break;
        case "clear":
          setHistory([]);
          setIsTyping(false);
          return;
        case "":
          setIsTyping(false);
          setHistory(newHistory);
          return;
        default:
          outputText = `zsh: command not found: ${command}`;
      }

      newHistory.push({ type: "animated", text: outputText });
      setHistory(newHistory);
    }
  };

  const onTypingComplete = () => {
    setIsTyping(false);
    setHistory((prev) => {
      const updated = [...prev];
      const last = updated[updated.length - 1];
      if (last.type === "animated") {
        last.type = "output";
      }
      return updated;
    });
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full h-full bg-[#1c1c1e]/95 p-4 font-mono text-[13px] text-gray-200"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-1 whitespace-pre-wrap">
        {history.map((line, idx) => {
          if (line.type === "animated") {
            return (
              <div key={idx} className="text-gray-300">
                <TypingText text={line.text} onComplete={onTypingComplete} />
              </div>
            );
          }
          return (
            <div
              key={idx}
              className={`${line.type === "output" ? "text-gray-300" : line.type === "system" ? "text-gray-400" : "text-green-400"}`}
            >
              {line.text}
            </div>
          );
        })}
      </div>

      {!isTyping && (
        <div className="flex mt-1 relative min-h-[20px]">
          <span className="text-green-400 mr-2 shrink-0">
            privotech@macbook ~ %
          </span>
          <div className="flex-1 break-all relative z-10">
            <span className="text-gray-200">{input}</span>
            <span className="w-2.5 h-[14px] bg-gray-300 ml-0.5 animate-pulse inline-block align-middle translate-y-[-1px]"></span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="absolute inset-0 opacity-0 w-full z-20 cursor-text"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
};

export default TerminalApp;
