import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 13, suffix: '+', label: 'Projects' },
  { value: 20, suffix: '+', label: 'Clients' },
  { value: 20, suffix: '+', label: 'Technologies' }
];

// Custom counter component
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;
      const startValue = 0;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * end);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <style>{`
        .stats-section {
          padding: 3rem 0;
          background: #0a0a0a;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .stat-item {
          text-align: center;
        }
        .stat-number {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
        }
        .stat-number .text-gradient {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #a0a0a0;
          margin-top: 0.25rem;
          font-weight: 500;
        }
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        }
      `}</style>

      <section className="stats-section" ref={ref}>
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="stat-number">
                  <Counter end={stat.value} duration={2500} />
                  <span className="text-gradient">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;