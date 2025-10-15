import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillLogos = {
    nodejs: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604609/nodejs_cunyzj.png',
    express: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604714/js_qngtjh.png',
    java: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604476/java_logo_dl5rro.png',
    c: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604771/letter-c_fwoxxm.png',
    python: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604826/python_dnqfm9.png',
    react: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753605101/science_ckqqy6.png',
    mongodb: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604879/database-storage_swwswu.png',
    sql: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753605995/database_oea5ul.png',
    figma: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604610/figma_nvpi0j.png',
    teamwork: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604963/partners_a3gclc.png',
    writing: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604918/report_mkq29e.png',
    design: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753604610/figma_nvpi0j.png'
  };

  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", logo: skillLogos.java },
        { name: "Python", logo: skillLogos.python },
        { name: "C Programming", logo: skillLogos.c },
        { name: "JavaScript", logo: skillLogos.express }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "Node.js", logo: skillLogos.nodejs },
        { name: "Express.js", logo: skillLogos.express },
        { name: "React", logo: skillLogos.react },
        { name: "MongoDB", logo: skillLogos.mongodb }
      ]
    },
    {
      category: "Design & Database",
      skills: [
        { name: "SQL", logo: skillLogos.sql },
        { name: "Figma", logo: skillLogos.figma },
        { name: "UI/UX Design", logo: skillLogos.design }
      ]
    },
    {
      category: "Professional Skills",
      skills: [
        { name: "Team Collaboration", logo: skillLogos.teamwork },
        { name: "Technical Writing", logo: skillLogos.writing },
        { name: "Problem Solving", logo: skillLogos.teamwork }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-8 pb-3 border-b border-gray-700">
                {section.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {section.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center justify-center border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-gray-300 text-center text-sm font-medium">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;