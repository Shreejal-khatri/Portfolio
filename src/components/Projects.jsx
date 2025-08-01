import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'KhatriShops',
    description: [
      "The project highlights the development of a full-stack web application for an online clothing store. It implements alot of features such as user authentication, secure payment processing with reputable soruces such as eSewa.",
      "It also has exchange items features along side with product management to manage the products in the store. All these features helped to provide smooth and easy shopping experience to the user. The project was designed to be scalable, user friendly and caters to both cutomers and administrators."
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Shreejal-khatri/clothing_website',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753609644/qin-fan-KfqgYzoH3Vk-unsplash_gmk7ne.jpg'
  },
  {
    title: 'Course Management System',
    description: [
      "Designed and developed a desktop application based on Java Swing for interactive GUI and JDBC to connect to databases in an easy manner. The system offered the facility of easy update of courses, registration of students, and record keeping.",
      "Integrated major features of creating courses, registering a student, and validating data, with real-time update in a MySQL/Oracle database. Targeted usability, error handling, and data consistency for easy user experience and reliable performance."
    ],
    tech: ['Java', 'MySQL', 'JavaFX', 'Spring Boot'],
    github: 'https://github.com/Shreejal-khatri/CourseManagementSystem',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753609712/andrew-neel-cckf4TsHAuw-unsplash_g9p5a1.jpg'
  },
  {
    title: 'Game AI with Unity',
    description: [
      "A Unity game utilizing Ant Colony Optimization (ACO) for enemy pathfinding and behavior.",
      "Implemented advanced AI algorithms to create dynamic enemy movements and strategic decision-making patterns within the game environment."
    ],
    tech: ['Unity', 'C#', 'ACO Algorithm'],
    github: 'https://github.com/yourusername/game-ai-unity',
    live: '#',
    image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753609814/element5-digital-dwcC-OJ-bRs-unsplash_yiqr3w.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeInOut'
    }
  })
};

const Projects = () => {
  const handleLinkClick = (e, url) => {
    if (url === '#') {
      e.preventDefault();
      return;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-green-400 transition-all hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white neon-text">
                  {project.title}
                </h3>
                <div className="text-gray-300 mb-4 leading-relaxed space-y-4">
                  {project.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    onClick={(e) => handleLinkClick(e, project.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    onClick={(e) => handleLinkClick(e, project.live)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neon Flicker Effect */}
      <style jsx>{`
        .neon-text {
          color: #fff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
          animation: flicker 1.5s infinite alternate;
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow:
              0 0 5px #0ff,
              0 0 10px #0ff,
              0 0 20px #0ff,
              0 0 40px #0ff;
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
