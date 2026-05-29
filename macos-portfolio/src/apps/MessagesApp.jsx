import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const MessagesApp = () => {
  return (
    <div className="w-full h-full flex bg-[#1e1e1e] text-gray-200">
      <div className="w-64 border-r border-white/10 flex flex-col bg-white/5">
        <div className="p-4 border-b border-white/10 font-semibold text-center bg-white/5">
          Messages
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 p-3 hover:bg-white/10 cursor-pointer bg-blue-500/20 border-l-4 border-blue-500">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md">
              R
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-sm truncate">
                  Recruiter
                </span>
                <span className="text-xs text-white/40">10:42 AM</span>
              </div>
              <div className="text-xs text-white/60 truncate">
                Your portfolio looks amazing!
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 hover:bg-white/10 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-teal-500 flex items-center justify-center font-bold text-white shadow-md">
              C
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-sm truncate">Client</span>
                <span className="text-xs text-white/40">Yesterday</span>
              </div>
              <div className="text-xs text-white/60 truncate">
                Let's schedule a meeting.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-white/10 bg-white/5 flex flex-col items-center justify-center h-16">
          <div className="text-sm font-semibold">Recruiter</div>
          <div className="text-xs text-blue-400">iMessage</div>
        </div>

        <div className="flex-1 p-6 flex flex-col gap-4">
          <div className="text-center text-xs text-white/40 mb-4">
            Today 10:30 AM
          </div>

          <div className="flex gap-2 justify-start">
            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm text-sm max-w-md border border-white/5">
              Hi Privotech! I came across your portfolio and I'm very impressed
              with your work.
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-sm text-sm max-w-md shadow-md">
              Thank you! I appreciate that. I'm currently looking for new
              opportunities.
            </div>
          </div>

          <div className="flex gap-2 justify-start mt-2">
            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm text-sm max-w-md border border-white/5">
              That's great. Your portfolio looks amazing! Would you be open to
              discussing a role with us?
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/5">
          <div className="flex items-center bg-black/40 rounded-full px-4 py-2 border border-white/10">
            <input
              type="text"
              placeholder="iMessage"
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder-white/40"
            />
            <FaPaperPlane className="text-blue-500 cursor-pointer hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesApp;
