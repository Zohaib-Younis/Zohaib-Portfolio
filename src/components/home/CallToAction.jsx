import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <>
      <style>{`
        .cta-section {
          padding: 5rem 0;
          background: #111111;
          position: relative;
          overflow: hidden;
        }
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.1;
          pointer-events: none;
        }
        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 10;
        }
        .cta-card {
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 2rem;
          padding: 2.5rem 2rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        .cta-card h2 {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        .cta-card .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-card p {
          color: #a0a0a0;
          max-width: 500px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
          text-decoration: none;
          width: 100%;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 35px rgba(99, 102, 241, 0.5);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.06);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          width: 100%;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }
        @media (min-width: 640px) {
          .cta-actions { flex-direction: row; justify-content: center; gap: 1rem; }
          .btn-primary, .btn-secondary { width: auto; min-width: 180px; }
        }
        @media (min-width: 768px) {
          .cta-card { padding: 4rem 3rem; border-radius: 3rem; }
        }
        @media (max-width: 768px) {
          .cta-section { padding: 3rem 0; }
          .cta-card { padding: 2rem 1.5rem; }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-glow"></div>

        <div className="cta-container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Let's build something <br />
              <span className="text-gradient">extraordinary together.</span>
            </h2>

            <p>
              I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it.
            </p>

            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight size={18} />
              </Link>
              <a href="mailto:mr.zohaibyounus@gmail.com" className="btn-secondary">
                <Mail size={18} /> mr.zohaibyounus@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;