import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronDown, Github, Linkedin, Twitter, Mail, FileText, Phone, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import image and PDF properly
import ZohaibImage from '../../assets/zohaib-profile.jpeg'
import CV from '../../assets/Zohaib Younis (1).pdf';

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 80px 0 60px;
          background: #0a0a0a;
        }
        
        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.08;
          animation: pulseGlow 8s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes pulseGlow {
          0% { opacity: 0.05; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0.15; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        /* Right Side - Image */
        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 480px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 25px 80px rgba(99, 102, 241, 0.25);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hero-image-container:hover {
          transform: scale(1.03) translateY(-8px);
          box-shadow: 0 40px 100px rgba(99, 102, 241, 0.4);
        }
        .hero-image-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05));
          z-index: 2;
          pointer-events: none;
        }
        .hero-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hero-image-container:hover img {
          transform: scale(1.08);
        }
        
        /* Decorative elements */
        .floating-element {
          position: absolute;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.08);
          animation: float 6s ease-in-out infinite;
          z-index: 1;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .floating-element:nth-child(1) {
          width: 80px;
          height: 80px;
          top: -30px;
          right: -30px;
          animation-delay: 0s;
          background: rgba(99, 102, 241, 0.12);
        }
        .floating-element:nth-child(2) {
          width: 60px;
          height: 60px;
          bottom: -25px;
          left: -25px;
          animation-delay: 2s;
          background: rgba(139, 92, 246, 0.15);
        }
        .floating-element:nth-child(3) {
          width: 40px;
          height: 40px;
          top: 50%;
          right: -40px;
          animation-delay: 4s;
          background: rgba(99, 102, 241, 0.2);
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-20px) scale(1.1) rotate(180deg); }
          100% { transform: translateY(0px) scale(1) rotate(360deg); }
        }
        
        /* Left Side - Content */
        .hero-content {
          text-align: left;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.15);
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #8b5cf6;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
          margin-bottom: 1.2rem;
        }
        .hero-badge .dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .hero-title {
          font-size: clamp(2.8rem, 5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .hero-title .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientMove 3s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 500;
          color: #a0a0a0;
          min-height: 3rem;
          margin-bottom: 0.8rem;
        }
        .hero-subtitle .highlight {
          color: #8b5cf6;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          color: #a0a0a0;
          max-width: 500px;
          line-height: 1.8;
          opacity: 0.85;
          margin-bottom: 2rem;
        }
        
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.8rem 2.2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 25px rgba(99, 102, 241, 0.35);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .btn-primary:hover::before {
          left: 100%;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 40px rgba(99, 102, 241, 0.5);
        }
        
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.8rem 2.2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }
        .hero-socials a {
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
          backdrop-filter: blur(10px);
        }
        .hero-socials a:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border-color: transparent;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
        }
        
        /* Contact Info Section - Proper Icons */
        .hero-contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem 1.5rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .hero-contact-info .contact-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #a0a0a0;
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          padding: 0.3rem 0.8rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .hero-contact-info .contact-item:hover {
          color: #8b5cf6;
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
        }
        .hero-contact-info .contact-item .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(99, 102, 241, 0.1);
          color: #8b5cf6;
          flex-shrink: 0;
        }
        .hero-contact-info .contact-item .icon-wrapper svg {
          width: 14px;
          height: 14px;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          color: #a0a0a0;
          opacity: 0.4;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .hero-content {
            text-align: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .hero-contact-info {
            justify-content: center;
          }
          .hero-image-container {
            max-width: 400px;
            height: 400px;
            margin: 0 auto;
          }
          .hero-section {
            padding: 60px 0 60px;
          }
          .hero-title {
            font-size: clamp(2.5rem, 6vw, 3.5rem);
          }
        }
        @media (max-width: 768px) {
          .hero-section { 
            padding: 40px 0 50px;
          }
          .hero-image-container {
            max-width: 320px;
            height: 320px;
          }
          .hero-cta { 
            flex-direction: column; 
            width: 100%; 
            max-width: 300px; 
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.5rem;
          }
          .hero-cta .btn-primary, 
          .hero-cta .btn-secondary { 
            width: 100%; 
            justify-content: center; 
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-contact-info {
            flex-direction: column;
            align-items: center;
            gap: 0.6rem;
          }
          .hero-contact-info .contact-item {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .hero-container { padding: 0 1rem; }
          .hero-title { font-size: 2.2rem; }
          .hero-image-container {
            max-width: 260px;
            height: 260px;
          }
          .hero-section {
            padding: 30px 0 40px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-glow"></div>

        <div className="hero-container">
          <div className="hero-wrapper">
            {/* Left Side - Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="hero-badge">
                  <span className="dot"></span>
                  Available for Freelance
                </span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm <br />
                <span className="text-gradient">Zohaib Younis</span>
              </motion.h1>

              <motion.div
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <TypeAnimation
                  sequence={[
                    'Senior Frontend Developer',
                    2000,
                    'React & Next.js Expert',
                    2000,
                    'UI/UX Design Enthusiast',
                    2000,
                    'Web Performance Specialist',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I craft premium, high-performance web applications with a focus on
                exceptional user experiences and modern design aesthetics.
              </motion.p>

              <motion.div
                className="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link to="/contact" className="btn-primary">
                  <Mail size={18} />
                  Hire Me
                </Link>
                <a
                  href={CV}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Zohaib_Younis_CV.pdf"
                >
                  <FileText size={18} />
                  Download CV
                </a>
              </motion.div>

              <motion.div
                className="hero-socials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="https://github.com/Zohaib-Younis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zohaib-younis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/zohaib.mayo_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </motion.div>

              {/* Contact Information with Proper Icons */}
              <motion.div
                className="hero-contact-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a href="https://wa.me/923245454800" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="icon-wrapper">
                    <Phone size={14} />
                  </span>
                  +92 324 5454800
                </a>
                <a href="mailto:mr.zohaibyounus@gmail.com" className="contact-item">
                  <span className="icon-wrapper">
                    <Mail size={14} />
                  </span>
                  mr.zohaibyounus@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/zohaib-younis/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="icon-wrapper">
                    <Linkedin size={14} />
                  </span>
                  LinkedIn
                </a>
                <a href="https://github.com/Zohaib-Younis" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="icon-wrapper">
                    <Github size={14} />
                  </span>
                  GitHub
                </a>
                <a href="https://www.instagram.com/zohaib.mayo_/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="icon-wrapper">
                    <Instagram size={14} />
                  </span>
                  Instagram
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <div className="hero-image-container">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <img
                  src={ZohaibImage}
                  alt="Zohaib Younis - Web Developer"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;