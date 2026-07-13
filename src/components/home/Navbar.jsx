import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2, Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CV from '../../assets/Zohaib Younis (1).pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/Zohaib-Younis', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/zohaib-younis/', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, url: 'https://www.instagram.com/zohaib.mayo_/', label: 'Instagram' },
    { icon: <Mail size={18} />, url: 'mailto:mr.zohaibyounus@gmail.com', label: 'Email' },
    { icon: <Phone size={18} />, url: 'https://wa.me/923245454800', label: 'WhatsApp' },
  ];

  // Handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Zohaib_Younis_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar-scrolled {
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.8rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-scrolled .navbar-container {
          padding: 0.5rem 1.5rem;
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #ffffff;
          text-decoration: none;
        }
        .logo-icon {
          color: #6366f1;
        }
        .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          position: relative;
          color: #a0a0a0;
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-link.active {
          color: #ffffff;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 35px rgba(99, 102, 241, 0.5);
        }
        .mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 8px;
          transition: background 0.3s ease;
        }
        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        
        /* Mobile Social Icons */
        .mobile-social-icons {
          display: none;
          align-items: center;
          gap: 0.5rem;
          margin-right: 0.5rem;
        }
        .mobile-social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #a0a0a0;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .mobile-social-icons a:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        .mobile-nav {
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .mobile-nav-link {
          padding: 0.75rem 0.5rem;
          color: #a0a0a0;
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          padding-left: 0.75rem;
        }
        .mobile-btn {
          margin-top: 0.5rem;
          text-align: center;
          width: 100%;
        }
        
        @media (min-width: 768px) {
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none; }
          .mobile-social-icons { display: none !important; }
          .navbar-container { padding: 1rem 1.5rem; }
          .navbar-scrolled .navbar-container { padding: 0.75rem 1.5rem; }
        }
        @media (max-width: 768px) {
          .navbar-container { 
            padding: 0.6rem 1rem; 
          }
          .navbar-scrolled .navbar-container { 
            padding: 0.4rem 1rem; 
          }
          .logo-link { 
            font-size: 1rem; 
          }
          .mobile-social-icons {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .mobile-social-icons a {
            width: 28px;
            height: 28px;
          }
          .mobile-social-icons a svg {
            width: 14px;
            height: 14px;
          }
          .mobile-social-icons {
            gap: 0.3rem;
          }
          .logo-link {
            font-size: 0.9rem;
          }
          .logo-link svg {
            width: 20px;
            height: 20px;
          }
        }
        @media (max-width: 400px) {
          .mobile-social-icons a {
            width: 24px;
            height: 24px;
          }
          .mobile-social-icons a svg {
            width: 12px;
            height: 12px;
          }
          .mobile-social-icons {
            gap: 0.2rem;
          }
        }
      `}</style>

      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <NavLink to="/" className="logo-link">
            <Code2 className="logo-icon" size={24} />
            <span>Zohaib<span className="text-gradient">.dev</span></span>
          </NavLink>

          {/* Mobile Social Icons */}
          <div className="mobile-social-icons">
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

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
            <button onClick={handleDownloadCV} className="btn-primary">
              Resume
            </button>
          </nav>

          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <button onClick={handleDownloadCV} className="btn-primary mobile-btn">
            Resume
          </button>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;