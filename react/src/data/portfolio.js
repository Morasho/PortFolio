// src/data/portfolio.js
// ── Edit this file to personalise your portfolio ──────────────

export const profile = {
  name: 'Victor Morara',
  domain: 'Victor.dev',
  role: 'Mathematics & Computer Science',
  tagline: 'Builds Things\nThat Matter.',
  bio: [
    "Hi! I'm a Mathematics & Computer Science undergraduate with a deep love for problem-solving. Whether it's optimising an algorithm, modelling a dataset, or building a full-stack application, I bring both analytical rigour and creative thinking to every project.",
    "Over the past 1–2 years I've worked on academic and personal projects that sit at the intersection of theory and practice – from graph algorithms to machine learning experiments.",
    "Currently open to internships, research collaborations, and cool side projects.",
  ],
  stats: [
    { value: '2+', label: 'Years of Coding' },
    { value: '10+', label: 'Projects Built' },
    { value: '∞',   label: 'Curiosity' },
  ],
  photo: '/photo.jpg',   // set to null to hide
  contact: {
    email: 'moraravictor9@gmail.com',
    phone: '+254 797814037',
    github: 'https://github.com/Morasho',
    linkedin: 'https://www.linkedin.com/in/victor-morara-994864358',
  },
  resume: '/resume.pdf',
}

// ── Skills ─────────────────────────────────────────────────────
export const skills = [
  { icon: '⟨/⟩', name: 'Python',      sub: 'Data & Algorithms',        level: 85 },
  { icon: '∑',    name: 'Mathematics', sub: 'Linear Algebra, Calculus', level: 90 },
  { icon: '⬡',    name: 'C / C++',    sub: 'Systems & Performance',    level: 70 },
  { icon: '⬢',    name: 'Networking',  sub: 'TCP/IP, DNS, Protocols',   level: 65 },
  { icon: '⧉',    name: 'Web Dev',     sub: 'React, Vite, CSS',         level: 60 },
  { icon: '⟳',    name: 'Git & Linux', sub: 'Version Control & CLI',    level: 75 },
]

// ── Currently learning ─────────────────────────────────────────
export const learning = [
  'TypeScript',
  'System Design',
  'ML Deployment',
  'Docker',
  'Neo4j'
]

// ── Projects ───────────────────────────────────────────────────
// For each project you can set ONE of:
//   video: '/videos/demo.mp4'  — plays inline on hover, muted & looping
//   image: '/images/shot.png'  — static screenshot
//   (both null)                — shows a code-art placeholder
//
// githubHref: GitHub repo link (null to hide)
// liveHref:   live demo URL   (null to hide)
export const projects = [
  {
    num: 'Project_01',
    title: 'Hybrid GNN Fraud Intel',
    desc: 'The **hybrid-gnn-fraud-intel** project is a full-stack AI-powered fraud detection and intelligence platform that combines multiple machine learning approaches to identify suspicious financial transactions. It uses a hybrid architecture consisting of a Graph Neural Network (GNN) connected to Neo4j graph data, an XGBoost tabular model, and a stacked ensemble model that merges predictions from both systems for improved accuracy. The project includes a FastAPI backend for handling live predictions, alerts, uploads, analytics, explanations, and database interactions, alongside a React + Vite frontend that provides dashboards, fraud monitoring, graph visualizations, model comparisons, and user management interfaces. Supporting this system are Python-based ML pipelines for synthetic data generation, feature engineering, graph construction, model training, evaluation, embedding extraction, and artifact export, making the repository a complete end-to-end fraud intelligence and monitoring ecosystem.',
    tags: ['Python', 'GNN', 'XGBoost', 'FastAPI', 'React', 'Neo4j'],
    video: null,
    image: '/images/fraud-intel.png',
    githubHref: 'https://github.com/Morasho/hybrid-gnn-fraud-intel',
    liveHref: 'https://hybrid-gnn-fraud-intel.netlify.app/',
  },
  {
    num: 'Project_02',
    title: 'Guaranteed Transaction Layer',
    desc: 'A TypeScript/Node.js backend with a React dashboard that enables fault-tolerant bank-to-mobile money transfers. Uses a token-based guarantee approach and asynchronous settlement so payments succeed even when the Core Banking System is unavailable — achieving zero-downtime transaction reliability.',
    tags: ['TypeScript', 'Node.js', 'TCP/IP', 'React'],
    video: null,
    image: '/images/transaction-layer.png',
    githubHref: 'https://github.com/Morasho/Guaranteed-Transaction-Layer',
    liveHref: null,
  },
  {
    num: 'Project_03',
    title: 'GPS-Based Attendance App',
    desc: 'A mobile app that allows students to sign attendance only when physically inside the classroom using GPS geofencing. Prevents proxy sign-ins by ensuring only the present student can check in, and instantly generates attendance reports right after class.',
    tags: ['React', 'Node.js', 'GPS / Maps API'],
    video: '/videos/attendance-demo.mp4',
    image: '/images/attendance.png',
    githubHref: 'https://github.com/Morasho/Mobileapp_Attendance',
    liveHref: null,
  },  
  {
    num: 'Project_04',
    title: 'Predictive Grade Analyser',
    desc: 'Built a production-ready machine learning pipeline using XGBoost and MLP Neural Networks to classify students into Pass, Average, or At-Risk categories with ~80% accuracy across 1,200+ records. The system features a FastAPI REST backend, a single-student predictor with SHAP-driven explanations, and a full educator dashboard where teachers upload a class CSV and instantly see a colour-coded risk heatmap, confidence scores, and personalised intervention cards for every student. Includes class trend tracking across multiple uploads — line charts and per-student trajectory arrows show whether at-risk students are improving or declining week over week. Deployed on Render.',
    tags: ['Python', 'XGBoost', 'FASTAPI', 'SHAP', 'sklearn', 'Pandas', 'ML'],
    video: null,
    image: '/images/grade-analyser.png',
    githubHref: 'https://github.com/Morasho/Predictive-Grade-Analyzer',
    liveHref: 'https://predictive-grade-analyser.onrender.com/',
  },
]