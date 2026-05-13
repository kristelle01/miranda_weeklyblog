// Blog Content Data
const blogPosts = {
    week1: {
        title: "Setting the Foundation",
        date: "Week 1 — The Beginning",
        images: ["images/pw1.PNG",
                "images/pww1.jpg",
        ],
        content: `
            <p>During the first week of my internship, I attended the orientation and became familiar with the organization’s environment. Ma’am Mitchelle, the Administrative Officer, introduced the rules, policies, and expectations for interns. I was also introduced to the staff members who would be supervising me. </p>
            <p>My tasks were primarily clerical, including organizing documents, arranging files, and encoding data in Google Sheets. I also observed the daily operations of the office to better understand its workflow and procedures. One of our first assigned tasks, together with my co-intern, was to fix and redesign the attendance desk, as well as create a new nameplate for the Office of the Day.
            <p> This week helped me adjust to the workplace environment. I would also like to note that the office atmosphere was very light and welcoming, which made it easier for me to feel comfortable in my new role.</p>
        `
    },
    week2: {
        title: "Taking Initiative",
        date: "Week 2 — Making the Most of Limited Time",
        images: ["images/week2.jpg"],
        content: `
            <p>During the second week of my internship, I was only present for three days because I was absent for two days and one day was a holiday. While waiting for tasks to be assigned to me, I helped my co-intern organize the tasks given to her by the staff. This helped me stay productive and use my time well.</p>
            <p>I also continued to observe the daily activities in the office and became more familiar with how things work. During this week, we also celebrated Valentine’s Day in the office, which created a fun and enjoyable atmosphere. Helping my co-intern improved my teamwork and communication skills because we worked together to finish the tasks.</p>
            <p>Overall, the second week helped me become more active and responsible, as I learned to take initiative even when no tasks were given to me.</p>
            
        `
    },
    week3: {
        title: "Building Accuracy Through Practice",
        date: "Week 3 — RESPONSIBILITY",
        images: ["images/week3.jpg"],
        content: `
            <p>During the third week of my internship, my tasks mainly involved clerical work and assisting Ma’am Rubs, who guided me throughout these tasks. She first asked me to encode data because the soft copy had been lost, so I helped recreate the records by entering the information again.</p>
            <p>The focus this week was on consistency. I treated my daily routines as non-negotiable appointments with myself. Even on days when motivation was low, I showed up and put in the work.This task required careful attention to detail to make sure the data was accurate and complete. In addition, I continued to assist with other clerical duties such as organizing documents and checking files when needed.</p>
            <p>Overall, this week helped improve my data encoding skills, attention to detail, and patience, as I learned the importance of keeping records properly organized and backed up.</p>
        `
    },
    week4: {
        title: "Improving Accuracy and Efficiency",
        date: "Week 4 — ORGANIZATION",
        images: ["images/week4.jpg"],
        content: `
            <p>This week, I continued assisting Ma’am Rubs with clerical tasks. My main responsibilities included organizing both physical and digital files, as well as encoding data into spreadsheets. I used tools such as Microsoft Excel and also google sheet to input, manage, and update records efficiently.</p>
            <p>Through these activities, I learned the importance of accurate documentation and proper file management in maintaining an organized office system. I also improved my typing speed and overall data entry skills.</p>
            <p>One challenge I encountered was ensuring the accuracy of the information I encoded. To address this, I learned to double-check my work carefully to avoid errors and ensure the reliability of the data.</p>
        `
    },
    week5: {
        title: "Building Efficiency Through Proper Documentation",
        date: "Week 5 — RECORD KEEPING",
        images: ["images/week5.jpg"],
        content: `
            <p>During the fifth week, I assisted the staff in organizing and maintaining office documents. I helped arrange files, prepare documents for printing, and ensure that records were properly stored and labeled for easy retrieval.</p>
            <p>This experience helped me understand the importance of organized documentation in supporting smooth office operations. It also improved my attention to detail and strengthened my ability to manage tasks efficiently in a workplace setting.</p>
            
            
        `
    },
    week6: {
        title: "Keeping Information Accurate and Organized",
        date: "Week 6 — RECORD MAINTENANCE",
        images: ["images/week6.jpg"],
        content: `
            <p>This week, I reviewed existing documents and helped update records to ensure that all information was accurate and properly maintained. I also organized both digital and physical files by sorting documents, renaming files, and placing them in their appropriate folders.</p>
            <p>Through these tasks, I learned the importance of maintaining updated and well-organized records in an office environment. This experience also improved my file management skills and taught me how proper organization contributes to efficiency and smoother workflow in the workplace.</p>
            
        `
    },
    week7: {
        title: "Building Relationships",
        date: "Week 7 — Connections",
        images: ["images/week7.jpg"],
        content: `
            <p>This week shifted focus from individual effort to community connection. I realized that sustainable growth doesn't happen in isolation—it requires a network of support, collaboration, and shared learning.</p>
            <p>I actively engaged with communities related to my goals. Participating in discussions, sharing my journey, and learning from others' experiences added a rich new dimension to the process.</p>
            <h4>Community Benefits:</h4>
            <ul>
                <li>Access to diverse perspectives and solutions</li>
                <li>Accountability through public commitment</li>
                <li>Emotional support during difficult phases</li>
                <li>Accelerated learning through shared knowledge</li>
            </ul>
            <p>I found that helping others with their challenges reinforced my own understanding. The act of explaining concepts to newcomers solidified my knowledge and revealed gaps I hadn't noticed.</p>
            <p>The connections made this week extended beyond the immediate journey. Many of these relationships became professional networks and genuine friendships that continued long after the 16 weeks concluded.</p>
            <p>The insight: Community isn't just nice to have—it's an essential component of sustainable growth.</p>
        `
    },
    week8: {
        title: "Halfway Point Analysis",
        date: "Week 8 — Assessment",
        images: ["images/week8.jpg"],
        content: `
            <p>Two months completed—halfway through the journey. This milestone warranted a thorough assessment of progress, goals, and direction.</p>
            <p>The halfway review was comprehensive. I compared initial objectives against current status, analyzed the gap between expectations and reality, and made necessary adjustments to the plan for the remaining weeks.</p>
            <h4>Halfway Findings:</h4>
            <ul>
                <li>70% of original goals already achieved</li>
                <li>Some goals were too conservative—time to aim higher</li>
                <li>Other goals needed recalibration based on reality</li>
                <li>New opportunities had emerged that weren't anticipated</li>
            </ul>
            <p>I adjusted the roadmap for weeks 9-16, incorporating lessons learned and new opportunities. The revised plan was more ambitious but also more realistic than the original.</p>
            <p>This midpoint assessment was crucial for maintaining momentum. It prevented me from coasting on autopilot and ensured the second half would be as productive as the first.</p>
            <p>The practice of regular, honest self-assessment became a lifelong habit after this experience.</p>
        `
    },
    week9: {
        title: "Going Deeper",
        date: "Week 9 — Deep Dive",
        images: ["images/week9.jpg"],
        content: `
            <p>Month three began with a focus on depth over breadth. Having covered significant ground in the first two months, it was time to explore complex topics that required sustained focus and concentration.</p>
            <p>This week was characterized by deep work sessions—extended periods of uninterrupted focus on challenging material. I minimized distractions and created an environment conducive to intense concentration.</p>
            <h4>Deep Work Practices:</h4>
            <ul>
                <li>Scheduled 3-hour blocks for complex problem-solving</li>
                <li>Eliminated all digital distractions during focus periods</li>
                <li>Used the Pomodoro technique for sustained attention</li>
                <li>Documented insights immediately to capture learning</li>
            </ul>
            <p>The depth of understanding achieved this week was qualitatively different from earlier phases. I wasn't just learning procedures—I was understanding principles. This foundational knowledge proved more valuable than any specific technique.</p>
            <p>Deep work is exhausting but incredibly rewarding. The satisfaction of truly understanding a complex concept surpasses the quick dopamine hits of surface-level achievement.</p>
            <p>The realization: Depth creates expertise; breadth creates familiarity. Both have value, but depth is what distinguishes experts from amateurs.</p>
        `
    },
    week10: {
        title: "Putting Knowledge to Work",
        date: "Week 10 — Application",
        images: ["images/week10.jpg"],
        content: `
            <p>Theory meets practice this week. After weeks of learning and preparation, it was time to apply knowledge to real-world scenarios and see how it held up under practical conditions.</p>
            <p>I took on projects that required applying learned concepts in novel situations. This application phase revealed gaps in my understanding that studying alone hadn't exposed.</p>
            <h4>Application Insights:</h4>
            <ul>
                <li>Practical application reveals gaps in theoretical knowledge</li>
                <li>Real-world constraints force creative problem-solving</li>
                <li>Applied knowledge becomes permanent knowledge</li>
                <li>Feedback from real use cases is invaluable</li>
            </ul>
            <p>Some of my assumptions proved incorrect when tested in practice. These failures were valuable—they showed me exactly where I needed to focus my continued learning.</p>
            <p>The projects completed this week also produced tangible outputs—evidence of progress that I could point to and be proud of. These artifacts became portfolio pieces and confidence builders.</p>
            <p>The truth: Knowledge unused is knowledge forgotten. Application is the crucible that forges true understanding.</p>
        `
    },
    week11: {
        title: "Creative Problem Solving",
        date: "Week 11 — Innovation",
        images: ["images/week11.jpg"],
        content: `
            <p>This week was about breaking free from conventional approaches. With solid fundamentals in place, I explored creative and unconventional solutions to persistent challenges.</p>
            <p>Innovation requires a mindset shift—from "how has this been done before?" to "what's possible?" This week I deliberately pushed beyond established patterns to discover new approaches.</p>
            <h4>Innovation Practices:</h4>
            <ul>
                <li>Questioned fundamental assumptions about methods</li>
                <li>Combined techniques from different disciplines</li>
                <li>Embraced failure as part of the experimentation process</li>
                <li>Sought inspiration from unrelated fields</li>
            </ul>
            <p>Not every experiment succeeded, but each provided valuable information. The failed attempts often taught me more than the successes—they revealed boundaries and constraints I hadn't previously understood.</p>
            <p>The successful innovations were particularly satisfying because they were genuinely novel. Creating something new, even if small, carries a unique sense of accomplishment.</p>
            <p>The principle: Innovation comes from the intersection of deep knowledge and creative courage.</p>
        `
    },
    week12: {
        title: "Month Three Review",
        date: "Week 12 — Consolidation",
        images: ["images/week12.jpg"],
        content: `
            <p>Three months of dedicated effort reached completion. This milestone called for celebration, reflection, and preparation for the final month ahead.</p>
            <p>The review this month focused on consolidation—ensuring that the gains of the past 12 weeks were solidified and wouldn't fade. I revisited earlier material, reinforcing foundations while appreciating how far I'd come.</p>
            <h4>Month Three Achievements:</h4>
            <ul>
                <li>Mastered advanced concepts that initially seemed impossible</li>
                <li>Completed significant practical projects</li>
                <li>Developed a personal style and approach</li>
                <li>Built a reputation within the community</li>
            </ul>
            <p>The transformation from week one to week twelve was dramatic. Comparing current capabilities to initial abilities showed remarkable growth that daily progress had obscured.</p>
            <p>I also prepared mentally for the final month. With the end in sight, it was important to maintain focus and finish strong rather than coasting to completion.</p>
            <p>The consolidation phase taught me that achievement without integration is temporary. True mastery requires revisiting and reinforcing what you've learned.</p>
        `
    },
    week13: {
        title: "Final Push Begins",
        date: "Week 13 — Sprint",
        images: ["images/week13.jpg"],
        content: `
            <p>The final month began with renewed intensity. With the finish line visible, I channeled all accumulated knowledge, skills, and experience into achieving the remaining objectives.</p>
            <p>This week was a sprint—intense, focused effort toward specific targets. The accumulated habits and systems made this high-intensity period sustainable in a way it wouldn't have been at the journey's start.</p>
            <h4>Sprint Strategies:</h4>
            <ul>
                <li>Prioritized remaining objectives by importance</li>
                <li>Created daily milestones to maintain momentum</li>
                <li>Eliminated non-essential activities</li>
                <li>Leveraged established routines to maximize output</li>
            </ul>
            <p>The energy of this final phase was different from the beginning. Early energy was driven by novelty and enthusiasm; this energy came from competence and confidence.</p>
            <p>I also began thinking about what comes next. A 16-week journey doesn't exist in isolation—it's a stepping stone to larger goals. Planning the next phase became part of this week's activities.</p>
            <p>The lesson: Knowing you can finish strong is as important as knowing you can start.</p>
        `
    },
    week14: {
        title: "Polishing the Results",
        date: "Week 14 — Refinement",
        images: ["images/week14.jpg"],
        content: `
            <p>With major objectives achieved, this week focused on refinement. The difference between good work and excellent work often lies in the details, and this week was about attending to those details.</p>
            <p>I reviewed everything created over the past three months, identifying areas for improvement and polishing rough edges. This quality focus elevated the overall standard of the work.</p>
            <h4>Refinement Focus Areas:</h4>
            <ul>
                <li>Reviewed and improved earlier work with new knowledge</li>
                <li>Addressed edge cases and potential issues</li>
                <li>Improved documentation and presentation</li>
                <li>Added finishing touches that distinguish professional work</li>
            </ul>
            <p>The refinement process was meticulous and time-consuming, but the results justified the effort. The cumulative effect of many small improvements was substantial.</p>
            <p>I also prepared final deliverables and documentation. The work needed to be presentable and useful beyond the immediate journey.</p>
            <p>The insight: The final 10% of effort often creates 50% of the perceived value. Refinement is what separates amateurs from professionals.</p>
        `
    },
    week15: {
        title: "Acknowledging Progress",
        date: "Week 15 — Celebration",
        images: ["images/week15.jpg"],
        content: `
            <p>With one week remaining, it was time to pause and celebrate the journey. Too often we rush from one goal to the next without acknowledging how far we've come.</p>
            <p>This week was about gratitude—appreciating the effort invested, the obstacles overcome, and the growth achieved. It was also about acknowledging the support of those who helped along the way.</p>
            <h4>Celebration Activities:</h4>
            <ul>
                <li>Reviewed the entire journey from week one to now</li>
                <li>Expressed gratitude to mentors and supporters</li>
                <li>Shared wins with the community that supported me</li>
                <li>Took time to simply enjoy the accomplishment</li>
            </ul>
            <p>Looking back at early entries in this blog was particularly rewarding. The contrast between then and now illustrated the power of consistent effort over time.</p>
            <p>I also documented lessons learned—not just technical knowledge, but insights about myself, my work patterns, and my capacity for growth. These meta-lessons would inform future endeavors.</p>
            <p>The realization: Celebration isn't just a reward—it's a necessary part of the learning cycle that encodes success and builds motivation for future challenges.</p>
        `
    },
    week16: {
        title: "Journey Complete",
        date: "Week 16 — The Finale",
        images: ["images/week16.jpg"],
        content: `
            <p>Sixteen weeks. Four months. One transformative journey complete. As I write this final entry, I'm struck by how simultaneously long and short this experience has been.</p>
            <p>The person who started this journey in week one is different from the one completing it now. Not just in skills and knowledge, but in perspective, confidence, and self-understanding.</p>
            <h4>Final Statistics:</h4>
            <ul>
                <li>112 days of consistent effort</li>
                <li>95% of original goals achieved (with many exceeded)</li>
                <li>Countless new skills and concepts mastered</li>
                <li>A community of peers and mentors established</li>
                <li>A portfolio of work demonstrating competence</li>
            </ul>
            <h4>Key Takeaways:</h4>
            <ul>
                <li>Consistency beats intensity; small daily progress compounds</li>
                <li>Community and accountability multiply individual effort</li>
                <li>Obstacles are growth opportunities in disguise</li>
                <li>Reflection and celebration are essential parts of the process</li>
                <li>The journey itself is as valuable as the destination</li>
            </ul>
            <p>This blog will serve as a permanent record of what dedicated effort can achieve in a relatively short time. More importantly, it stands as proof that I can commit to goals and see them through.</p>
            <p>The end of this journey is the beginning of the next. The habits, systems, and mindset developed over these 16 weeks will support all future endeavors.</p>
            <p>Thank you for following along. Whether you're reading this in real-time or discovered it later, I hope this journey inspires you to start your own. The best time to begin is now.</p>
            <p><em>On to the next chapter.</em></p>
        `
    }
};

// DOM Elements
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// Modal Functions
function openModal(postId) {
    const post = blogPosts[postId];
    if (!post) return;

    const images = post.images || [];
    const imagesHtml = images.map((src, idx) => `
        <div class="modal-gallery-item">
            <img src="${src}" alt="${post.title} - Image ${idx + 1}" onerror="this.style.opacity='0'">
        </div>
    `).join('');

    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="modal-badge">${post.date}</span>
            <h3 class="modal-title">${post.title}</h3>
        </div>
        <div class="modal-layout">
            <div class="modal-body">
                ${post.content}
            </div>
            <div class="modal-gallery">
                ${imagesHtml || '<div class="modal-gallery-item" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%);"></div>'}
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Make modal images clickable for gallery view
    setTimeout(() => {
        const modalImages = modalContent.querySelectorAll('.modal-gallery-item img');
        modalImages.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                openGallery(images, index);
            });
        });
    }, 100);
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Simple Gallery Viewer
function openGallery(images, index = 0) {
    // Create a simple overlay for viewing
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = images[index];
    img.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        cursor: pointer;
    `;
    
    const counter = document.createElement('div');
    counter.textContent = `${index + 1} / ${images.length}`;
    counter.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 18px;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px 20px;
        border-radius: 20px;
    `;
    
    const nav = document.createElement('div');
    nav.style.cssText = `
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        pointer-events: none;
    `;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;';
    prevBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 24px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: all;
    `;
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;';
    nextBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 24px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: all;
    `;
    
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    overlay.appendChild(img);
    overlay.appendChild(counter);
    overlay.appendChild(nav);
    document.body.appendChild(overlay);
    
    let currentIndex = index;
    
    function updateImage(newIndex) {
        currentIndex = newIndex;
        img.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
    
    prevBtn.onclick = (e) => {
        e.stopPropagation();
        updateImage((currentIndex - 1 + images.length) % images.length);
    };
    
    nextBtn.onclick = (e) => {
        e.stopPropagation();
        updateImage((currentIndex + 1) % images.length);
    };
    
    overlay.onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Keyboard navigation
    const handleKey = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', handleKey);
        } else if (e.key === 'ArrowLeft') {
            updateImage((currentIndex - 1 + images.length) % images.length);
        } else if (e.key === 'ArrowRight') {
            updateImage((currentIndex + 1) % images.length);
        }
    };
    
    document.addEventListener('keydown', handleKey);
}

// Event Listeners for Blog Cards
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        if (modalId) {
            openModal(modalId);
        }
    });
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Keyboard Navigation for Modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Mobile Navigation
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Scroll Animation for Blog Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize blog cards with animation
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
    observer.observe(card);
});

// Add loaded class to body when page loads
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
