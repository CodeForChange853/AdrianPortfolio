// ── IMAGES ────────────────────────────────────────────────────────────────────
export const NEXENROLL_IMG = '/images/nexenroll.png';
export const NOBS_IMG = '/images/nobs.png';
export const ANIMIND_IMG = '/images/animind.png';
export const PROFILE_IMG = '/images/profile.png';

// ── PROFILE ───────────────────────────────────────────────────────────────────
export const PROFILE = {
  name: ['ADRIAN S.', 'GARCIA'],
  title: 'Software Engineer · Backend Focus',
  email: 'garciaadrian1030@gmail.com',
  phone: '0954-451-2601',
  location: 'Calbayog City Samar',
  github: 'https://github.com/CodeForChange853',
  summary: 'Computer Science student from Calbayog, Samar who builds systems that solve real problems. From AI-driven enrollment engines to billing platforms for island communities — I care about clean architecture, thoughtful UX, and code that holds when it counts.',
  quote: 'Every system I build is a commitment — to the people who depend on it and the problem it was made to solve.',
};

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    type: 'web',
    code: 'F',
    name: 'NexEnroll',
    subtitle: 'AI-Powered Academic Enrollment & Faculty Load Balancer',
    description: 'Engineered an AI-driven enrollment engine using Gemini AI for automated credential validation, reducing manual registration time by 70% with 90% routing accuracy. Developed a secure, scalable architecture featuring RBAC, a dynamic faculty load-balancing algorithm, and a "System Guardrail" layer to guarantee 100% data consistency during high-concurrency grading periods.',
    tags: ['Gemini AI', 'RBAC', 'FastAPI', 'React.js', 'PostgreSQL'],
    live: 'https://ccissportal-frontend.vercel.app',
    repo: 'https://github.com/CodeForChange853/ccissportal-backend',
    img: NEXENROLL_IMG,
    languages: [
      { name: 'React', pct: 45 },
      { name: 'Python', pct: 40 },
      { name: 'SQL', pct: 15 },
    ],
    stats: [['70%', 'Faster Reg.'], ['90%', 'Accuracy'], ['100%', 'Consistency'], ['Live', 'Deployed']],
  },
  {
    id: 3,
    type: 'web',
    code: 'C',
    name: 'Sto. Niño: NOBS',
    subtitle: 'NAPOCOR Online Billing System',
    description: 'Digitized documentation and payment workflows for underserved island communities, resolving long-standing dispute management issues. Integrated consumer dashboards and automated SMS reminders, reducing administrative bottlenecks and improving payment transparency.',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'SMS Integration'],
    live: null,
    repo: 'https://github.com/CodeForChange853/NOBS',
    img: NOBS_IMG,
    languages: [
      { name: 'React', pct: 50 },
      { name: 'Python', pct: 35 },
      { name: 'SQL', pct: 15 },
    ],
    stats: null,
  },
  {
    id: 4,
    type: 'app',
    code: 'A',
    name: 'Animind Duel',
    subtitle: 'Android Trivia & Combat Game',
    description: 'Developed a turn-based Android game using MVVM and StateFlow, combining trivia mechanics with Room (SQLite) for local data storage. Built custom VFX animations using Compose Canvas and integrated a GPU-accelerated background via OpenGL ES 2.0 to improve visual performance.',
    tags: ['Kotlin', 'MVVM', 'Jetpack Compose', 'Room', 'OpenGL ES 2.0'],
    live: null,
    repo: null,
    img: ANIMIND_IMG,
    languages: [
      { name: 'Kotlin', pct: 80 },
      { name: 'Jetpack Compose', pct: 15 },
      { name: 'OpenGL ES', pct: 5 },
    ],
    stats: null,
  },
];

// ── CORE MASTERY ──────────────────────────────────────────────────────────────
export const CORE_MASTERY = [
  { name: 'HTML · CSS · Vanilla JS', pct: 90 },
  { name: 'Python', pct: 84 },
  { name: 'React', pct: 72 },
  { name: 'Kotlin', pct: 68 },
];

// ── SKILLS ────────────────────────────────────────────────────────────────────
export const SKILLS = {
  'Languages & DBs': ['Kotlin', 'Python', 'JavaScript', 'SQL', 'HTML/CSS', 'PostgreSQL', 'Room', 'SQLAlchemy'],
  Frameworks: ['React.js', 'Jetpack Compose', 'FastAPI', 'REST APIs', 'OpenGL ES 2.0', 'SPAs'],
  'AI & Architecture': ['Gemini AI (OCR)', 'Scikit-Learn (NLP)', 'MVVM', 'StateFlow', 'JWT', 'RBAC'],
  Tools: ['Git', 'GitHub', 'Vercel', 'Supabase', 'DBeaver'],
};

// ── PROJECT CODE LABELS ───────────────────────────────────────────────────────
export const CODE_LABELS = { F: 'Tech Focus', A: 'Application', C: 'Commercial' };

// ── QUICK FACTS ───────────────────────────────────────────────────────────────
export const QUICK_FACTS = [
  { label: 'Location', value: 'Calbayog City, Samar, Philippines' },
  { label: 'Degree', value: 'BS Computer Science' },
  { label: 'Age', value: '21 years old' },
  { label: 'Year', value: '3rd Year → 4th Year' },
];

// ── HOBBIES ───────────────────────────────────────────────────────────────────
export const HOBBIES = [
  { title: 'Exploring', desc: 'Island hopping through the Visayas — there\'s always a new beach, town, or perspective worth finding.' },
  { title: 'Local Food', desc: 'Hunting down the best inasal and fresh seafood. Food is how you really know a place.' },
  { title: 'Building', desc: 'Running experiments with new models and APIs — turning what\'s hyped into what\'s actually useful.' },
];

// ── TIMELINE ──────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    year: '2023',
    title: 'Enrolled — BS Computer Science',
    place: 'Northwest Samar State University',
    type: 'edu',
  },
  {
    year: '2023–24',
    title: 'Java, OOP & MySQL Foundations',
    place: '1st Year · Self-Study & Coursework',
    type: 'edu',
  },
  {
    year: '2024',
    title: 'Built NOBS — Ranked #1 Final-Term Project',
    place: 'CFC: Code for Change · Full-Stack Dev & Vice Head',
    type: 'project',
  },
  {
    year: '2024',
    title: 'Student Best in Programming',
    place: '2nd Year · Northwest Samar State University',
    type: 'edu',
  },
  {
    year: '2025',
    title: 'NexEnroll — AI-Driven Enrollment System',
    place: 'Classifed as Thesis Project · 3rd Year',
    type: 'project',
  },
  {
    year: '2025',
    title: 'Animind Duel — MVVM · OpenGL · AI Enemy',
    place: 'Android App · 98 % Grade',
    type: 'project',
  },
  {
    year: '2025–26',
    title: 'Production Skills: CI/CD · Microservices · Security',
    place: '3rd Year → 4th Year',
    type: 'edu',
  },
];

// ── NAVIGATION ────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];
