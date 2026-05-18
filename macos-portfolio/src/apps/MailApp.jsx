import React from "react";
import {
  FaInbox,
  FaPaperPlane,
  FaTrash,
  FaPen,
  FaReply,
  FaArchive,
} from "react-icons/fa";

const MailApp = () => {
  return (
    <div className="w-full h-full flex bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200">
      <div className="w-48 bg-gray-50 dark:bg-white/5 border-r border-gray-200 dark:border-white/10 flex flex-col p-4 gap-2 flex-shrink-0">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Mailboxes
        </div>
        <div className="flex items-center gap-3 px-2 py-1.5 bg-blue-500 text-white rounded-md cursor-pointer">
          <FaInbox /> <span className="text-sm font-medium">Inbox</span>{" "}
          <span className="ml-auto text-xs">3</span>
        </div>
        <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md cursor-pointer">
          <FaPaperPlane /> <span className="text-sm font-medium">Sent</span>
        </div>
        <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md cursor-pointer">
          <FaTrash /> <span className="text-sm font-medium">Trash</span>
        </div>
      </div>

      <div className="w-72 bg-white dark:bg-[#1e1e1e] border-r border-gray-200 dark:border-white/10 flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gray-50 dark:bg-white/5">
          <span className="font-semibold">Inbox</span>
          <FaPen className="text-blue-500 cursor-pointer" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 dark:border-white/10 bg-blue-50 dark:bg-blue-900/20 cursor-pointer relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="ml-2">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-sm">GitHub</span>
                <span className="text-xs text-blue-500">10:45 AM</span>
              </div>
              <div className="text-xs font-semibold mb-1 truncate">
                Dependabot alert: moderate severity
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                We found a potential security vulnerability in one of your
                dependencies.
              </div>
            </div>
          </div>
          <div className="p-4 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer ml-2">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-medium text-sm">LinkedIn</span>
              <span className="text-xs text-gray-400">Yesterday</span>
            </div>
            <div className="text-xs font-medium mb-1 truncate">
              You appeared in 15 searches this week
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
              Check out who is looking at your profile. Your recent activity is
              gaining traction.
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white dark:bg-[#1e1e1e]">
        <div className="h-14 border-b border-gray-200 dark:border-white/10 flex items-center justify-end px-6 gap-4 text-gray-500 bg-gray-50 dark:bg-white/5">
          <FaReply className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors" />
          <FaArchive className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors" />
          <FaTrash className="cursor-pointer hover:text-red-500 transition-colors" />
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">
            Dependabot alert: moderate severity
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white">
              <FaGithub />
            </div>
            <div>
              <div className="font-semibold text-sm">
                GitHub &lt;notifications@github.com&gt;
              </div>
              <div className="text-xs text-gray-500">To: you@example.com</div>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed">
            <p>Hi there,</p>
            <p>
              We found a potential security vulnerability in a repository for
              which you have been receiving dependabot alerts.
            </p>
            <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg my-4 border border-gray-200 dark:border-white/10">
              <div className="font-mono text-xs">
                <strong>Package:</strong> react-scripts
                <br />
                <strong>Vulnerability:</strong> Regular Expression Denial of
                Service (ReDoS)
                <br />
                <strong>Patched in:</strong> 5.0.1.1
              </div>
            </div>
            <p>
              Please review your dependencies and consider updating your
              packages to keep your project secure.
            </p>
            <p>
              Thanks,
              <br />
              The GitHub Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailApp;
