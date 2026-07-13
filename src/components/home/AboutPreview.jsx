import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

const AboutPreview = () => {
  return (
    <>
      <style>{`
        .about-section {
          padding: 5rem 0;
          background: #111111;
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .about-text h2 {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        .about-text .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 3px;
          margin-bottom: 1.5rem;
        }
        .about-text p {
          color: #a0a0a0;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #6366f1;
          font-weight: 600;
          transition: color 0.3s ease;
          text-decoration: none;
          margin-top: 0.5rem;
        }
        .about-link:hover {
          color: #8b5cf6;
        }
        .about-link .arrow {
          transition: transform 0.3s ease;
        }
        .about-link:hover .arrow {
          transform: translateX(4px);
        }
        .about-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .about-card {
          background: #0a0a0a;
          padding: 1.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .about-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        .about-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 1rem;
          background: rgba(99, 102, 241, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6366f1;
          margin-bottom: 1rem;
        }
        .about-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .about-card p {
          font-size: 0.85rem;
          color: #a0a0a0;
          line-height: 1.6;
        }
        .about-card-mt {
          margin-top: 1rem;
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
          .about-cards { grid-template-columns: 1fr 1fr; }
          .about-card-mt { margin-top: 0; }
        }
        @media (max-width: 768px) {
          .about-section { padding: 3rem 0; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2>
                Passion for <span className="text-gradient">Perfection</span>
              </h2>
              <div className="about-divider"></div>

              <p>
                With over a decade of experience in frontend development, I specialize in building robust, scalable, and visually stunning web applications. My approach combines deep technical expertise with a keen eye for design.
              </p>
              <p>
                I believe that great software is built at the intersection of beautiful user interfaces and highly optimized code architectures.
              </p>

              <Link to="/about" className="about-link">
                <span>Read My Full Story</span>
                <ArrowRight className="arrow" size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="about-cards"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-card">
                <div className="about-card-icon">
                  <Code2 size={24} />
                </div>
                <h3>Clean Architecture</h3>
                <p>Building maintainable codebases using modern design patterns and best practices.</p>
              </div>

              <div className="about-card about-card-mt">
                <div className="about-card-icon">
                  <Sparkles size={24} />
                </div>
                <h3>Pixel Perfect</h3>
                <p>Transforming UI/UX designs into flawless, responsive web experiences.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPreview;