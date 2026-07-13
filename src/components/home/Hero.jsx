import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronDown, Github, Linkedin, Twitter, Mail, FileText, Phone, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import image and PDF properly
import ZohaibImage from '../../assets/zohaib-profile.jpeg'
import CV from '../../assets/Zohaib Younis Portfolio.pdf';

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
          gap: 3rem;
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
          max-width: 450px;
          height: 450px;
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
          width: 70px;
          height: 70px;
          top: -25px;
          right: -25px;
          animation-delay: 0s;
          background: rgba(99, 102, 241, 0.12);
        }
        .floating-element:nth-child(2) {
          width: 50px;
          height: 50px;
          bottom: -20px;
          left: -20px;
          animation-delay: 2s;
          background: rgba(139, 92, 246, 0.15);
        }
        .floating-element:nth-child(3) {
          width: 35px;
          height: 35px;
          top: 50%;
          right: -35px;
          animation-delay: 4s;
          background: rgba(99, 102, 241, 0.2);
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-15px) scale(1.1) rotate(180deg); }
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
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #8b5cf6;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
          margin-bottom: 1rem;
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
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 0.3rem;
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
          font-size: clamp(1rem, 2vw, 1.4rem);
          font-weight: 500;
          color: #a0a0a0;
          min-height: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .hero-subtitle .highlight {
          color: #8b5cf6;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: clamp(0.9rem, 1.1vw, 1rem);
          color: #a0a0a0;
          max-width: 500px;
          line-height: 1.7;
          opacity: 0.85;
          margin-bottom: 1.5rem;
        }
        
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem 1.8rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 25px rgba(99, 102, 241, 0.35);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
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
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(99, 102, 241, 0.5);
        }
        
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem 1.8rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        
        /* Social Icons - Only icons, no text */
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .hero-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
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
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
        }
        .hero-socials a svg {
          width: 18px;
          height: 18px;
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
        @media (max-width: 1024px) {
          .hero-wrapper {
            gap: 2.5rem;
          }
          .hero-image-container {
            max-width: 400px;
            height: 400px;
          }
        }
        
        @media (max-width: 992px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
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
          .hero-image-container {
            max-width: 380px;
            height: 380px;
            margin: 0 auto;
          }
          .hero-section {
            padding: 60px 0 50px;
          }
          .hero-title {
            font-size: clamp(2.5rem, 6vw, 3.5rem);
          }
        }
        @media (max-width: 768px) {
          .hero-section { 
            padding: 50px 0 40px;
          }
          .hero-container {
            padding: 0 1.2rem;
          }
          .hero-image-container {
            max-width: 320px;
            height: 320px;
          }
          .hero-cta { 
            flex-direction: row;
            justify-content: center;
            width: 100%;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.2rem;
            gap: 0.6rem;
            flex-wrap: wrap;
          }
          .hero-cta .btn-primary, 
          .hero-cta .btn-secondary { 
            flex: 1;
            min-width: 140px;
            max-width: 200px;
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
            justify-content: center;
          }
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-socials a {
            width: 38px;
            height: 38px;
          }
          .hero-socials a svg {
            width: 16px;
            height: 16px;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .hero-description {
            font-size: 0.85rem;
          }
        }
        @media (max-width: 480px) {
          .hero-container { 
            padding: 0 0.8rem; 
          }
          .hero-title { 
            font-size: 1.8rem; 
          }
          .hero-image-container {
            max-width: 260px;
            height: 260px;
          }
          .hero-section {
            padding: 40px 0 30px;
          }
          .hero-socials a {
            width: 34px;
            height: 34px;
          }
          .hero-socials a svg {
            width: 14px;
            height: 14px;
          }
          .hero-socials {
            gap: 0.4rem;
          }
          .hero-cta {
            flex-direction: column;
            gap: 0.5rem;
            max-width: 220px;
          }
          .hero-cta .btn-primary, 
          .hero-cta .btn-secondary { 
            width: 100%;
            max-width: 100%;
            min-width: unset;
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
          .hero-badge {
            font-size: 0.65rem;
            padding: 0.2rem 0.8rem;
          }
          .hero-subtitle {
            font-size: 0.9rem;
            min-height: 2rem;
          }
          .hero-description {
            font-size: 0.8rem;
            margin-bottom: 1rem;
          }
          .floating-element {
            display: none;
          }
        }
        @media (max-width: 380px) {
          .hero-title {
            font-size: 1.5rem;
          }
          .hero-image-container {
            max-width: 220px;
            height: 220px;
          }
          .hero-cta {
            max-width: 180px;
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
                  <Mail size={16} />
                  Hire Me
                </Link>
                <a
                  href={CV}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Zohaib_Younis_CV.pdf"
                >
                  <FileText size={16} />
                  Download CV
                </a>
              </motion.div>

              {/* Social Icons - Only icons, no text */}
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
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zohaib-younis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/zohaib.mayo_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/923245454800"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="mailto:mr.zohaibyounus@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={18} />
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