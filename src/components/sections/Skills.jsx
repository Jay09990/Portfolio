import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Marquee Row Component
const MarqueeRow = ({ skills, direction = 'left', speed = 20 }) => {
  const rowRef = useRef(null);

  useGSAP(() => {
    const row = rowRef.current;

    // Calculate distance based on content width (simpler approach: standard percentage)
    // For seamless loop, we need to animate xPercent from 0 to -50 (since we doubled content)
    // If direction is right, we animate from -50 to 0

    const start = direction === 'left' ? 0 : -50;
    const end = direction === 'left' ? -50 : 0;

    gsap.fromTo(row,
      { xPercent: start },
      {
        xPercent: end,
        duration: speed,
        ease: "none",
        repeat: -1
      }
    );
  }, { scope: rowRef });

  return (
    <div className="overflow-hidden flex w-full py-4 relative mask-gradient">
      <div ref={rowRef} className="flex flex-nowrap gap-8 w-max px-4">
        {/* Double the content for seamless loop */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className={`flex items-center gap-3 px-6 py-4 rounded-full border bg-gray-900/50 backdrop-blur-sm whitespace-nowrap transition-colors hover:border-orange-500/50 hover:bg-gray-800 ${skill.color ? skill.color.replace('text-', 'border-') + '20' : 'border-gray-800'}`}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className={`font-bold text-lg ${skill.color || 'text-white'}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React.js', icon: "⚛️", color: 'text-blue-400' },
      { name: 'JavaScript', icon: "📜", color: 'text-yellow-400' },
      { name: 'TypeScript', icon: "📘", color: 'text-blue-500' },
      { name: 'HTML5', icon: "🌐", color: 'text-orange-500' },
      { name: 'CSS3', icon: "🎨", color: 'text-blue-400' },
      { name: 'Tailwind', icon: "🌬️", color: 'text-cyan-400' },
      { name: 'Next.js', icon: "▲", color: 'text-white' },
      { name: 'Redux', icon: "🔄", color: 'text-purple-400' },
    ],
    backend: [
      { name: 'Node.js', icon: "🟢", color: 'text-green-500' },
      { name: 'Express', icon: "🚂", color: 'text-gray-400' },
      { name: 'MongoDB', icon: "🍃", color: 'text-green-400' },
      { name: 'PostgreSQL', icon: "🐘", color: 'text-blue-400' },
      { name: 'Firebase', icon: "🔥", color: 'text-orange-400' },
      { name: 'REST APIs', icon: "🔗", color: 'text-purple-400' },
      { name: 'GraphQL', icon: "◈", color: 'text-pink-400' },
    ],
    tools: [
      { name: 'Git', icon: "🐙", color: 'text-gray-300' },
      { name: 'Docker', icon: "🐳", color: 'text-blue-400' },
      { name: 'AWS', icon: "☁️", color: 'text-orange-400' },
      { name: 'Postman', icon: "🚀", color: 'text-orange-500' },
      { name: 'Figma', icon: "🎨", color: 'text-pink-400' },
      { name: 'Vite', icon: "⚡", color: 'text-purple-400' },
      { name: 'VsCode', icon: "💻", color: 'text-blue-500' },
    ]
  };

  return (
    <section id="skills" className="min-h-screen bg-black flex flex-col justify-center py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Tech <span className="text-orange-500">Arsenal</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          A constantly expanding set of tools and technologies I use to build the future.
        </p>
      </div>

      <div className="space-y-12 w-full">
        {/* Row 1: Left to Right -> */}
        <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          <MarqueeRow skills={skillsData.frontend} direction="left" speed={40} />
        </div>

        {/* Row 2: Right to Left <- */}
        <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <MarqueeRow skills={skillsData.backend} direction="right" speed={45} />
        </div>

        {/* Row 3: Left to Right -> */}
        <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          <MarqueeRow skills={skillsData.tools} direction="left" speed={50} />
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Skills;