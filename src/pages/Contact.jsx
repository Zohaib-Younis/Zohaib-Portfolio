import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:mr.zohaibyounus@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Message from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'mr.zohaibyounus@gmail.com',
      link: 'mailto:mr.zohaibyounus@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+92 324 5454800',
      link: 'tel:+923245454800'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Zohaib-Younis', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/zohaib-younis/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/zohaib.mayo_/', label: 'Instagram' },
    { icon: <MessageCircle size={20} />, url: 'https://wa.me/923245454800', label: 'WhatsApp' }
  ];

  return (
    <>
      <style>{`
        .contact-page {
          padding: 0.5rem 0 4rem;
          background: #0a0a0a;
          min-height: calc(100vh - 60px);
          display: flex;
          align-items: center;
          margin-top: -1rem;
        }
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          align-items: start;
        }
        
        /* Left Side - Contact Info */
        .contact-info {
          background: #111111;
          padding: 2.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          height: 100%;
        }
        .contact-info-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .contact-info-title .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-info-subtitle {
          color: #a0a0a0;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .contact-item:last-child {
          border-bottom: none;
        }
        .contact-item:hover {
          transform: translateX(5px);
        }
        .contact-item .icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          flex-shrink: 0;
        }
        .contact-item .info {
          flex: 1;
        }
        .contact-item .info .label {
          font-size: 0.7rem;
          color: #8b5cf6;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-item .info .value {
          color: #ffffff;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-item .info .value:hover {
          color: #8b5cf6;
        }
        
        /* Social Links */
        .social-links {
          display: flex;
          gap: 0.8rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #a0a0a0;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-links a:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border-color: transparent;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
        }
        
        /* Right Side - Form */
        .contact-form-wrapper {
          background: #111111;
          padding: 2.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .contact-form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }
        .contact-form-subtitle {
          color: #a0a0a0;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.2rem;
        }
        .form-group label {
          display: block;
          color: #a0a0a0;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          background: rgba(255, 255, 255, 0.08);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #666666;
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.9rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.95rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 25px rgba(99, 102, 241, 0.35);
          position: relative;
          overflow: hidden;
        }
        .btn-submit::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .btn-submit:hover::before {
          left: 100%;
        }
        .btn-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 40px rgba(99, 102, 241, 0.5);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-submit .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .submit-status {
          margin-top: 1rem;
          padding: 0.8rem;
          border-radius: 0.75rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .submit-status.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        .submit-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        @media (max-width: 992px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-info {
            padding: 2rem;
          }
          .contact-form-wrapper {
            padding: 2rem;
          }
        }
        @media (max-width: 768px) {
          .contact-page {
            padding: 0.3rem 0 2.5rem;
            min-height: auto;
            margin-top: 0;
          }
          .contact-container { 
            padding: 0 1rem; 
          }
          .contact-info {
            padding: 1.5rem;
          }
          .contact-form-wrapper {
            padding: 1.5rem;
          }
          .contact-info-title {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .contact-page {
            padding: 0.2rem 0 2rem;
          }
          .contact-info {
            padding: 1.2rem;
          }
          .contact-form-wrapper {
            padding: 1.2rem;
          }
          .contact-info-title {
            font-size: 1.3rem;
          }
          .contact-item .info .value {
            font-size: 0.85rem;
          }
          .social-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <section className="contact-page" id="contact">
        <div className="contact-container">
          <motion.div
            className="contact-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Side - Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="contact-info-title">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="contact-info-subtitle">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="icon-wrapper">{item.icon}</div>
                  <div className="info">
                    <div className="label">{item.label}</div>
                    <a href={item.link} className="value" target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="contact-form-title">Send Me a Message</h3>
              <p className="contact-form-subtitle">
                Fill in the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner">⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="submit-status success">
                    ✅ Email client opened! Please send your message.
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;