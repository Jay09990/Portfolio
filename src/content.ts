type ProjectKind = 'client' | 'speculative' | 'personal' | null;
type ProjectStatus = 'live' | 'mvp' | 'archived' | null;

interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  kindLabel?: string;
  year: string;
  role: string;
  stack: string[];
  oneLiner: string;
  caseNote?: {
    problem: string;
    decision: string;
    outcome: string;
  };
  description: string;
  status: ProjectStatus;
  links?: {
    live?: string;
    repo?: string;
  };
  images: {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
  }[];
  details?: string[];
}

const designProjects: Project[] = [
  {
    slug: 'mesa-cafe-manager',
    title: 'Mesa Cafe Manager Platform',
    kind: null,
    kindLabel: '[TODO: confirm whether this was client or personal work]',
    year: '[TODO: confirm project year]',
    role: '[TODO: confirm your role]',
    stack: ['[TODO: confirm platform stack]'],
    oneLiner: '[TODO: add a factual summary of the cafe manager platform]',
    caseNote: {
      problem: '[TODO: describe the verified problem]',
      decision: '[TODO: describe the verified product or design decisions]',
      outcome: '[TODO: describe the verified outcome]',
    },
    description: '[TODO: provide verified Mesa Cafe Manager platform details]',
    status: null,
    images: [
      {
        src: '/projects/mesa-cafe-manager/cover.webp',
        alt: 'Mesa Cafe Manager dashboard showing the reservations schedule, booking queue, menu, and seat counts.',
        caption: 'Mesa Cafe Manager dashboard.',
        width: 1440,
        height: 704,
      },
    ],
  },
  {
    slug: 'kaaffeella',
    title: 'Kaaffeella',
    kind: null,
    kindLabel: '[TODO: confirm whether this was a speculative concept or client work]',
    year: '[TODO: confirm project year]',
    role: '[TODO: confirm your role]',
    stack: ['Tailwind CSS 4'],
    oneLiner: 'A café website with black-ink hand-doodle illustrations.',
    caseNote: {
      problem: '[TODO: describe the verified design problem]',
      decision:
        "Strip it back to black ink on a quiet background so the logo's palette and the doodles carry the identity.",
      outcome: '[TODO: describe the verified outcome]',
    },
    description:
      '[TODO: confirm this was a speculative concept and provide a 3–5 sentence description]',
    status: 'live',
    details: [
      '[TODO: state accurately how the illustrations were produced]',
    ],
    links: {
      live: 'https://kafeella-cafe.vercel.app',
      repo: 'https://github.com/Jay09990/kafeella_cafe',
    },
    images: [
      {
        src: '/projects/kaffeella/cover.webp',
        alt: 'Desktop screenshot of the Kaaffeella cafe website, showing its interior illustration and navigation.',
        caption: 'Kaaffeella cafe website, desktop view.',
        width: 1440,
        height: 716,
      },
    ],
  },
];

const workProjects: Project[] = [
  {
    slug: 'inflr',
    title: 'Inflr',
    kind: null,
    year: '[TODO: confirm project year]',
    role: '[TODO: confirm your role]',
    stack: [],
    oneLiner: 'Influencer marketplace platform in MVP stage.',
    description:
      'Influencer marketplace platform in MVP stage. [TODO: describe what creators can do.] [TODO: describe what brands can do.] [TODO: add 1–2 sentences about your role, stack, and verified implementation details.]',
    status: 'mvp',
    images: [
      {
        src: '',
        alt: '[TODO: supply a real Inflr screenshot]',
        caption: '[TODO: Inflr screenshot]',
      },
    ],
  },
];

export const siteContent = {
  identity: {
    name: 'Jay Dudhrejiya',
    title: 'Jay Dudhrejiya | Full-stack developer',
    description:
      'Full-stack developer in Ahmedabad building websites and web apps for small businesses. Next.js, real-time features, and WhatsApp and AI automation.',
    url: 'https://portfolio-theta-olive-36.vercel.app/',
    jobTitle: 'Full-stack developer',
    email: 'jdudhrejiya0990@gmail.com',
    phone: '+91 70419 45248',
    github: 'https://github.com/Jay09990',
    linkedin: null,
    resume: '/resume.pdf',
    availability: '[TODO: confirm availability]',
  },
  accessibility: {
    skipLink: 'Skip to content',
    menuLabel: 'Menu',
  },
  labels: {
    resume: 'Résumé (PDF)',
    linkedIn: 'LinkedIn',
    github: 'GitHub',
    phone: 'Phone',
    liveSite: 'Live site',
    repository: 'Repository',
    todoKind: '[TODO: confirm project kind]',
    todoStack: '[TODO: confirm stack]',
    todoYear: '[TODO: confirm year]',
    todoStatus: '[TODO: confirm status]',
    todoProjectLinks: '[TODO: add verified live site and repository links]',
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    footerNavigation: 'Footer',
  },
  navigation: [
    { label: 'Design', href: '#design' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  intro: {
    statement: 'I build websites and web apps for small businesses.',
    secondLine:
      'Next.js, real-time features, and WhatsApp and AI automation.',
    paragraph:
      '[TODO: confirm or replace this draft] I build websites and web apps for small businesses. I work independently, first understanding the workflow, then making the system easy to use.',
    location: 'Based in Ahmedabad, India',
    linkLabel: 'See the work',
    detailsLabel: 'Location, availability, and contact details',
  },
  design: {
    title: 'Design',
    caption: 'Websites where the look and feel were the brief.',
    projects: designProjects,
    caseLabels: {
      problem: 'Problem',
      decision: 'Decision',
      outcome: 'Outcome',
      visit: 'Visit site',
    },
  },
  work: {
    title: 'Work',
    caption: 'Selected projects. Screenshots only.',
    columns: ['No.', 'Project', 'What it is', 'Stack', 'Year', 'Status'],
    projects: workProjects,
    imageLabel: 'Project image',
  },
  about: {
    title: 'About',
    photo: {
      src: '',
      alt: '[TODO: add a real photo or leave the photo out]',
      caption: '[TODO: owner photo]',
    },
    paragraph:
      '[TODO: confirm or replace this draft] I build websites and web apps for small businesses. Before I start, I ask how the work happens day to day and where people get stuck. I use that to decide what the site or app needs to do. I work independently, share progress in stages, and keep updates plain: what is done, what changed, and what comes next. When possible, I keep the first version focused on the steps people use most. I build, test with the people who will use it, then adjust details where the experience causes confusion. I am based in Ahmedabad, India. [TODO: add a specific example of how you worked with a small business and confirm this description.]',
    buildTitle: 'What I build',
    buildList: [
      'Websites for businesses',
      'Web apps and dashboards',
      'Real-time features',
      'WhatsApp booking and automation',
    ],
    toolsTitle: 'Tools',
    toolGroups: [
      {
        label: 'Frontend',
        tools: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Next.js'],
      },
      {
        label: 'Backend',
        tools: ['[TODO: confirm backend tools you use]'],
      },
      {
        label: 'Data',
        tools: ['[TODO: confirm data tools you use]'],
      },
      {
        label: 'Automation and AI',
        tools: ['[TODO: confirm automation and AI tools you use]'],
      },
    ],
  },
  contact: {
    title: 'Email me about your project.',
    linkedinTodo: '[TODO: confirm LinkedIn URL]',
    emailLabel: 'Email Jay Dudhrejiya',
  },
  footer: {
    copyright: '© 2026 Jay Dudhrejiya',
    backToTop: 'Back to top',
    resumeLabel: 'Résumé',
  },
};
