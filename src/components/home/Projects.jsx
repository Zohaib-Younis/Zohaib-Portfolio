import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Code, ShoppingBag, Truck, BarChart } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'SP Manchester',
        subtitle: 'Digital Marketing & Software Agency',
        description: 'Full-service digital agency platform offering web development, mobile apps, SEO, AI solutions, and IT consultancy with project-based and hourly engagement models.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        liveUrl: 'https://spmanchester.com/',
        githubUrl: '#',
        features: [
            'Service showcase with engagement models',
            'Client testimonials and project portfolio',
            'Core technologies display',
            'Mission & Vision sections'
        ],
        icon: <Code size={20} />,
        category: 'Agency'
    },
    {
        id: 2,
        title: 'ESS Courier',
        subtitle: 'Expedite Shipping Solutions',
        description: 'Comprehensive logistics and courier platform offering land transport, air/sea freight, warehousing, and customs clearance with real-time shipment tracking.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
        tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST APIs'],
        liveUrl: 'https://esscourier.com/landing_index.php',
        githubUrl: '#',
        features: [
            'Real-time shipment tracking system',
            'Service catalog with detailed descriptions',
            'Document downloads (Invoice, ESS Slip, etc.)',
            'Client testimonials and contact sections'
        ],
        icon: <Truck size={20} />,
        category: 'Logistics'
    },
    {
        id: 3,
        title: 'ZeeTech Analytics',
        subtitle: 'Data Analytics & Dashboard',
        description: 'Modern analytics dashboard providing data visualization, reporting, and business intelligence solutions with interactive charts and real-time data updates.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        tags: ['React', 'Chart.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
        liveUrl: 'https://zeetech-analytics.vercel.app/',
        githubUrl: '#',
        features: [
            'Interactive data visualizations',
            'Real-time analytics dashboard',
            'Responsive design',
            'Performance optimization'
        ],
        icon: <BarChart size={20} />,
        category: 'Analytics'
    },
    {
        id: 4,
        title: 'Shami Shoes',
        subtitle: 'E-Commerce Footwear Store',
        description: 'Modern e-commerce platform for footwear with product catalog, shopping cart, secure checkout, and user-friendly interface for seamless online shopping.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
        tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: 'https://shamishoes.online/',
        githubUrl: '#',
        features: [
            'Product catalog with filtering',
            'Shopping cart functionality',
            'Secure payment integration',
            'Responsive design'
        ],
        icon: <ShoppingBag size={20} />,
        category: 'E-Commerce'
    }
];

const Projects = () => {
    // Function to generate random gradient as fallback
    const getRandomGradient = (id) => {
        const gradients = [
            'linear-gradient(135deg, #6366f1, #8b5cf6)',
            'linear-gradient(135deg, #ec4899, #8b5cf6)',
            'linear-gradient(135deg, #06b6d4, #3b82f6)',
            'linear-gradient(135deg, #f59e0b, #ef4444)',
            'linear-gradient(135deg, #10b981, #3b82f6)',
            'linear-gradient(135deg, #8b5cf6, #ec4899)',
        ];
        return gradients[id % gradients.length];
    };

    return (
        <>
            <style>{`
        .projects-section {
          padding: 4rem 0;
          background: #0a0a0a;
        }
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .section-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }
        .section-title .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-subtitle {
          color: #a0a0a0;
          font-size: 0.95rem;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .project-card {
          background: #111111;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 180px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05));
        }
        .project-image-wrapper .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .project-card:hover .overlay {
          opacity: 1;
        }
        .project-image-wrapper .overlay a {
          padding: 0.5rem 1.2rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: transform 0.3s ease;
        }
        .project-image-wrapper .overlay a:hover {
          transform: scale(1.05);
        }
        .project-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .project-card:hover .project-image-wrapper img {
          transform: scale(1.05);
        }
        .project-category {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 0.2rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.65rem;
          font-weight: 500;
          color: #8b5cf6;
          border: 1px solid rgba(99, 102, 241, 0.2);
          z-index: 5;
        }
        .project-content {
          padding: 1.2rem 1.2rem 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          margin-bottom: 0.7rem;
        }
        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.1rem;
        }
        .project-subtitle {
          font-size: 0.75rem;
          color: #8b5cf6;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .project-description {
          color: #a0a0a0;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-bottom: 0.8rem;
        }
        .project-features span {
          font-size: 0.6rem;
          padding: 0.15rem 0.6rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          color: #a0a0a0;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .project-tags span {
          font-size: 0.6rem;
          padding: 0.15rem 0.7rem;
          border-radius: 9999px;
          background: rgba(99, 102, 241, 0.1);
          color: #8b5cf6;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        .project-links {
          display: flex;
          gap: 0.8rem;
          margin-top: 0.8rem;
        }
        .project-links a {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #a0a0a0;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.3s ease;
        }
        .project-links a:hover {
          color: #8b5cf6;
        }
        .project-image-wrapper .fallback-text {
          display: none;
          font-size: 4rem;
          font-weight: bold;
          color: rgba(255,255,255,0.1);
          letter-spacing: 0.1em;
        }
        .project-image-wrapper .fallback-icon {
          display: none;
          color: rgba(255,255,255,0.15);
        }
        .project-image-wrapper .project-icon-large {
          display: none;
          font-size: 4rem;
          color: rgba(255,255,255,0.1);
        }
        .project-image-wrapper img:not([src]) + .fallback-text {
          display: block;
        }
        .project-image-wrapper .no-image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
        }
        
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .project-image-wrapper {
            height: 160px;
          }
          .projects-section {
            padding: 2.5rem 0;
          }
        }
        @media (max-width: 480px) {
          .projects-container { padding: 0 1rem; }
          .project-image-wrapper { height: 140px; }
          .section-title { font-size: 1.6rem; }
          .project-content { padding: 1rem; }
        }
      `}</style>

            <section className="projects-section" id="projects">
                <div className="projects-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="section-subtitle">
                            A showcase of my recent work, demonstrating expertise in web development,
                            e-commerce, analytics, and business solutions.
                        </p>
                    </motion.div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            const wrapper = e.target.parentElement;
                                            const gradient = getRandomGradient(project.id);
                                            wrapper.style.background = gradient;
                                            e.target.style.display = 'none';

                                            const fallback = document.createElement('div');
                                            fallback.style.cssText = `
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 3.5rem;
                        color: rgba(255,255,255,0.2);
                        font-weight: bold;
                      `;
                                            fallback.textContent = project.title.charAt(0);
                                            wrapper.appendChild(fallback);
                                        }}
                                    />
                                    <span className="project-category">{project.category}</span>
                                    <div className="overlay">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-icon">
                                        {project.icon}
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-features">
                                        {project.features.slice(0, 2).map((feature, i) => (
                                            <span key={i}>{feature}</span>
                                        ))}
                                    </div>

                                    <div className="project-tags">
                                        {project.tags.slice(0, 4).map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <Globe size={14} />
                                            Live
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github size={14} />
                                            Code
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

export default Projects;