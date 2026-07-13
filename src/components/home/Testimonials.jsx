import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Product Manager at TechFlow',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    review: 'Zohaib transformed our complex requirements into a beautiful, intuitive interface. His attention to detail and performance optimization skills are unmatched.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO at DigitalVibe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    review: 'The React application Zohaib built for us increased our user engagement by 40%. His expertise in frontend development is truly exceptional.'
  },
  {
    name: 'Michael Roberts',
    role: 'CTO at Innovate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    review: 'Working with Zohaib was a seamless experience. He delivered a pixel-perfect React application ahead of schedule. Highly recommended.'
  },
  {
    name: 'Emily Davis',
    role: 'Lead Designer at CreativeHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    review: 'Zohaib\'s ability to bring designs to life with clean, efficient code is remarkable. He understands both design and development perfectly.'
  },
  {
    name: 'James Wilson',
    role: 'Founder at StartUpLab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    review: 'As a startup founder, I needed a developer who could move fast without compromising quality. Zohaib delivered beyond expectations.'
  },
  {
    name: 'Lisa Martinez',
    role: 'Marketing Director at BrandBoost',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop',
    review: 'The website Zohaib developed has significantly improved our conversion rates. His work is professional, modern, and results-driven.'
  },
  {
    name: 'David Chen',
    role: 'Senior Developer at CodeWorks',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
    review: 'Zohaib\'s code quality and problem-solving skills are top-tier. He\'s a pleasure to work with and always brings fresh ideas to the table.'
  },
  {
    name: 'Rachel Adams',
    role: 'Product Owner at FinTech Solutions',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&auto=format&fit=crop',
    review: 'Zohaib\'s expertise in React and modern web technologies helped us build a scalable, high-performance financial dashboard.'
  },
  {
    name: 'Thomas Anderson',
    role: 'Operations Manager at GlobalTech',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
    review: 'We\'ve hired Zohaib for multiple projects and he consistently delivers excellence. His communication and technical skills are outstanding.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  // Navigation dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 5rem 0;
          background: #0a0a0a;
          overflow: hidden;
        }
        .testimonials-container {
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
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        
        /* Carousel Container */
        .carousel-wrapper {
          position: relative;
          overflow: hidden;
          max-width: 1000px;
          margin: 0 auto;
        }
        .carousel-track {
          display: flex;
          gap: 2rem;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(0);
        }
        .testimonial-card {
          flex: 0 0 calc(33.333% - 1.33rem);
          min-width: 0;
          background: #111111;
          padding: 1.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-stars {
          display: flex;
          gap: 0.15rem;
          color: #f59e0b;
          margin-bottom: 0.75rem;
        }
        .testimonial-text {
          font-size: 0.9rem;
          color: #a0a0a0;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(99, 102, 241, 0.3);
        }
        .testimonial-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: #ffffff;
        }
        .testimonial-role {
          font-size: 0.75rem;
          color: #a0a0a0;
        }
        .testimonial-quote {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          color: rgba(255, 255, 255, 0.04);
        }
        
        /* Navigation Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-dot.active {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          width: 30px;
          border-radius: 9999px;
        }
        .carousel-dot:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .carousel-dot.active:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }
        
        /* Pause indicator */
        .pause-indicator {
          text-align: center;
          margin-top: 1rem;
          color: #666666;
          font-size: 0.8rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .pause-indicator:hover {
          color: #8b5cf6;
        }
        
        @media (max-width: 992px) {
          .testimonial-card {
            flex: 0 0 calc(50% - 1rem);
          }
        }
        @media (max-width: 768px) {
          .testimonials-section { padding: 3rem 0; }
          .testimonial-card {
            flex: 0 0 100%;
          }
          .carousel-track {
            gap: 1.5rem;
          }
          .testimonial-text {
            -webkit-line-clamp: 3;
          }
          .section-subtitle {
            margin-bottom: 2rem;
          }
        }
        @media (max-width: 480px) {
          .testimonials-section { padding: 2rem 0; }
          .testimonial-card {
            padding: 1.2rem;
          }
          .testimonial-avatar {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>

      <section
        className="testimonials-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="testimonials-container">
          <h2 className="section-title">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What my clients and colleagues say about working with me.
          </p>

          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(0)`,
              }}
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.index}-${idx}`}
                  className="testimonial-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="testimonial-quote" size={32} />

                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="testimonial-text">
                    "{testimonial.review}"
                  </p>

                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div
            className="pause-indicator"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? '▶ Resume auto-rotation' : '⏸ Pause auto-rotation'}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;