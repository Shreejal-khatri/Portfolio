import React, { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [lastSubmittedTime, setLastSubmittedTime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const videoRef = useRef(null);
  const recaptchaRef = useRef(null);
  const modalRef = useRef(null);

  const setCookie = (name, value, minutes) => {
    const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  useEffect(() => {
    const storedTime = getCookie('lastContactTime');
    if (storedTime) setLastSubmittedTime(parseInt(storedTime));

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        videoRef.current.classList.add('opacity-30');
      });
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {});
      }
    };
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const generateToken = (email) => {
    return btoa(`${email}:${Date.now()}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const now = Date.now();
    const cooldown = 15 * 60 * 1000;

    if (lastSubmittedTime && now - lastSubmittedTime < cooldown) {
      const minutesLeft = Math.ceil((cooldown - (now - lastSubmittedTime)) / 60000);
      setSubmitStatus({
        success: false,
        message: `Please wait ${minutesLeft} more minute(s) before sending another message.`,
      });
      return;
    }

    if (!validateForm() || !recaptchaToken) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const token = generateToken(formData.email);
      const confirmLink = `${window.location.origin}/confirm?token=${encodeURIComponent(token)}&name=${encodeURIComponent(formData.name)}&message=${encodeURIComponent(formData.message)}`;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          confirm_link: confirmLink,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message: 'Confirmation email sent! Please check your inbox and verify your email.',
      });
      
      setShowModal(true);

      setFormData({ name: '', email: '', message: '' });
      setRecaptchaToken(null);
      setSubmitAttempted(false);
      setLastSubmittedTime(now);
      setCookie('lastContactTime', now, 15);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send confirmation email. Please try again or email me directly at shreejalkhatri123@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName) => setActiveField(fieldName);
  const handleBlur = () => setActiveField(null);

  const videoSrc = 'https://res.cloudinary.com/dzrfxgqb6/video/upload/v1753688611/216657_small_py1hfu.mp4';

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gray-900">
      {/* Modal for confirmation message */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
    <div 
      ref={modalRef}
      className="bg-gray-800 rounded-xl max-w-md w-full p-6 relative border-2 border-green-400 animate-pulse"
    >
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-900/20 mb-4">
          <Mail className="h-6 w-6 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Check Your Email!</h3>
        <p className="text-gray-300 mb-6">
          We've sent a confirmation email to your inbox. Please verify your email to complete the message sending process.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  </div>
)}


      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30 transition-opacity duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 neon-text">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={Mail}
                label="Email"
                value="shreejalkhatri123@gmail.com"
                link="mailto:shreejalkhatri123@gmail.com"
              />
              <ContactInfo
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/shreejal-khatri"
                link="https://linkedin.com/in/shreejal-khatri-652b4526a"
              />
              <ContactInfo
                icon={Github}
                label="GitHub"
                value="github.com/Shreejal-khatri"
                link="https://github.com/Shreejal-khatri"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <InputField
                    id={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field]}
                    activeField={activeField}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors[field]}
                  />
                  {errors[field] && (
                    <p className="mt-1 text-sm text-red-400">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 bg-gray-800 border-2 rounded-lg focus:outline-none text-white transition-all duration-300 ${
                    activeField === 'message'
                      ? 'border-green-400 neon-border-flicker'
                      : errors.message
                      ? 'border-red-500'
                      : 'border-gray-700 hover:border-green-400'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="mt-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
                {!recaptchaToken && submitAttempted && (
                  <p className="text-sm text-red-400 mt-2">
                    Please verify you're not a robot
                  </p>
                )}
              </div>

              {submitStatus && !submitStatus.success && (
                <div className={`p-3 rounded-lg text-center ${
                  submitStatus.success
                    ? 'bg-green-900/50 text-green-400'
                    : 'bg-red-900/50 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  (lastSubmittedTime && Date.now() - lastSubmittedTime < 15 * 60 * 1000)
                }
                className={`w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg transition-colors ${
                  isSubmitting ||
                  (lastSubmittedTime && Date.now() - lastSubmittedTime < 15 * 60 * 1000)
                    ? 'opacity-70 cursor-not-allowed'
                    : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .neon-text {
          color: #fff;
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
        }

        .neon-border-flicker {
          animation: border-flicker 1s infinite alternate;
        }

        @keyframes border-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            border-color: #0ff;
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.5),
                        0 0 10px rgba(0, 255, 255, 0.3);
          }
          20%, 24%, 55% {
            border-color: #0ff;
            box-shadow: none;
          }
        }
      `}</style>
    </section>
  );
};

const ContactInfo = ({ icon: Icon, label, value, link }) => (
  <div className="flex items-start">
    <div className="p-3 bg-green-900/20 rounded-lg mr-4">
      <Icon className="text-green-400" size={24} />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white">{label}</h4>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-green-400 transition-colors"
      >
        {value}
      </a>
    </div>
  </div>
);

const InputField = ({ id, label, type, value, activeField, handleFocus, handleBlur, handleChange, error }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      onFocus={() => handleFocus(id)}
      onBlur={handleBlur}
      required
      className={`w-full px-4 py-3 bg-gray-800 border-2 rounded-lg focus:outline-none text-white transition-all duration-300 ${
        activeField === id
          ? 'border-green-400 neon-border-flicker'
          : error
            ? 'border-red-500'
            : 'border-gray-700 hover:border-green-400'
      }`}
    />
  </div>
);

export default Contact;