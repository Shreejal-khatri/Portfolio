import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 
  const sections = ['home', 'about', 'skills', 'certificates', 'education', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Subtle glass overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' : 'bg-black/80'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753606877/SK.logo_kmomhl.png" 
                alt="Logo" 
                className="h-10 w-10 mr-3 rounded-full hover:scale-105 transition-transform"
              />
              <span 
                className="text-2xl font-bold text-white hover:text-green-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection('home')}
              >
                Shreejal Khatri
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-green-400 transition-colors relative px-1 ${
                    activeSection === item ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 ${
                    activeSection === item ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-white hover:text-green-400" />
              ) : (
                <Menu size={24} className="text-white hover:text-green-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu with Glass Effect */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-20 right-4 w-[calc(100%-2rem)] bg-gray-900/70 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 overflow-hidden z-50">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-4 px-6 capitalize transition-colors border-b border-gray-700/30 last:border-b-0 ${
                    activeSection === item 
                      ? 'text-green-400 bg-gray-800/30' 
                      : 'text-gray-200 hover:text-green-300 hover:bg-gray-800/20'
                  }`}
                >
                  <span className="flex items-center">
                    {item}
                    {activeSection === item && (
                      <span className="ml-2 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
