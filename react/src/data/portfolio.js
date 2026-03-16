// src/data/portfolio.js
// ── Edit this file to personalise your portfolio ──────────

export const profile = {
  name: 'Your Name',
  domain: 'YourName.dev',
  role: 'Mathematics & Computer Science',
  tagline: 'Builds Things\nThat Matter.',
  bio: [
    "Hi! I'm a Mathematics & Computer Science undergraduate with a deep love for problem-solving. Whether it's optimising an algorithm, modelling a dataset, or building a full-stack application, I bring both analytical rigour and creative thinking to every project.",
    "Over the past 1–2 years I've worked on academic and personal projects that sit at the intersection of theory and practice — from graph algorithms to machine learning experiments.",
    "Currently open to internships, research collaborations, and cool side projects.",
  ],
  stats: [
    { value: '2+', label: 'Years of Coding' },
    { value: '10+', label: 'Projects Built' },
    { value: '∞',   label: 'Curiosity' },
  ],
  contact: {
    email: 'moraravictor9@email.com',
    phone: '+254 797814037',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
  resume: '/resume.pdf', // place your resume PDF in the /public folder
}

export const skills = [
  { icon: '⟨/⟩', name: 'Python',         sub: 'Data & Algorithms',      level: 85 },
  { icon: '∑',    name: 'Mathematics',    sub: 'Linear Algebra, Calculus', level: 90 },
  { icon: '⬡',    name: 'C / C++',        sub: 'Systems & Performance',   level: 70 },
  { icon: '⬢',    name: 'Networking',       sub: 'TCP/IP, DNS, Protocols', level: 65 },
  { icon: '⧉',    name: 'Web Dev',         sub: 'React, Vite, CSS',        level: 60 },
  { icon: '⟳',    name: 'Git & Linux',     sub: 'Version Control & CLI',   level: 75 },
]

export const projects = [
  {
    num: 'Project_01',
    title: 'Graph Pathfinding Visualizer',
    desc: "An interactive web app that visualises Dijkstra's, A*, and BFS algorithms in real time on a customisable grid. Built to deepen understanding of graph theory.",
    tags: ['Python', 'React', 'Algorithms'],
    href: '#',
  },
  {
    num: 'Project_02',
    title: 'Predictive Grade Analyser',
    desc: 'A machine learning pipeline that predicts student performance using regression and classification models. Achieved 87% accuracy on 1,200+ records.',
    tags: ['Python', 'sklearn', 'Pandas', 'ML'],
    href: '#',
  },
  {
    num: 'Project_03',
    title: 'Cryptography Toolkit',
    desc: 'Implementation of classical and modern cryptographic algorithms — from Caesar cipher to RSA — with a clean CLI interface and mathematical explanations.',
    tags: ['C++', 'Number Theory', 'CLI'],
    href: '#',
  },
]
