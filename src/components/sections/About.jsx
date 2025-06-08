import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Globe, Smartphone, Award, Coffee, Users, Clock } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    coffee: 0
  });
  const aboutRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  const animateCounters = () => {
    const targets = { projects: 2, coffee: 500 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        coffee: Math.floor(targets.coffee * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Others",
      icon: Code2,
      technologies: ["Git", "Vercel", "VS Code"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led development teams on college projects and hackathon projects."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Known for delivering high-quality projects on time"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 relative overflow-hidden" ref={aboutRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-[2px] bg-orange-500 mr-4"></div>
            <span className="text-orange-500 font-medium tracking-wide uppercase">About Me</span>
            <div className="w-12 h-[2px] bg-orange-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Crafting Digital <span className="text-orange-500">Experiences</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies, 
            dedicated to creating scalable and user-friendly applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content - Story */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Hello! I'm a passionate full-stack developer specializing in the MERN stack. 
                    My journey in web development started 2+ years ago, and I've been fascinated 
                    by the endless possibilities of creating digital solutions that make a difference.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    I believe in writing clean, efficient code and creating intuitive user experiences. 
                    My approach combines technical expertise with creative problem-solving to deliver 
                    applications that not only work flawlessly but also delight users.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="text-4xl font-bold text-orange-500 mb-2">{counters.projects}+</div>
                <div className="text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="text-4xl font-bold text-orange-500 mb-2">{counters.coffee}+</div>
                <div className="text-gray-300 font-medium">Cups of Coffee</div>
              </div>
            </div>

            {/* Fun Fact Card */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-6 rounded-xl border border-orange-500/20">
              <div className="flex items-center mb-3">
                <Coffee className="w-6 h-6 text-orange-500 mr-3" />
                <h4 className="text-white font-semibold">Fun Fact</h4>
              </div>
              <p className="text-gray-300">
                I've debugged more code at 2 AM than during regular hours, and I consider 
                coffee an essential part of my development stack! ☕
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Technologies I <span className="text-orange-500">Love</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <skill.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  
                  {/* Category */}
                  <h4 className="text-xl font-bold text-white mb-3">{skill.category}</h4>
                  
                  {/* Technologies */}
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="inline-block bg-gray-800/50 px-3 py-1 rounded-full mr-2 mb-2"
                      >
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm        always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Let's Connect
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;