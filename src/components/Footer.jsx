import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const togglePrivacyModal = () => setShowPrivacyModal(!showPrivacyModal);
  const toggleTermsModal = () => setShowTermsModal(!showTermsModal);

  const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 
    'Tailwind CSS', 'MongoDB', 'Express', 'Python'
  ];

  const cloudinaryLogoUrl = "https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753606877/SK.logo_kmomhl.png";

  return (
    <>
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg max-w-2xl w-full p-6 relative border border-gray-600/30">
            <button
              onClick={togglePrivacyModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-green-400 mb-4">Privacy Policy</h2>
            <div className="text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto pr-4">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              <h3 className="text-lg font-semibold text-white">Information Collection</h3>
              <p>We collect personal information you provide when you contact us through our forms, including your name, email address, and any messages you send.</p>
              <h3 className="text-lg font-semibold text-white">Use of Information</h3>
              <p>Your information is used solely to respond to your inquiries and provide requested services. We do not share your information with third parties except as necessary to fulfill your requests.</p>
              <h3 className="text-lg font-semibold text-white">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information. However, no internet transmission is 100% secure.</p>
              <h3 className="text-lg font-semibold text-white">Cookies</h3>
              <p>This website may use cookies to enhance user experience. You can disable cookies in your browser settings.</p>
            </div>
          </div>
        </div>
      )}

      {showTermsModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg max-w-2xl w-full p-6 relative border border-gray-600/30">
            <button
              onClick={toggleTermsModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-green-400 mb-4">Terms of Service</h2>
            <div className="text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto pr-4">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              <h3 className="text-lg font-semibold text-white">1. Acceptance of Terms</h3>
              <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
              <h3 className="text-lg font-semibold text-white">2. Intellectual Property</h3>
              <p>All content on this website, including text, graphics, logos, and code, is the property of Shreejal Khatri and is protected by copyright and other intellectual property laws.</p>
              <h3 className="text-lg font-semibold text-white">3. User Conduct</h3>
              <p>You agree not to use this website for any unlawful purpose or in any way that might harm, damage, or disparage any other party.</p>
              <h3 className="text-lg font-semibold text-white">4. Limitation of Liability</h3>
              <p>Shreejal Khatri shall not be liable for any damages resulting from the use or inability to use this website.</p>
              <h3 className="text-lg font-semibold text-white">5. Changes to Terms</h3>
              <p>These terms may be updated periodically. Continued use of the site after changes constitutes acceptance of the new terms.</p>
            </div>
          </div>
        </div>
      )}

      <footer className="py-12 px-4 sm:px-6 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src={cloudinaryLogoUrl} 
                alt="Shreejal Khatri Logo" 
                className="h-10 w-auto mr-3 rounded-full"
                onError={(e) => { e.target.onerror = null; e.target.src = "fallback-logo-url"; }}
              />
              <span className="text-2xl font-bold text-white hover:text-green-400 transition-colors cursor-pointer">
                Shreejal Khatri
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Shreejal-khatri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/shreejal-khatri-652b4526a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shreejalkhatri123@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About</h3>
              <p className="text-gray-400">Full-stack developer specializing in modern web technologies and creating exceptional digital experiences.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-green-400 transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© {new Date().getFullYear()} Shreejal Khatri. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button onClick={togglePrivacyModal} className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</button>
              <button onClick={toggleTermsModal} className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</button>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;