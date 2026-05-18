import React, { Suspense } from 'react';


const AboutApp = React.lazy(() => import('../../apps/AboutApp'));
const FinderApp = React.lazy(() => import('../../apps/FinderApp'));
const SafariApp = React.lazy(() => import('../../apps/SafariApp'));
const TerminalApp = React.lazy(() => import('../../apps/TerminalApp'));
const SettingsApp = React.lazy(() => import('../../apps/SettingsApp'));
const MessagesApp = React.lazy(() => import('../../apps/MessagesApp'));
const MailApp = React.lazy(() => import('../../apps/MailApp'));
const MusicApp = React.lazy(() => import('../../apps/MusicApp'));
const ProjectsApp = React.lazy(() => import('../../apps/ProjectsApp'));
const SkillsApp = React.lazy(() => import('../../apps/SkillsApp'));
const ResumeApp = React.lazy(() => import('../../apps/ResumeApp'));
const ContactApp = React.lazy(() => import('../../apps/ContactApp'));
const VSCodeApp = React.lazy(() => import('../../apps/VSCodeApp'));

const WindowContent = ({ id, title }) => {
  const renderContent = () => {
    switch (id) {
      case 'about':
        return <AboutApp />;
      case 'finder':
        return <FinderApp />;
      case 'safari':
        return <SafariApp />;
      case 'terminal':
        return <TerminalApp />;
      case 'settings':
        return <SettingsApp />;
      case 'vscode':
        return <VSCodeApp />;
      case 'messages':
        return <MessagesApp />;
      case 'mail':
        return <MailApp />;
      case 'music':
        return <MusicApp />;
      case 'projects':
        return <ProjectsApp />;
      case 'skills':
        return <SkillsApp />;
      case 'resume':
        return <ResumeApp />;
      case 'contact':
        return <ContactApp />;
      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#1e1e1e] text-white/80 space-y-4">
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
              <span className="text-4xl opacity-50"></span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="text-sm text-white/40 max-w-xs text-center">
              The interface for this application is currently under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full bg-[#1e1e1e] overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        {renderContent()}
      </Suspense>
    </div>
  );
};

export default WindowContent;
