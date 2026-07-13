import { Github, Linkedin, Instagram, Phone, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem 0 1.5rem;
          background: #111111;
          margin-top: auto;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
        }
        .footer-brand .logo-icon {
          color: #6366f1;
        }
        .text-gradient {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-socials {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          color: #a0a0a0;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.06);
          text-decoration: none;
        }
        .social-link:hover {
          color: #fff;
          background: #6366f1;
          border-color: #6366f1;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }
        .footer-bottom {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
          color: #666666;
          font-size: 0.8rem;
        }
        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        @media (max-width: 768px) {
          .footer { padding: 2rem 0 1rem; }
          .footer-container { padding: 0 1rem; }
          .footer-content {
            flex-direction: column;
            gap: 1.2rem;
          }
          .footer-socials {
            gap: 0.6rem;
          }
          .social-link {
            width: 38px;
            height: 38px;
          }
        }
        @media (max-width: 480px) {
          .footer-socials {
            gap: 0.5rem;
          }
          .social-link {
            width: 36px;
            height: 36px;
          }
          .social-link svg {
            width: 16px;
            height: 16px;
          }
          .footer-brand {
            font-size: 1rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <Code2 className="logo-icon" size={24} />
              <span>Zohaib<span className="text-gradient">.dev</span></span>
            </div>

            <div className="footer-socials">
              <a
                href="https://github.com/Zohaib-Younis"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/zohaib-younis/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/zohaib.mayo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/923245454800"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:mr.zohaibyounus@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Zohaib Younis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;