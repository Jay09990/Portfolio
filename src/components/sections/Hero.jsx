import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// Import images (or just reference paths if in public)
const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
  "/images/hero-6.jpg",
  "/images/hero-7.jpg",
];

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null); // New wrapper for parallax
  const imageRef = useRef(null); // Inner image for glitch
  const bgRef = useRef(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  // Slideshow Effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Glitch Effect
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(imageRef.current, { clearProps: "filter,transform" }); // Release control to CSS
        }
      });

      tl.to(imageRef.current, {
        filter: "grayscale(100%) contrast(200%) brightness(150%) blur(4px)",
        scale: 1.05,
        x: 5,
        duration: 0.1,
        ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })",
        yoyo: true,
        repeat: 3
      })
        .add(() => {
          // Change Image Randomly (but not same as current)
          let nextIdx;
          do {
            nextIdx = Math.floor(Math.random() * heroImages.length);
          } while (nextIdx === currentImgIdx);
          setCurrentImgIdx(nextIdx);
        })
        .to(imageRef.current, {
          filter: "grayscale(100%) contrast(100%) brightness(100%) blur(0px)",
          scale: 1,
          x: 0,
          duration: 0.2,
        });

    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [currentImgIdx]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial Reveal
    tl.from(bgRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })
      .fromTo(".hero-text-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" },
        "-=1"
      )
      .fromTo(imageWrapperRef.current, // Animate the wrapper
        { scale: 1.1, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" },
        "-=1.2"
      )
      .fromTo(".hero-social",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

    // Mouse Parallax Effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      gsap.to(textRef.current, {
        x: xPos * 30,
        y: yPos * 30,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(imageWrapperRef.current, { // Move wrapper, not image directly
        x: xPos * -20,
        y: yPos * -20,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.to(".hero-bg-element", {
        x: xPos * 50,
        y: yPos * 50,
        duration: 1.5,
        ease: "power1.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: containerRef });

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center p-6"
    >
      {/* Abstract Background */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-neutral-900/30 rounded-full blur-[100px] hero-bg-element translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-orange-900/10 rounded-full blur-[80px] hero-bg-element -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full">

        {/* Left Content - Typography */}
        <div ref={textRef} className="order-2 lg:order-1 flex flex-col justify-center">
          <div className="overflow-hidden">
            <h2 className="hero-text-line text-lg md:text-xl text-orange-500 tracking-[0.2em] font-medium uppercase mb-4">
              Full Stack Developer
            </h2>
          </div>

          <div className="overflow-hidden">
            <h1 className="hero-text-line text-5xl sm:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-2 mix-blend-difference">
              JAY
            </h1>
          </div>

          <div className="overflow-hidden mb-8">
            <h1 className="hero-text-line text-5xl sm:text-7xl xl:text-8xl font-black text-neutral-500 leading-[0.9] tracking-tighter">
              DUDHREJIYA
            </h1>
          </div>

          <div className="overflow-hidden mb-12 max-w-lg">
            <p className="hero-text-line text-gray-400 text-lg leading-relaxed">
              Crafting digital experiences with a focus on aesthetics and performance.
              Turning complex problems into elegant, minimalist solutions.
            </p>
          </div>

          {/* Socials & CTA */}
          <div className="flex items-center gap-8">
            <button
              onClick={scrollToProjects}
              className="hero-text-line group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Explore Work <ArrowDown className="w-4 h-4" />
              </span>
            </button>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/Jay09990" },
                { Icon: Linkedin, href: "https://linkedin.com/in/jay-dudhrejiya" },
                { Icon: Mail, href: "mailto:your@email.com" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Retro Projector/Image */}
        <div className="order-1 lg:order-2 flex justify-center items-center h-full relative">
          <div ref={imageWrapperRef} className="relative w-full max-w-md group transition-all duration-500 ease-in-out">

            {/* Artistic Frame */}
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />

            <div className="relative bg-gray-900 overflow-hidden">
              {/* Image with Glitch Ref */}
              <img
                ref={imageRef}
                src={heroImages[currentImgIdx]}
                alt="Portrait"
                className="relative w-full h-auto object-contain grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />

              {/* Film Grain / Noise Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent bg-[length:100%_4px] opacity-20 pointer-events-none" />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

            {/* Retro Label */}
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 border border-white/10 z-10">
              <span className="text-[10px] text-orange-500 font-mono tracking-widest">IMG_0{currentImgIdx + 1}</span>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white" />
      </div>

    </section>
  );
};

export default Hero;
