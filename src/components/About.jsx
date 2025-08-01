import React from 'react';
import { motion } from 'framer-motion';

const About = ({ scrollToSection }) => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const entryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 px-4 relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Tech Initials */}
        <motion.div className="absolute top-8 left-8 w-12 h-12 bg-cyan-500/5 border border-cyan-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_#22d3ee]" variants={floatingVariants} animate="animate">
          <span className="text-cyan-400 font-bold text-lg">M</span>
        </motion.div>
        <motion.div className="absolute top-8 right-8 w-10 h-10 bg-purple-500/5 border border-purple-400/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_#c084fc]" variants={floatingVariants} animate="animate">
          <span className="text-purple-400 font-bold text-sm">E</span>
        </motion.div>
        <motion.div className="absolute top-1/2 left-4 w-14 h-14 bg-blue-500/5 border border-blue-400/40 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_#60a5fa]" variants={floatingVariants} animate="animate">
          <span className="text-blue-400 font-bold text-xl">R</span>
        </motion.div>
        <motion.div className="absolute top-1/2 right-4 w-11 h-11 bg-emerald-500/5 border border-emerald-400/40 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_#34d399]" variants={floatingVariants} animate="animate">
          <span className="text-emerald-400 font-bold text-lg">N</span>
        </motion.div>
        {/* Additional Icons */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-500/5 border border-yellow-400/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_#facc15]" variants={floatingVariants} animate="animate">
          <span className="text-yellow-400 font-bold text-sm">P</span>
        </motion.div>
        <motion.div className="absolute bottom-16 right-16 w-10 h-10 bg-pink-500/5 border border-pink-400/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_#f472b6]" variants={floatingVariants} animate="animate">
          <span className="text-pink-400 font-bold text-sm">F</span>
        </motion.div>
        <motion.div className="absolute top-16 right-1/2 transform translate-x-1/2 w-10 h-10 bg-indigo-500/5 border border-indigo-400/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_#818cf8]" variants={floatingVariants} animate="animate">
          <span className="text-indigo-400 font-bold text-sm">C</span>
        </motion.div>
        <motion.div className="absolute bottom-4 left-4 w-10 h-10 bg-red-500/5 border border-red-400/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_#f87171]" variants={floatingVariants} animate="animate">
          <span className="text-red-400 font-bold text-sm">J</span>
        </motion.div>
        <motion.div className="absolute top-1/3 left-1/3 w-10 h-10 bg-lime-500/5 border border-lime-400/40 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_#a3e635]" variants={floatingVariants} animate="animate">
          <span className="text-lime-400 font-bold text-sm">T</span>
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={entryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-5xl font-bold text-center mb-20 text-green-400 drop-shadow-[0_0_10px_#22c55e]">
          About Me
        </h2>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border border-green-500 rounded-3xl bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] bg-repeat shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-full">
              <img
                src="https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753680003/fotis-fotopoulos-6sAl6aQ4OWI-unsplash_gfzh4f.jpg"
                alt="Main"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-1 bg-green-500" />

            {/* Text */}
            <div className="w-full lg:w-1/2 p-8 space-y-6 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-green-400">Full Stack Developer</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Aspiring full stack developer experienced with MERN stack, Java, C, Figma, and Adobe Express.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern frontend frameworks like React, and backend technologies like Node.js and Python. I'm always expanding my tech horizon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 text-center"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-black px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mt-20"></div>
      </motion.div>
    </section>
  );
};

export default About;
