import React, { useEffect, useRef } from 'react';
import {
  GraduationCap, Award, BookOpen, Briefcase, Calendar,
  Code, Cpu, Server, Database
} from 'lucide-react';

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      nodeIcon: Code,
      title: 'Bsc(Hons) in Computer Science',
      institution: 'University of Wolverhampton',
      period: '2022 - 2025',
      description: 'Graduated with honors in Computing, with a strong focus on web application development, graphic design, and problem-solving'
    },
    {
      icon: Award,
      nodeIcon: Cpu,
      title: 'Web Application Bootcamp',
      institution: 'Herald College Kathmandu',
      period: '2023-2024',
      description: 'Intensive 5-month program covering modern web technologies and best practices, including hands-on training in front-end and back-end development, version control, and deployment strategies.'
    },
    {
      icon: BookOpen,
      nodeIcon: Database,
      title: 'Created KhatriShops',
      institution: 'MERN Stack',
      period: '2024-2025',
      description: 'Professionalally created a clothing website with MERN Stack according to client demand. The project highlights the development of a full-stack web application for an online clothing store. '
    },
    {
      icon: Briefcase,
      nodeIcon: Server,
      title: 'Fresher Full-Stack Developer',
      institution: '',
      period: '2023 - Present',
      description: 'Professionally developed a full-stack web application using the MERN Stack, tailored to meet specific client requirements. The project showcases expertise in building scalable, responsive, and user-friendly interfaces with robust backend functionality.'
    }
  ];

  const educationRef = useRef(null);
  const itemRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                entry.target.classList.add('animate-timeline');
                const nodeIcon = entry.target.querySelector('.timeline-node-icon');
                if (nodeIcon) {
                  nodeIcon.classList.add('animate-pulse');
                  setTimeout(() => {
                    nodeIcon.classList.remove('animate-pulse');
                  }, 1000);
                }
              }, index * 200);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        videoRef.current.classList.add('opacity-50');
      });
    }

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const cloudinaryBase = 'https://res.cloudinary.com/dzrfxgqb6/video/upload';
  const publicId = 'v1753686723/1472014-uhd_3840_2160_30fps_ligw0w';
  const transformations = 'f_auto,q_auto:low,w_auto,c_fill';

  const videoSrcMp4 = `${cloudinaryBase}/${transformations}/${publicId}.mp4`;
  const videoSrcWebm = `${cloudinaryBase}/${transformations}/${publicId}.webm`;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={educationRef}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover opacity-0 transition-opacity duration-1000 brightness-[1.15]"
          aria-hidden="true"
          preload="auto"
        >
          <source src={videoSrcMp4} type="video/mp4" />
          <source src={videoSrcWebm} type="video/webm" />
        </video>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-green-400">
          Education & Experience
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-green-400 to-green-600 transform -translate-x-1/2 z-10"></div>

          {education.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative mb-16 last:mb-8 opacity-0 transition-all duration-700 ease-out"
              style={{
                transform: 'translateY(40px)'
              }}
            >
              {/* Icon Node */}
              <div className="absolute md:left-1/2 md:top-6 left-4 top-2 md:transform md:-translate-x-1/2 z-20 w-10 h-10 bg-green-500 rounded-full border-4 border-black flex items-center justify-center shadow-md">
                <item.nodeIcon className="text-white timeline-node-icon" size={18} />
              </div>

              {/* Timeline Content */}
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-start`}>
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-green-400 transition duration-300 hover:shadow-lg hover:shadow-green-400/10">
                    <div className="flex items-center justify-start md:justify-end mb-4">
                      <item.icon className="text-green-400 mr-3" size={22} />
                      <span className="text-sm text-green-400 font-medium flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <h4 className="text-green-400 font-semibold mb-3">{item.institution}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-timeline {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1);
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
