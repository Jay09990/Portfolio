import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal text lines
    const textElements = gsap.utils.toArray('.about-text-line');

    textElements.forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-32 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase">01 // Profile</span>
          <div className="h-[1px] w-full max-w-[100px] bg-gray-800"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">

          {/* Main Statement */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-12">
              <span className="about-text-line block">Driven by design,</span>
              <span className="about-text-line block text-gray-500">powered by code.</span>
              <span className="about-text-line block">Creating digital</span>
              <span className="about-text-line block">future.</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12 mt-20 border-t border-gray-900 pt-12">
              <div className="about-text-line max-w-sm">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  The Story
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  My journey started with a curiosity for how things work on the web.
                  Today, that curiosity has evolved into a passion for building
                  robust applications and immersive user experiences. Code is my tool,
                  creativity is my medium.
                </p>
              </div>

              <div className="about-text-line max-w-sm">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  The Approach
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  I believe in minimalism and performance. Every line of code should
                  serve a purpose, and every pixel should contribute to the story.
                  I strive for simplicity in complex systems.
                </p>
              </div>
            </div>
          </div>

          {/* Side Info / Stats */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12">
            <div className="about-text-line p-8 bg-gray-900/20 border border-gray-800 rounded-2xl">
              <div className="text-5xl font-black text-white mb-2">2+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Years Experience</div>
            </div>

            <div className="about-text-line p-8 bg-gray-900/20 border border-gray-800 rounded-2xl">
              <div className="text-5xl font-black text-orange-500 mb-2">20+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Projects Shipped</div>
            </div>

            <a
              href="/Docs/Dudhrejiya_Jay.pdf"
              download
              className="about-text-line group flex items-center justify-between p-8 bg-white text-black rounded-2xl hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-bold text-lg">Resume</span>
                <span className="text-xs uppercase tracking-wider opacity-60">Download PDF</span>
              </div>
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;