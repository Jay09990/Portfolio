import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          {/* Big Brand Name */}
          <div>
            <h2 className="text-[12vw] leading-none font-black text-white tracking-tighter mix-blend-difference select-none hover:text-orange-500 transition-colors duration-500 cursor-default">
              DUDHREJIYA
            </h2>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 mb-4 md:mb-10 hover:text-orange-500 transition-colors"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-gray-500 group-hover:text-orange-500">Back to Top</span>
            <div className="p-3 rounded-full border border-gray-800 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-900 pt-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Socials</h4>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com/in/jay-dudhrejiya" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-orange-500 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Jay09990" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-orange-500 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-lg text-white hover:text-orange-500 transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:jdudhrejiya0990@gmail.com" className="text-lg text-white hover:text-orange-500 transition-colors">jdudhrejiya0990@gmail.com</a></li>
              <li className="text-lg text-gray-400">+91 70419 45248</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</h4>
            <p className="text-lg text-gray-400">Bhavnagar, Gujarat<br />Bharat</p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-end">
            <p className="text-xs text-gray-600 uppercase tracking-wider">
              &copy; {currentYear} Jay Dudhrejiya. <br />
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;