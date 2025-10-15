import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'KhatriShops',
    description: 'A full-stack e-commerce platform for online clothing retail featuring secure authentication, eSewa payment integration, product exchange functionality, and comprehensive inventory management. Designed with scalability in mind to serve both customers and administrators efficiently.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Shreejal-khatri/clothing_website',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753609644/qin-fan-KfqgYzoH3Vk-unsplash_gmk7ne.jpg'
  },
  {
    title: 'Electronic Store',
    description: 'A full-stack electronic store platform built with the MERN stack, featuring comprehensive inventory management, real-time product tracking, customer order processing, and an intuitive admin dashboard for seamless store operations.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Shreejal-khatri/ElectronicStore',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1760519567/hugo-agut-tugal-6cdIdu8KkLg-unsplash_lvkcje.jpg'
  },
  {
    title: 'Course Management System',
    description: 'A desktop application with Java Swing GUI enabling streamlined course creation, student registration, and academic record management. Implements real-time database synchronization with robust error handling and data validation.',
    tech: ['Java', 'MySQL', 'JDBC', 'Java Swing'],
    github: 'https://github.com/Shreejal-khatri/CourseManagementSystem',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753609712/andrew-neel-cckf4TsHAuw-unsplash_g9p5a1.jpg'
  },
  {
    title: 'Game AI with Unity',
    description: 'An intelligent game system implementing Ant Colony Optimization algorithms for dynamic enemy pathfinding and strategic behavior. Showcases advanced AI techniques in interactive game environments.',
    tech: ['Unity', 'C#', 'ACO Algorithm'],
    github: 'https://github.com/yourusername/game-ai-unity',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1760519647/nikita-kachanovsky-FJFPuE1MAOM-unsplash_irctaq.jpg'
  }
];

const Projects = () => {
  const handleLinkClick = (e, url) => {
    if (url === '#') {
      e.preventDefault();
      return;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications and software solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 h-full">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  
                  {/* Floating tag on image */}
                  <div className="absolute top-4 right-4 bg-green-400/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-bold">
                    {project.tech[0]}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800/80 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-700/50 hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      onClick={(e) => handleLinkClick(e, project.github)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-green-400 text-gray-300 hover:text-gray-900 px-5 py-2.5 rounded-lg transition-all duration-300 font-medium group/btn"
                    >
                      <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>View Code</span>
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        onClick={(e) => handleLinkClick(e, project.live)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-green-400 hover:bg-green-400 text-green-400 hover:text-gray-900 px-5 py-2.5 rounded-lg transition-all duration-300 font-medium group/btn"
                      >
                        <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;