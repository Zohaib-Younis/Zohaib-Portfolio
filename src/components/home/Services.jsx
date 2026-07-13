import { motion } from 'framer-motion';
import { Monitor, Code, Rocket, Layout, Search, Server } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={24} />,
    title: 'Frontend Development',
    description: 'Building fast, interactive, and highly responsive user interfaces using React and modern JavaScript.'
  },
  {
    icon: <Layout size={24} />,
    title: 'UI/UX Implementation',
    description: 'Translating complex Figma designs into pixel-perfect, accessible HTML/CSS code.'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Performance Optimization',
    description: 'Improving Core Web Vitals, reducing load times, and optimizing React apps for speed.'
  },
  {
    icon: <Code size={24} />,
    title: 'React Applications',
    description: 'Developing scalable and maintainable applications using React and its ecosystem.'
  },
  {
    icon: <Search size={24} />,
    title: 'SEO Friendly SPA',
    description: 'Ensuring SPAs rank high on search engines through SSR (Next.js) and optimized meta tags.'
  },
  {
    icon: <Server size={24} />,
    title: 'API Integration',
    description: 'Seamlessly connecting frontend interfaces with RESTful APIs, GraphQL, and third-party services.'
  }
];

const Services = () => {
  return (
    <>
      <style>{`
        .services-section {
          padding: 5rem 0;
          background: #111111;
        }
        .services-container {
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
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .service-card {
          background: #0a0a0a;
          padding: 1.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .service-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .service-icon {
          width: 48px;
          height: 48px;
          border-radius: 1rem;
          background: rgba(99, 102, 241, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6366f1;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }
        .service-card:hover .service-icon {
          background: #6366f1;
          color: #fff;
          transform: scale(1.1);
        }
        .service-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .service-card p {
          font-size: 0.9rem;
          color: #a0a0a0;
          line-height: 1.6;
        }
        @media (min-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .services-section { padding: 3rem 0; }
          .services-grid { max-width: 400px; margin: 0 auto; }
        }
      `}</style>

      <section className="services-section">
        <div className="services-container">
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive frontend solutions tailored to your business needs.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;