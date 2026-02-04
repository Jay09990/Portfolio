import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  // Aesthetic labels mapping
  const navItems = [
    { id: 'hero', label: 'INDEX' },
    { id: 'about', label: 'PROFILE' },
    { id: 'skills', label: 'TECH' },
    { id: 'projects', label: 'WORKS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  useGSAP(() => {
    // Initial slide down animation
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5
    });
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-24">

            {/* Logo - Minimal */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-2xl font-black tracking-tighter text-white hover:opacity-70 transition-opacity"
              >
                JAY
                <span className="text-orange-500">.</span>
              </button>
            </div>

            {/* Desktop Navigation - Minimal & Spaced */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="group relative text-xs font-medium tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-orange-500 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 hover:to-orange-500 transition-all duration-300 tracking-tighter"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-24"></div>
    </>
  );
};

export default Header;