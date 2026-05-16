/**
 * Portfolio data — edit this to personalize your OS portfolio.
 */

export const profile = {
  name: 'Privotech',
  title: 'Software Developer',
  bio: 'Passionate software developer building beautiful and functional digital experiences.',
  location: 'Lagos, Nigeria',
  email: 'hello@privotech.dev',
  avatar: null, // path to avatar image once added
}

export const skills = [
  { category: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vite', 'Figma'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
]

export const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A description of your first project.',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    screenshot: null,
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A description of your second project.',
    tech: ['Vue', 'Python', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    screenshot: null,
  },
]

export const socials = {
  github: 'https://github.com/privotech',
  twitter: 'https://twitter.com/privotech',
  linkedin: 'https://linkedin.com/in/privotech',
}
