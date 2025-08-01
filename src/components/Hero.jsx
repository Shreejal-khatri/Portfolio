import { useRef, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = ({ scrollToSection }) => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const socialRef = useRef(null);
  const scrollRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current || !titleRef.current || !descRef.current || 
        !socialRef.current || !scrollRef.current || !imageRef.current) {
      return;
    }

    gsap.set([titleRef.current, descRef.current, ...socialRef.current.children, scrollRef.current, imageRef.current], {
      opacity: 0,
      y: 20
    });
    gsap.set(imageRef.current, { x: 50 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(nameRef.current, {
      duration: 1.5,
      text: {
        value: "Shreejal Khatri",
        speed: 0.8,
      },
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.5")
    .to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.3")
    .to(socialRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.5
    }, "-=0.2")
    .to(scrollRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5
    }, "-=0.1")
    .to(imageRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'back.out(1.2)'
    }, "-=0.5");

    return () => tl.kill();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dzrfxgqb6/video/upload/v1753612814/2217343-uhd_3840_2160_30fps_1_jclowv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="text-center md:text-left z-10 md:w-1/2">
          <div className="mb-8">
            <h1 
              ref={nameRef}
              className="text-5xl md:text-7xl font-bold mb-6 text-white whitespace-nowrap"
            ></h1>
            <p 
              ref={titleRef}
              className="text-2xl md:text-3xl text-green-400 mb-8 opacity-0"
            >
              Full-Stack Developer
            </p>
            <p 
              ref={descRef}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed opacity-0"
            >
              I craft exceptional digital experiences with cutting-edge technologies. 
              From innovative concepts to seamless deployment, I transform ideas into reality.
            </p>
          </div>

          <div 
            ref={socialRef}
            className="flex justify-center md:justify-start space-x-6 mb-12"
          >
            <button 
              onClick={() => window.open('https://github.com/Shreejal-khatri', '_blank')}
              className="p-4 bg-gray-900 rounded-full border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:scale-110 opacity-0"
            >
              <Github size={24} />
            </button>
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/shreejal-khatri-652b4526a', '_blank')}
              className="p-4 bg-gray-900 rounded-full border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:scale-110 opacity-0"
            >
              <Linkedin size={24} />
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:shreejalkhatri123@gmail.com'}
              className="p-4 bg-gray-900 rounded-full border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:scale-110 opacity-0"
            >
              <Mail size={24} />
            </button>
          </div>
          
          <button
            ref={scrollRef}
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-green-400 transition-colors opacity-0"
          >
            <ChevronDown size={36} className="text-green-400" />
          </button>
        </div>

        <div className="hidden md:block md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img 
            ref={imageRef}
            src="https://res.cloudinary.com/dzrfxgqb6/image/upload/v1753613339/IMG20250614125953-min_mv8ts1.jpg" 
            alt="Shreejal Khatri" 
            className="profile-image rounded-lg w-full max-w-md object-cover border-4 border-green-400 shadow-lg shadow-green-400/50 opacity-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
