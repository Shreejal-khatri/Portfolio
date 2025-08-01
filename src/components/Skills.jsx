import React from 'react';
import { Code, Cpu, Database, GitBranch } from 'lucide-react';
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

  const skillsCategories = [
    {
      title: "Core Technologies",
      icon: Cpu,
      skills: [
        { name: "Node.js", level: 90, logo: skillLogos.nodejs },
        { name: "Express.js", level: 88, logo: skillLogos.express },
        { name: "Java", level: 85, logo: skillLogos.java },
        { name: "C Programming", level: 80, logo: skillLogos.c },
        { name: "Python", level: 85, logo: skillLogos.python }
      ],
      color: "text-blue-400",
      barColor: "bg-blue-400"
    },
    {
      title: "Frontend & Databases",
      icon: Database,
      skills: [
        { name: "React", level: 90, logo: skillLogos.react },
        { name: "MongoDB", level: 85, logo: skillLogos.mongodb },
        { name: "SQL", level: 80, logo: skillLogos.sql },
        { name: "Figma", level: 75, logo: skillLogos.figma },
        { name: "UI/UX Design", level: 85, logo: skillLogos.design }
      ],
      color: "text-green-400",
      barColor: "bg-green-400"
    },
    {
      title: "Professional Skills",
      icon: GitBranch,
      skills: [
        { name: "Team Collaboration", level: 95, logo: skillLogos.teamwork },
        { name: "Report Writing", level: 90, logo: skillLogos.writing },
        { name: "Technical Documentation", level: 85, logo: skillLogos.writing },
        { name: "Agile Methodology", level: 80, logo: skillLogos.teamwork },
        { name: "Problem Solving", level: 90, logo: skillLogos.teamwork }
      ],
      color: "text-purple-400",
      barColor: "bg-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
          Technical & Professional Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-[1.02] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <div className={`flex items-center mb-6 ${category.color}`}>
                <div className="p-3 bg-gray-700 rounded-lg mr-4 group-hover:bg-opacity-80 transition-all">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-6 h-6 mr-2 object-contain"
                          />
                        ) : (
                          <div className="w-6 h-6 mr-2 flex items-center justify-center">
                            <Code size={16} className={category.color} />
                          </div>
                        )}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${category.barColor}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "Node.js", logo: skillLogos.nodejs },
            { name: "Express.js", logo: skillLogos.express },
            { name: "Java", logo: skillLogos.java },
            { name: "Python", logo: skillLogos.python },
            { name: "React", logo: skillLogos.react },
            { name: "MongoDB", logo: skillLogos.mongodb },
            { name: "SQL", logo: skillLogos.sql },
            { name: "Figma", logo: skillLogos.figma },
            { name: "Teamwork", logo: skillLogos.teamwork },
            { name: "Report Writing", logo: skillLogos.writing },
            { name: "C Programming", logo: skillLogos.c },
            { name: "UI/UX Design", logo: skillLogos.design }
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-400 transition-all hover:scale-105"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-gray-300 text-center text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
