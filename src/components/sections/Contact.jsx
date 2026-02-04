import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('wiqq1WyEg3np-deNb');
      }
    };
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await window.emailjs.sendForm(
        'service_pkc043m',
        'template_zwzj78p',
        formRef.current,
        'wiqq1WyEg3np-deNb'
      );
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  useGSAP(() => {
    // Form elements slide in
    const inputs = gsap.utils.toArray('.contact-input-group');

    gsap.fromTo(inputs,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-black min-h-screen flex items-center relative overflow-hidden">

      {/* Background Noise/Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left: Heading */}
          <div>
            <div className="mb-20">
              <span className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase block mb-8">04 // Contact</span>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                LET'S <br />
                WORK <br />
                <span className="text-orange-500">TOGETHER.</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-md mt-8 leading-relaxed">
                Have a project in mind? Let's create something extraordinary.
                Drop me a line and I'll get back to you.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:jdudhrejiya0990@gmail.com" className="block text-2xl text-white hover:text-orange-500 transition-colors">
                jdudhrejiya0990@gmail.com
              </a>
              <a href="tel:+917041945248" className="block text-2xl text-white hover:text-orange-500 transition-colors">
                +91 70419 45248
              </a>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="flex flex-col justify-end">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">

              <div className="contact-input-group relative">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-800 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="contact-input-group relative">
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-800 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="contact-input-group relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="1" // Minimal height, user can expand if they want or just auto-grow logic if we added it
                  placeholder="Tell me about your project"
                  className="w-full bg-transparent border-b border-gray-800 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <div className="contact-input-group pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-orange-500 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-500">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500">Error sending message. Please try again.</p>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;