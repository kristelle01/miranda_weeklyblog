import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-layout">
          <div className="about-image">
            <img 
              src={`${process.env.PUBLIC_URL}/images/about.JPG`} 
              alt="About Weekly Journey" 
              onError={(e) => e.target.style.display='none'}
            />
          </div>
          <div className="about-content">
            <h2 className="section-title">About This Journey</h2>
            <p>This blog documents my 14-week internship journey filled with learning, growth, and new experiences in both the Administrative Office and Dean’s Office. Each week reflects the tasks, challenges, and lessons that helped me develop my skills and understanding of a professional work environment.</p>
            <p>The purpose of this blog is to record my weekly experiences, responsibilities, and accomplishments throughout my internship. It also serves as a reflection of how I improved my communication, creativity, organizational, and technical skills through clerical work, designing layouts, and creating office materials.</p>
            <p>Through the different challenges, adjustments, and achievements I experienced, these weekly entries show my personal and professional growth as an intern while preparing me for future career opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
