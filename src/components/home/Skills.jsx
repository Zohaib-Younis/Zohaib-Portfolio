import { motion } from 'framer-motion';

const skills = [
  // Development & Programming
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },

  // Microsoft Office Skills with accurate icons
  {
    name: 'Excel Expert',
    icon: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png',
    isMicrosoft: true
  },
  {
    name: 'Word Expert',
    icon: 'https://img.icons8.com/color/48/000000/microsoft-word-2019--v1.png',
    isMicrosoft: true
  },
  {
    name: 'PowerPoint',
    icon: 'https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019--v1.png',
    isMicrosoft: true
  },

  // Networking Basics
  {
    name: 'Networking Basics',
    icon: 'https://img.icons8.com/color/48/000000/network.png',
    isNetworking: true
  }
];

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-section {
          padding: 5rem 0;
          background: #0a0a0a;
        }
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .section-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          color: #ffffff;
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
          font-size: 1.05rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .skill-item {
          background: #111111;
          padding: 1.5rem 1rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .skill-item:hover::before {
          opacity: 1;
        }
        .skill-item:hover {
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
        }
        .skill-icon-wrapper {
          width: 56px;
          height: 56px;
          margin: 0 auto 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }
        .skill-item:hover .skill-icon-wrapper {
          transform: scale(1.15) rotate(-3deg);
          background: rgba(99, 102, 241, 0.1);
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.1);
        }
        .skill-icon-wrapper img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .skill-item:hover .skill-icon-wrapper img {
          transform: scale(1.1);
        }
        .skill-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: #ffffff;
          transition: color 0.3s ease;
          display: block;
          position: relative;
          z-index: 1;
        }
        .skill-item:hover .skill-name {
          color: #8b5cf6;
        }
        .skill-tag {
          display: inline-block;
          font-size: 0.6rem;
          padding: 0.15rem 0.6rem;
          margin-top: 0.4rem;
          border-radius: 1rem;
          background: rgba(99, 102, 241, 0.12);
          color: #8b5cf6;
          border: 1px solid rgba(99, 102, 241, 0.1);
          font-weight: 400;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .skill-item:hover .skill-tag {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: scale(1.05);
        }
        /* Bounce animation on hover */
        .skill-item:hover .skill-icon-wrapper {
          animation: bounceIcon 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes bounceIcon {
          0% { transform: scale(1); }
          30% { transform: scale(1.2) rotate(-3deg); }
          50% { transform: scale(0.95) rotate(2deg); }
          70% { transform: scale(1.1) rotate(-1deg); }
          100% { transform: scale(1.15) rotate(0deg); }
        }
        @media (min-width: 640px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(6, 1fr); }
          .skill-item { padding: 1.5rem; }
          .skill-icon-wrapper {
            width: 64px;
            height: 64px;
          }
          .skill-icon-wrapper img {
            width: 36px;
            height: 36px;
          }
        }
        @media (max-width: 768px) {
          .skills-section { padding: 3rem 0; }
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-container">
          <h2 className="section-title">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A curated list of technologies and skills I use to bring ideas to life.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="skill-icon-wrapper">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const fallback = document.createElement('span');
                      fallback.style.fontSize = '2rem';
                      fallback.textContent = skill.isMicrosoft ? '📊' : skill.isNetworking ? '🌐' : '💻';
                      parent.appendChild(fallback);
                    }}
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
                {(skill.isMicrosoft || skill.isNetworking) && (
                  <div className="skill-tag">
                    {skill.isMicrosoft ? 'Microsoft 365' : 'IT Fundamentals'}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;