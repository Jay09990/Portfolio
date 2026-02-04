import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Star, GitFork, Code, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // Fetch GitHub Repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Jay09990/repos?sort=updated&per_page=20'); // Limit for horizontal scroll perf
        const data = await response.json();
        const sortedData = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(sortedData);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useGSAP(() => {
    if (loading || projects.length === 0) return;

    const sections = gsap.utils.toArray(".project-panel");
    const totalWidth = sections.length * 100; // 100vw per section or something similar

    // Horizontal Scroll Animation
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + triggerRef.current.offsetWidth * sections.length, // Scroll duration based on width
        anticipatePin: 1
      }
    });

  }, [loading, projects]);

  return (
    <section
      ref={triggerRef}
      className="bg-black relative overflow-hidden text-white"
    >
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        </div>
      ) : (
        <div ref={sectionRef} className="flex flex-nowrap h-screen w-[400%]"> {/* Width set dynamically via flex */}

          {/* Intro Panel */}
          <div className="project-panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-black relative p-10 border-r border-gray-900">
            <div className="text-center max-w-4xl">
              <div className="inline-block p-4 rounded-full bg-orange-500/10 mb-8 animate-pulse">
                <Code className="w-12 h-12 text-orange-500" />
              </div>
              <h2 className="text-6xl md:text-8xl font-bold mb-6">
                Featured <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                Scroll down to explore my open source universe. <br />
                <span className="text-sm text-gray-600 mt-4 block">(Sideways navigation enabled)</span>
              </p>
            </div>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Project Panels */}
          {projects.map((repo, index) => (
            <div
              key={repo.id}
              className="project-panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-black border-r border-gray-800 relative p-6 md:p-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center w-full">

                {/* Left: Info */}
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="flex items-center gap-4 text-orange-500 font-mono">
                    <span className="text-sm">0{index + 1}</span>
                    <div className="h-[1px] w-20 bg-orange-500/50"></div>
                    <span className="text-sm">{repo.language || "Project"}</span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                    {repo.name}
                  </h3>

                  <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    {repo.description || "A cool project from my GitHub repository. Check out the code to learn more about how it works."}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-orange-500 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-bold hover:border-orange-500 hover:text-orange-500 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="flex gap-8 pt-8 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        {repo.stargazers_count}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Stars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold flex items-center justify-center gap-2">
                        <GitFork className="w-5 h-5 text-blue-500" />
                        {repo.forks_count}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Forks</div>
                    </div>
                  </div>
                </div>

                {/* Right: Visual/Decoration */}
                <div className="relative order-1 lg:order-2 flex justify-center">
                  <div className="w-full aspect-square max-w-[500px] bg-gradient-to-br from-gray-800 to-black rounded-3xl border border-gray-700 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <Code className="text-gray-600" />
                    </div>

                    <div className="space-y-4 font-mono text-sm text-gray-400 opacity-60">
                      <div className="h-4 w-3/4 bg-gray-700/50 rounded" />
                      <div className="h-4 w-1/2 bg-gray-700/50 rounded" />
                      <div className="h-4 w-5/6 bg-gray-700/50 rounded" />
                      <div className="h-4 w-2/3 bg-gray-700/50 rounded" />
                    </div>

                    <div className="text-8xl font-black text-gray-800 self-end select-none">
                      {repo.language ? repo.language.substring(0, 2).toUpperCase() : "</>"}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </section>
  );
};

export default Projects;
