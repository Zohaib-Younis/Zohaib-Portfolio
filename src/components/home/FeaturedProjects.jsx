import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features a premium UI, cart management, and seamless checkout.',
    image: 'https://placehold.co/600x400/1a1a2e/6366f1?text=E-Commerce+Platform',
    tags: ['React', 'Node.js', 'Tailwind', 'Stripe'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'A modern analytics dashboard for tracking expenses and investments. Built with React and Recharts for interactive data visualization.',
    image: 'https://placehold.co/600x400/1a1a2e/8b5cf6?text=Financial+Dashboard',
    tags: ['React', 'TypeScript', 'Recharts', 'Framer Motion'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'An AI-powered application that generates stunning images based on text prompts using OpenAI API.',
    image: 'https://placehold.co/600x400/1a1a2e/6366f1?text=AI+Image+Generator',
    tags: ['React', 'OpenAI API', 'Tailwind CSS'],
    demo: '#',
    github: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <>
      <style>{`
        .projects-section {
          padding: 5rem 0;
          background: #111111;
        }
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .projects-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }
        .projects-header h2 {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: #ffffff;
        }
        .projects-header .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .projects-header p {
          color: #a0a0a0;
        }
        .btn-view-all {
          display: inline-block;
          padding: 0.6rem 1.5rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-view-all:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .project-card {
          background: #0a0a0a;
          border-radius: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        .project-image {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(99, 102, 241, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-image-overlay {
          opacity: 1;
        }
        .project-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .project-tag {
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          border: 1px solid rgba(99, 102, 241, 0.15);
        }
        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
          transition: color 0.3s ease;
        }
        .project-card:hover .project-title {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .project-description {
          font-size: 0.9rem;
          color: #a0a0a0;
          line-height: 1.6;
          flex: 1;
          margin-bottom: 1rem;
        }
        .project-actions {
          display: flex;
          gap: 0.75rem;
        }
        .project-actions .btn-demo {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-weight: 500;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }
        .project-actions .btn-demo:hover {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }
        .project-actions .btn-icon {
          width: 40px;
          height: 40px;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a0a0a0;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .project-actions .btn-icon:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
        @media (min-width: 768px) {
          .projects-header {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .projects-section { padding: 3rem 0; }
        }
      `}</style>

      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <div>
              <h2>
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p>Some of my recent work that showcases my frontend expertise.</p>
            </div>
            <Link to="/projects" className="btn-view-all">
              View All Projects
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-actions">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;