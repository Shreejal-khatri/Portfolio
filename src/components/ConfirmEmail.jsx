import { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaCheck, FaClock, FaExclamationTriangle, FaHome, FaEnvelope } from 'react-icons/fa';

const ConfirmEmail = () => {
  const [status, setStatus] = useState('loading');
  const [params] = useSearchParams();
  const hasSent = useRef(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (status !== 'loading') {
      timerRef.current = setTimeout(() => {
        navigate('/');
      }, 5000); 
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [status, navigate]);

  useEffect(() => {
    if (hasSent.current) return;

    const token = params.get('token');
    const name = params.get('name');
    const message = params.get('message');

    if (!token || !name || !message) {
      setStatus('error');
      return;
    }

    try {
      const decoded = atob(token);
      const [email, timestamp] = decoded.split(':');

      if (Date.now() - parseInt(timestamp) > 15 * 60 * 1000) {
        setStatus('expired');
        return;
      }

      hasSent.current = true;
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_FINAL_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
          time: new Date().toLocaleString()
        }
      )
      .then(() => setStatus('success'))
      .catch((err) => {
        console.error('Email sending failed:', err);
        setStatus('error');
      });

    } catch (err) {
      console.error('Invalid token format:', err);
      setStatus('error');
    }
  }, [params]);

  const handleGoHome = () => {
    navigate('/');
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        {status === 'loading' && (
          <div className="animate-bounce mb-6">
            <FaEnvelope className="text-blue-400 text-6xl mx-auto" />
          </div>
        )}
        {status === 'success' && (
          <div className="animate-bounce mb-6">
            <FaCheck className="text-green-400 text-6xl mx-auto" />
          </div>
        )}
        {status === 'expired' && (
          <div className="animate-bounce mb-6">
            <FaClock className="text-yellow-400 text-6xl mx-auto" />
          </div>
        )}
        {status === 'error' && (
          <div className="animate-bounce mb-6">
            <FaExclamationTriangle className="text-red-400 text-6xl mx-auto" />
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4">
          {status === 'loading' && 'Confirming your email...'}
          {status === 'success' && 'Success!'}
          {status === 'expired' && 'Link Expired'}
          {status === 'error' && 'Error'}
        </h2>

        <p className="mb-6">
          {status === 'loading' && 'Please wait while we process your request...'}
          {status === 'success' && 'Your message has been sent successfully!'}
          {status === 'expired' && 'This confirmation link has expired. Please try again.'}
          {status === 'error' && 'Invalid or broken confirmation link.'}
        </p>

        <p className="text-sm text-gray-400 mb-6">
          You'll be automatically redirected in 5 seconds...
        </p>

        <button
          onClick={handleGoHome}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors mx-auto"
        >
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmEmail;