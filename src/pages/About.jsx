import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import {
  GraduationCap,
  Users,
  Code2,
  BarChart3,
  BookOpen,
  Award,
  Briefcase,
  Laptop,
  Mail,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

const About = () => {
  const funFacts = [
    {
      icon: <GraduationCap size={24} />,
      label: 'BSIT Graduate',
      value: 'Superior University, Lahore'
    },
    {
      icon: <Users size={24} />,
      label: 'Teaching Experience',
      value: '3+ Years'
    },
    {
      icon: <Code2 size={24} />,
      label: 'Passionate About',
      value: 'Web Development & Technology'
    },
    {
      icon: <BarChart3 size={24} />,
      label: 'Skilled In',
      value: 'Advanced Excel & Data Analysis'
    },
    {
      icon: <BookOpen size={24} />,
      label: 'Learning',
      value: 'Always learning new technologies'
    },
    {
      icon: <Award size={24} />,
      label: 'Certifications',
      value: 'Full Stack Web & Network Support'
    }
  ];

  return (
    <>
      <style>{`
        .about-section {
          padding: 5rem 0;
          background: #0a0a0a;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .section-title .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-subtitle {
          text-align: center;
          color: #a0a0a0;
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        
        /* About Grid - Equal height columns */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }
        .about-text {
          color: #c0c0c0;
          line-height: 1.8;
          background: #111111;
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }
        .about-text p {
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .about-text p:last-child {
          margin-bottom: 0;
        }
        .about-text .greeting {
          font-size: 1.4rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .about-text .highlight {
          color: #8b5cf6;
          font-weight: 500;
        }
        
        /* Fun Facts - Full height matching left side */
        .fun-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          height: 100%;
        }
        .fact-card {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 1.5rem 1rem;
          transition: all 0.3s ease;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 120px;
        }
        .fact-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .fact-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(99, 102, 241, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          margin: 0 auto 0.6rem;
        }
        .fact-label {
          font-size: 0.7rem;
          color: #8b5cf6;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .fact-value {
          font-size: 0.9rem;
          color: #ffffff;
          font-weight: 500;
          margin-top: 0.2rem;
          line-height: 1.3;
        }
        
        /* Stats */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stat-item {
          text-align: center;
          background: #111111;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .stat-item:hover {
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
        }
        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          color: #a0a0a0;
          font-size: 0.85rem;
          margin-top: 0.3rem;
        }
        
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .fun-facts {
            grid-template-columns: repeat(3, 1fr);
          }
          .about-text {
            padding: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .about-section {
            padding: 3rem 0;
          }
          .about-container { padding: 0 1rem; }
          .fun-facts {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .fact-card {
            padding: 1.2rem 0.8rem;
            min-height: 100px;
          }
          .fact-icon {
            width: 44px;
            height: 44px;
          }
          .fact-icon svg {
            width: 20px;
            height: 20px;
          }
          .about-text {
            padding: 1.2rem;
          }
          .about-text p {
            font-size: 0.95rem;
          }
        }
        @media (max-width: 480px) {
          .fun-facts {
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem;
          }
          .fact-card {
            padding: 1rem 0.6rem;
            min-height: 90px;
          }
          .fact-icon {
            width: 38px;
            height: 38px;
          }
          .fact-icon svg {
            width: 18px;
            height: 18px;
          }
          .fact-value {
            font-size: 0.8rem;
          }
          .stats-row {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
          }
          .stat-item {
            padding: 1rem;
          }
          .stat-number {
            font-size: 1.5rem;
          }
          .stat-label {
            font-size: 0.75rem;
          }
          .about-text {
            padding: 1rem;
          }
          .about-text p {
            font-size: 0.9rem;
            margin-bottom: 0.8rem;
          }
          .about-text .greeting {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-container">
          <Hero />

          <div className="about-grid">
            {/* Left - About Text */}
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="greeting">
                Hi, I'm <span className="highlight">Zohaib Younis</span> 👋
              </p>
              <p>
                I'm a <span className="highlight">BS Information Technology</span> graduate from
                Superior University, Lahore. I am passionate about technology and enjoy building
                modern web applications, solving technical problems, and continuously learning
                new skills.
              </p>
              <p>
                I have <span className="highlight">over 3 years of teaching experience</span>,
                where I taught Microsoft Office applications and computer-related subjects.
                This experience has strengthened my communication, leadership, and
                problem-solving abilities.
              </p>
              <p>
                My technical expertise includes <span className="highlight">HTML, CSS, JavaScript,
                  React.js, Node.js, Express.js, MySQL, MongoDB</span>, networking fundamentals,
                and advanced Microsoft Excel. I have also completed certifications in
                <span className="highlight"> Full Stack Web Development</span> and
                <span className="highlight"> Network Support & Security</span>, which have
                helped me develop both software development and IT support skills.
              </p>
              <p>
                I am currently seeking opportunities as a <span className="highlight">
                  Web Developer, IT Support Engineer, or Data/MIS Executive</span>, where I can
                apply my technical knowledge, contribute to meaningful projects, and continue
                growing as an IT professional.
              </p>
              <p>
                I believe in <span className="highlight">continuous learning, teamwork,
                  and creating technology solutions</span> that make a real impact.
              </p>
            </motion.div>

            {/* Right - Fun Facts - Equal height */}
            <motion.div
              className="fun-facts"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="fact-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="fact-icon">
                    {fact.icon}
                  </div>
                  <div className="fact-label">{fact.label}</div>
                  <div className="fact-value">{fact.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="stats-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Teaching</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Learning Mindset</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;