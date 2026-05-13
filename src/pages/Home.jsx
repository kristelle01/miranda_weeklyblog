import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="hero" style={{ 
          backgroundImage: `url('/images/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="hero-container">
          <div className="hero-image">
            <img 
              src={`${process.env.PUBLIC_URL}/images/hero1.jpg`} 
              alt="Weekly Journey - Personal Growth" 
              onError={(e) => e.target.style.display='none'}
            />
          </div>
          <div className="hero-content">
            <span className="hero-subtitle">4 MONTHS OF DOCUMENTED GROWTH</span>
            <h1 className="hero-title">Weekly Journey</h1>
            <p className="hero-description">A simple record of what was learned, challenged, and achieved each week.</p>
            <Link to="/blog" className="hero-btn">Explore Weekly Posts</Link>
          </div>
        </div>
        <div className="hero-pattern">
          <div className="hero-blob-1"></div>
          <div className="hero-blob-2"></div>
        </div>
        <div className="hero-curve">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#faf5ff"/>
          </svg>
        </div>
      </header>
    </>
  );
};

export default Home;
