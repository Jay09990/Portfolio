import React, { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Globe, Server, Palette, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedBars, setAnimatedBars] = useState({});

  // Skills data organized by categories
  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript (ES6+)', level: 85, color: 'bg-yellow-500' },
        { name: 'HTML5/CSS3', level: 95, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 50, color: 'bg-cyan-500' },
        { name: 'Bootstrap', level: 68, color: 'bg-purple-500' },
        
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 10, color: 'bg-green-600' },
        { name: 'Express.js', level: 20, color: 'bg-gray-600' },
        { name: 'Python', level: 60, color: 'bg-yellow-600' },
        { name: 'MongoDB', level: 60, color: 'bg-green-500' },
        { name: 'SQL', level: 78, color: 'bg-blue-600' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Git/GitHub', level: 30, color: 'bg-gray-700' },
        { name: 'Figma', level: 45, color: 'bg-purple-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
      ]
    }
  };

  // Animation trigger for progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedBars = {};
      skillsData[activeCategory].skills.forEach((skill, index) => {
        newAnimatedBars[`${activeCategory}-${index}`] = true;
      });
      setAnimatedBars(newAnimatedBars);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Reset animations when category changes
  const handleCategoryChange = (category) => {
    setAnimatedBars({});
    setActiveCategory(category);
  };

  const SkillBar = ({ skill, index, category }) => {
    const isAnimated = animatedBars[`${category}-${index}`];
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-orange-500 font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out ${
              isAnimated ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: isAnimated ? `${skill.level}%` : '0%',
              transition: 'width 1.5s ease-out, opacity 0.3s ease-out'
            }}
          >
            <div className="h-full bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm passionate about creating amazing digital experiences using cutting-edge technologies.
            Here's a breakdown of my technical expertise across different domains.
          </p>
        </div>

        {/* Skills Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.entries(skillsData).map(([key, category]) => (
            <div
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                activeCategory === key
                  ? 'bg-orange-500 border-orange-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-orange-500/50 hover:bg-gray-750'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`p-3 rounded-lg ${
                  activeCategory === key 
                    ? 'bg-white/20' 
                    : 'bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20'
                }`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-sm">{category.title}</h3>
                <div className="text-xs opacity-75">
                  {category.skills.length} skills
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className="bg-black rounded-2xl p-8 border border-gray-800">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
              {skillsData[activeCategory].icon}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {skillsData[activeCategory].title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <SkillBar
                key={`${activeCategory}-${skill.name}`}
                skill={skill}
                index={index}
                category={activeCategory}
              />
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="inline-flex p-3 bg-orange-500/10 rounded-full text-orange-500 mb-4">
              <Brain className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Always Learning</h4>
            <p className="text-gray-300 text-sm">
              Constantly updating my skills with the latest technologies and best practices
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="inline-flex p-3 bg-orange-500/10 rounded-full text-orange-500 mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Fast Delivery</h4>
            <p className="text-gray-300 text-sm">
              Efficient development workflow ensures quick turnaround times
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="inline-flex p-3 bg-orange-500/10 rounded-full text-orange-500 mb-4">
              <Palette className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
            <p className="text-gray-300 text-sm">
              Writing maintainable, scalable, and well-documented code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;