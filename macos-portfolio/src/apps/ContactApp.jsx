import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactApp = () => {
  return (
    <div className="w-full h-full bg-[#1e1e1e] p-8 overflow-y-auto flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-12 shadow-2xl">
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Let's Talk</h1>
            <p className="text-white/60">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:hello@privotech.dev"
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20"
            >
              <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                <FaEnvelope />
              </div>
              <span className="font-medium">hello@privotech.dev</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20"
            >
              <div className="w-10 h-10 bg-gray-500/20 text-gray-400 rounded-full flex items-center justify-center">
                <FaGithub />
              </div>
              <span className="font-medium">github.com/privotech</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20"
            >
              <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center">
                <FaLinkedin />
              </div>
              <span className="font-medium">linkedin.com/in/privotech</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/20"
            >
              <div className="w-10 h-10 bg-blue-400/20 text-blue-300 rounded-full flex items-center justify-center">
                <FaTwitter />
              </div>
              <span className="font-medium">twitter.com/privotech</span>
            </a>
          </div>
        </div>

        <div className="flex-1 bg-black/40 p-6 rounded-2xl border border-white/5">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/60 uppercase">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/60 uppercase">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-white/60 uppercase">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Hello..."
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/30">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
