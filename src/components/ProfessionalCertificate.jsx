import React, { useEffect, useRef, useState } from 'react';
import { Award, FileText, Calendar, Clock, CheckCircle, X } from 'lucide-react';

const ProfessionalCertificates = () => {
  const certificates = [
    {
      title: 'MERN Stack Training',
      institution: 'Mindrisers Institute of Technology',
      location: 'Putalisadak, Kathmandu, Nepal',
      period: '3 months',
      completionDate: 'October 5, 2025',
      certificationNo: 'MR-82009-MS',
      image: 'https://res.cloudinary.com/dzrfxgqb6/image/upload/v1760517826/certificate_1_pqwbbl.png',
      description:
        'Successfully completed comprehensive MERN Stack training covering MongoDB, Express.js, React, and Node.js with hands-on project development.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Full-Stack Development'],
    },
  ];

  const certRefs = useRef([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const certObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = certRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                entry.target.classList.add('animate-fade-in');
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    certRefs.current.forEach((item) => item && certObserver.observe(item));

    return () => {
      certRefs.current.forEach((item) => item && certObserver.unobserve(item));
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl w-full text-center relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-green-500/10 rounded-full mb-4 border border-green-500/20">
            <Award className="text-green-400 mr-2" size={20} />
            <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Verified Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent px-4">
            Professional Certification
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Validated credentials showcasing expertise in cutting-edge web development technologies.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="flex justify-center px-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certRefs.current[index] = el)}
              className="opacity-0 transition-all duration-700 transform hover:scale-[1.02] w-full max-w-4xl"
            >
              <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 shadow-2xl hover:shadow-green-400/20">
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 z-10"></div>
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-700 relative z-0"
                  />
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 shadow-xl animate-pulse">
                      <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                      Verified
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">{cert.title}</h3>
                  <p className="text-green-400 font-bold text-base sm:text-lg mb-1">{cert.institution}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">{cert.location}</p>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border border-green-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock className="text-green-400 flex-shrink-0" size={16} />
                      <span>{cert.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar className="text-green-400 flex-shrink-0" size={16} />
                      <span className="truncate">{cert.completionDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 font-mono text-xs sm:text-sm">
                      <FileText size={16} className="flex-shrink-0" />
                      <span className="truncate">{cert.certificationNo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Popup */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full max-w-6xl flex justify-center items-center">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-green-400 transition-colors text-sm sm:text-base font-semibold flex items-center gap-2 bg-gray-900/80 px-3 py-2 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm z-10"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Close</span>
            </button>
            <div className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl w-full max-h-[90vh] overflow-y-auto">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 1 !important;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalCertificates;