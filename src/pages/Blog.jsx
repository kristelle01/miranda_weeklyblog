import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const blogPostsData = Object.keys(blogPosts).map((weekKey, index) => {
    const week = index + 1;
    const post = blogPosts[weekKey];
    
    return {
      week,
      date: post.date,
      title: post.title,
      excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      image: post.images[0],
      images: post.images.slice(1),
      gradient: `linear-gradient(135deg, ${getGradientForWeek(week)})`,
      badge: null,
      featured: week === 16,
      fullContent: post.content
    };
  });

  function getGradientForWeek(week) {
    const gradients = {
      1: '#667eea 0%, #764ba2 100%',
      2: '#f093fb 0%, #f5576c 100%',
      3: '#4facfe 0%, #00f2fe 100%',
      4: '#43e97b 0%, #38f9d7 100%',
      5: '#fa709a 0%, #fee140 100%',
      6: '#a8edea 0%, #fed6e3 100%',
      7: '#d299c2 0%, #fef9d7 100%',
      8: '#89f7fe 0%, #66a6ff 100%',
      9: '#fddb92 0%, #d1fdff 100%',
      10: '#a1c4fd 0%, #c2e9fb 100%',
      11: '#ffecd2 0%, #fcb69f 100%',
      12: '#667eea 0%, #764ba2 100%',
      13: '#f093fb 0%, #f5576c 100%',
      14: '#4facfe 0%, #00f2fe 100%',
      15: '#43e97b 0%, #38f9d7 100%',
      16: '#fa709a 0%, #fee140 100%'
    };
    return gradients[week] || gradients[1];
  }

  const openModal = (week) => {
    setSelectedWeek(week);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWeek(null);
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <>
      <section className="blog-section">
        <div className="blog-header">
          <h2 className="section-title">Weekly Blog Posts</h2>
          <p className="section-subtitle">Reflection on a 14-Week Internship Experience</p>
        </div>
        <div className="blog-grid">
          {blogPostsData.map((post) => (
            <article 
              key={post.week} 
              className={`blog-card ${post.featured ? 'featured' : ''}`} 
              data-week={post.week}
              onClick={() => openModal(post)}
            >
              <div className="card-image">
                {post.badge && <div className="week-badge">{post.badge}</div>}
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${post.image}`} 
                  alt={`Week ${post.week} - ${post.title}`}
                  onError={(e) => {
                    e.target.style.display='none';
                    e.target.nextElementSibling.style.display='block';
                  }}
                />
                <div className="placeholder-img" style={{ background: post.gradient, display: 'none' }}></div>
              </div>
              <div className="card-content">
                <span className="card-date">{post.date}</span>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div className="lightbox-overlay active" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            &#10094;
          </button>
          <img 
            className="lightbox-img"
            src={`${process.env.PUBLIC_URL}/images/${lightboxImages[currentImageIndex]}`} 
            alt={`Image ${currentImageIndex + 1} of ${lightboxImages.length}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            &#10095;
          </button>
          <div className="lightbox-caption">
            Image {currentImageIndex + 1} of {lightboxImages.length}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedWeek && (
        <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{selectedWeek.title}</h2>
                <span className="modal-date">{selectedWeek.date}</span>
              </div>
              <div className="modal-layout">
                <div className="modal-body">
                  <div dangerouslySetInnerHTML={{ __html: selectedWeek.fullContent }} />
                </div>
                <div className="modal-gallery">
                  {selectedWeek.images && selectedWeek.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="modal-gallery-item"
                      onClick={() => openLightbox(selectedWeek.images, index)}
                    >
                      <img 
                        className="modal-img"
                        src={`${process.env.PUBLIC_URL}/images/${img}`} 
                        alt={`Week ${selectedWeek.week} - ${selectedWeek.title} - Image ${index + 1}`}
                        onError={(e) => {
                          e.target.style.display='none';
                          e.target.nextElementSibling.style.display='block';
                        }}
                      />
                      <div className="placeholder-img" style={{ background: selectedWeek.gradient, display: 'none', height: '300px' }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
