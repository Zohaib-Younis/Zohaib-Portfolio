import { motion } from 'framer-motion';
import ProjectsComponent from '../components/home/Projects';
import Services from '../components/home/Services';

const Projects = () => {
  return (
    <>
      <style>{`
        .projects-page {
          padding: 0.5rem 0 4rem;
          background: #0a0a0a;
          min-height: calc(100vh - 60px);
          display: flex;
          align-items: flex-start;
          margin-top: -1rem;
        }
        .projects-page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .projects-page {
            padding: 0.3rem 0 2.5rem;
            min-height: auto;
            margin-top: 0;
          }
          .projects-page-container { 
            padding: 0 1rem; 
          }
        }
        @media (max-width: 480px) {
          .projects-page {
            padding: 0.2rem 0 2rem;
          }
        }
      `}</style>

      <section className="projects-page" id="projects">
        <div className="projects-page-container">
          {/* Projects Component - Header removed */}
          <ProjectsComponent />
          <Services />
        </div>
      </section>
    </>
  );
};

export default Projects;