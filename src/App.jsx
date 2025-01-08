import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center p-6">
          <div className="text-xl font-medium">Your Name</div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white pt-20">
            <div className="container mx-auto px-6">
              <div className="space-y-6">
                <MenuItem href="#work" text="Work" />
                <MenuItem href="#about" text="About" />
                <MenuItem href="#contact" text="Contact" />
                <div className="pt-6 flex gap-4">
                  <a href="mailto:your.email@example.com" className="hover:opacity-70">
                    <Mail size={24} />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="hover:opacity-70">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/yourusername" className="hover:opacity-70">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium mb-6">
            Product and Industrial Designer based in Delft
          </h1>
          <p className="text-xl text-gray-600">
            Combining mechanical engineering expertise with industrial design principles 
            to create innovative and functional products.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <h2 className="text-2xl font-medium mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProjectCard 
            title="Project One"
            category="Industrial Design"
            description="Description of your first major project"
          />
          <ProjectCard 
            title="Project Two"
            category="Mechanical Engineering"
            description="Description of your second major project"
          />
          <ProjectCard 
            title="Project Three"
            category="Product Design"
            description="Description of your third major project"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium mb-6">About</h2>
          <p className="text-lg text-gray-600 mb-6">
            Industrial Design Master's student at TU Delft with a Bachelor's in 
            Mechanical Engineering from VIT. Passionate about creating products 
            that combine technical excellence with human-centered design.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Education</h3>
              <p className="text-gray-600">MSc Industrial Design • TU Delft</p>
              <p className="text-gray-600">BTech Mechanical Engineering • VIT</p>
            </div>
            <div>
              <h3 className="font-medium">Skills</h3>
              <p className="text-gray-600">
                CAD, Prototyping, User Research, Design Thinking, 
                Engineering Analysis, Manufacturing Processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Currently available for internships and collaborations.
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center text-lg hover:opacity-70"
          >
            your.email@example.com
            <ArrowUpRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const MenuItem = ({ href, text }) => (
  <a 
    href={href} 
    className="block text-4xl font-medium hover:opacity-70"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {text}
  </a>
);

const ProjectCard = ({ title, category, description }) => (
  <div className="group cursor-pointer">
    <div className="aspect-video bg-gray-100 mb-4 overflow-hidden">
      <img
        src="/api/placeholder/800/600"
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-2">{category}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Portfolio;
