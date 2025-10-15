import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const About = ({ scrollToSection }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753680003/fotis-fotopoulos-6sAl6aQ4OWI-unsplash_gfzh4f.jpg"
                alt="Developer workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Full Stack Developer
              </h3>
              <p className="text-green-400 text-lg font-medium">
                Building Modern Web Solutions
              </p>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Aspiring full stack developer with expertise in the MERN stack, Java, and C programming. 
                I combine technical proficiency with creative problem-solving to build efficient, scalable applications.
              </p>
              
              <p>
                Specializing in modern frontend frameworks like React and backend technologies including Node.js 
                and Python, I'm passionate about creating seamless user experiences and robust server architectures.
              </p>

              <p>
                With a strong foundation in UI/UX design using Figma and Adobe Express, I bridge the gap 
                between design and development to deliver polished, user-centric solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">10+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                <div className="text-gray-400 text-sm">Dedication</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/FinalCV.pdf"
                download
                className="group flex items-center justify-center gap-2 bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;