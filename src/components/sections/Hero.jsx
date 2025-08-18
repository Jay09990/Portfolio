import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Zap,
} from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Jay09990", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jDudhrejiya090",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <section
      className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-orange-500/20 text-6xl font-mono animate-float">
          {"{ }"}
        </div>
        <div className="absolute top-3/4 right-1/4 text-orange-500/20 text-4xl font-mono animate-float-delayed">
          {"< />"}
        </div>
        <div className="absolute top-1/2 right-1/3 text-orange-500/20 text-5xl font-mono animate-float-slow">
          {"[]"}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Greeting */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-8 h-[2px] bg-orange-500 mr-4"></div>
              <span className="text-orange-500 font-medium tracking-wide">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Dudhrejiya Jay</span>
            </h1>

            {/* Dynamic Role */}
            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                I'm a{" "}
                <span className="text-orange-500 relative">
                  {roles[currentRole]}
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 animate-pulse"></div>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">
              Passionate about creating exceptional digital experiences with
              modern web technologies. I transform ideas into scalable,
              user-friendly applications using the MERN stack.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
                <Code className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300 text-sm font-medium">React</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300 text-sm font-medium">
                  Node.js
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
                <Palette className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300 text-sm font-medium">
                  MongoDB
                </span>
              </div>
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                View My Work
                <ChevronDown className="w-5 h-5 inline-block ml-2 group-hover:translate-y-1 transition-transform" />
              </button>

              <a href="/Docs/Dudchrejiya_Jay.pdf" download>
                <button className="group px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105">
                  <Download className="w-5 h-5 inline-block mr-2 group-hover:animate-bounce" />
                  Download CV
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className="group w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image/Animation */}
          <div
            className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Profile Container */}
              <div className="relative">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 p-0.5 animate-spin-slow">
                  <div className="w-full h-full bg-black rounded-full"></div>
                </div>

                {/* Profile Image */}
                <div className="relative z-10 w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-orange-500/20">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                    {/* Placeholder - Replace with your image */}
                    <div className="w-78 h-78 rounded-full bg-gradient-to-tr from-orange-500 to-orange-300 flex items-center justify-center mx-auto shadow-lg">
                      <img
                        src="/images/profilePhoto.jpg"
                        alt="My Profile"
                        className="w-75 h-75 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 animate-bounce">
                  <span className="text-2xl">⚛️</span>
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 animate-bounce delay-500">
                  <span className="text-2xl">🚀</span>
                </div>

                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 animate-bounce delay-1000">
                  <span className="text-lg">💡</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-orange-500">4</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-orange-500">2+</div>
                  <div className="text-sm text-gray-400">Hackathon</div>
                </div>
                <div className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-400">Satisfied</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
