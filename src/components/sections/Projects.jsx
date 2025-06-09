import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Eye, Code, Filter, X, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projectsRef = useRef(null);

  // Sample projects data - Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Netflix landing page clone",
      description: "A clone of the Netflix landing page with dynamic content loading and interactive UI elements.",
      longDescription: "This project is a responsive clone of the Netflix landing page, built using HTML and CSS.",
      image: "https://images.unsplash.com/photo-1637363990764-de84fd247b7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/Jay09990/NETFLIX-CLONE.git",
      featured: false,
      date: "2023",
      team: "Me",
      status: "Done"
    },
    {
      id: 2,
      title: "JobConnect",
      description: "A full-stack job portal application that connects third tier colleges with employers.",
      longDescription: "JobConnect is a full-stack job portal application designed to bridge the gap between third tier colleges and employers. It allows students to create profiles, upload resumes, and apply for jobs, while employers can post job openings and review applications.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React.js", "Bootstrap"],
      category: "fullstack",
      github: "https://github.com/Jay09990/MyJobConnect.git",
      featured: true,
      date: "2024",
      team: "5 Developers",
      status: "In Progress"
    }
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden" ref={projectsRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-[2px] bg-orange-500 mr-4"></div>
            <span className="text-orange-500 font-medium tracking-wide uppercase">MY PROJECTS</span>
            <div className="w-12 h-[2px] bg-orange-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my latest work and see how I bring ideas to life through code. 
            Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-black'
                  : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700 hover:border-orange-500/50'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id 
                  ? 'bg-black/20 text-black' 
                  : 'bg-orange-500/20 text-orange-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-white mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            🌟 Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:text-black transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:text-black transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm rounded-full border border-orange-500/30">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className={`text-2xl font-bold text-white mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
                        <Star className="w-3 h-3 text-orange-500" />
                        <span className="text-xs text-orange-500 font-medium">Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
                    >
                      View Details
                    </button>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  selectedProject.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {selectedProject.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Project Info</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Year: {selectedProject.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>Team: {selectedProject.team}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a 
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-black rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
