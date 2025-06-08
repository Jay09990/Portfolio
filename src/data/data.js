// src/data/personal.js
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  bio: "Passionate full stack developer with expertise in modern web technologies...",
  resume: "/path-to-your-resume.pdf",
  socialLinks: {
    github: "https://github.com/Jay09990",
    linkedin: "https://linkedin.com/in/jDudhrejiya090",
  }
};

// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    longDescription: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce-site.com",
    category: "Full Stack",
    featured: true
  },
];

// src/data/experience.js
export const experience = [
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "Remote",
    description: [
      "Led development of customer-facing web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 2,
    company: "Startup Solutions",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    description: [
      "Developed and maintained multiple client projects using MERN stack",
      "Implemented responsive designs and optimized application performance",
      "Worked directly with clients to gather requirements and provide solutions"
    ],
    technologies: ["React", "Express", "PostgreSQL", "Docker"]
  }
];

// src/data/skills.js (if you want to separate skills data)
export const skillsData = {
  frontend: {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 88 }
    ]
  },
  backend: {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'REST APIs', level: 90 }
    ]
  }
  // ... add more categories
};