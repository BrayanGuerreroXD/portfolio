/**
 * Single source of truth for all portfolio content.
 * Extracted from the Stitch "Brayan Guerrero - Enhanced Space Portfolio" design.
 * Edit this file to update the site — components read everything from here.
 */

export interface SkillIcon {
  /** Devicon CSS class (e.g. "devicon-java-plain colored") */
  devicon?: string
  /** Material Symbols / MUI icon name for tech without a devicon glyph */
  mui?: 'psychology' | 'smartToy'
}

export interface Skill {
  name: string
  icon: SkillIcon
}

export interface SkillCategory {
  title: string
  /** MUI icon name used in the category header */
  icon: 'dns' | 'desktop' | 'cloud' | 'memory'
  /** Accent color key for the category */
  accent: 'primary' | 'secondary' | 'primaryFixedDim' | 'secondaryContainer'
  skills: Skill[]
}

export interface Project {
  name: string
  description: string
  /** Material Symbols icon name */
  icon: string
  /** Optional links — left undefined while projects are "coming soon" */
  demoUrl?: string
  repoUrl?: string
}

export const profile = {
  name: 'Brayan Guerrero',
  role: 'Software Engineer',
  status: 'System Online',
  tagline:
    'Software Engineer building intelligent systems and exploring the future with AI.',
  about:
    "I'm a software developer focused on building scalable solutions, robust backend systems, and AI-driven integrations. I thrive on complex architectural challenges and cutting-edge machine learning applications, exploring the code galaxy one line at a time!",
  footerNote: 'Exploring new galaxies of software, one project at a time. 🪐',
}

/** Contact details — real values provided by Brayan. */
export const contact = {
  email: 'brayanstewartguor@gmail.com',
  github: 'https://github.com/BrayanGuerreroXD',
  // Placeholder — replace with your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/in/your-profile',
}

export const projects: Project[] = [
  {
    name: 'Project Alpha',
    description: 'New mission coming soon...',
    icon: 'rocket_launch',
  },
  {
    name: 'Project Beta',
    description: 'New mission coming soon...',
    icon: 'rocket_launch',
  },
  {
    name: 'Project Gamma',
    description: 'New mission coming soon...',
    icon: 'rocket_launch',
  },
  {
    name: 'Project Delta',
    description: 'New mission coming soon...',
    icon: 'rocket_launch',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: 'dns',
    accent: 'primary',
    skills: [
      { name: 'Java', icon: { devicon: 'devicon-java-plain colored' } },
      { name: 'Spring Boot', icon: { devicon: 'devicon-spring-original colored' } },
      { name: 'PostgreSQL', icon: { devicon: 'devicon-postgresql-plain colored' } },
      { name: 'TypeScript', icon: { devicon: 'devicon-typescript-plain colored' } },
      { name: 'NestJS', icon: { devicon: 'devicon-nestjs-plain colored' } },
      { name: 'ExpressJS', icon: { devicon: 'devicon-express-original' } },
    ],
  },
  {
    title: 'Frontend',
    icon: 'desktop',
    accent: 'secondary',
    skills: [
      { name: 'React', icon: { devicon: 'devicon-react-original colored' } },
      { name: 'TypeScript', icon: { devicon: 'devicon-typescript-plain colored' } },
      { name: 'Material UI', icon: { devicon: 'devicon-materialui-plain colored' } },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    accent: 'primaryFixedDim',
    skills: [
      { name: 'Docker', icon: { devicon: 'devicon-docker-plain colored' } },
      { name: 'Kubernetes', icon: { devicon: 'devicon-kubernetes-plain colored' } },
      {
        name: 'AWS',
        icon: { devicon: 'devicon-amazonwebservices-plain-wordmark colored' },
      },
    ],
  },
  {
    title: 'AI',
    icon: 'memory',
    accent: 'secondaryContainer',
    skills: [
      { name: 'LLMs', icon: { mui: 'psychology' } },
      { name: 'AI Agents', icon: { mui: 'smartToy' } },
    ],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
