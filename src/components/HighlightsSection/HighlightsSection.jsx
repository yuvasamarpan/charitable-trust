import React from 'react';
import './HighlightsSection.css';

const highlights = [
    {
        title: 'Child Welfare',
        description: `"Every child deserves love, care, and a safe environment to grow." We provide shelter, nutrition, and emotional support to underprivileged and orphaned children, ensuring they receive the opportunities they deserve. Through mentorship and holistic development programs, we nurture young minds to build a brighter future.`,
        image: require('../../assets/child.webp'),
        overlayColor: 'rgba(255, 0, 0, 0.3)'
    },
    {
        title: 'Education',
        description: `"Education is the key to breaking the cycle of poverty."We empower children and youth by providing access to quality education, school supplies, and scholarships. Our learning programs focus on skill development, digital literacy, and career guidance, ensuring every child has a path to success`,
        image: require('../../assets/education.jpg'),
        overlayColor: 'rgba(0, 0, 255, 0.3)'
    },
    {
        title: 'Healthcare',
        description: `"Good health should never be a privilege, but a right." We provide free medical check-ups, essential treatments, and health awareness programs to underprivileged communities. Our initiatives support critical healthcare needs, ensuring access to proper medical facilities, medicines, and emergency aid`,
        image: require('../../assets/healthcate.jpg'),
        overlayColor: 'rgba(0, 255, 0, 0.3)'
    },
    {
        title: 'Old Age Homes',
        description: `"Dignity, care, and comfort for those who built our world." Our old age homes offer a secure and compassionate environment for senior citizens, providing healthcare, companionship, and recreational activities. We strive to ensure that every elderly individual receives the love and respect they deserve.`,
        image: require('../../assets/elder.jpg'),
        overlayColor: 'rgba(255, 255, 0, 0.3)'
    },
    {
        title: 'Social Service',
        description: `"Building stronger communities through compassion and action." We work on various social service initiatives, including food distribution, disaster relief, women empowerment, and community development programs. Our goal is to uplift underprivileged sections of society and bring lasting change.`,
        image: require('../../assets/social.jpg'),
        overlayColor: 'rgba(128, 0, 128, 0.3)'
    },
    {
        title: 'Sports',
        description: `"Empowering youth through the spirit of sports." We believe sports instill discipline, confidence, and teamwork. Our sports programs encourage underprivileged children and youth to develop their skills, build self-esteem, and open doors to new opportunities through training and mentorship.`,
        image: require('../../assets/sports.jpeg'),
        overlayColor: 'rgba(255, 165, 0, 0.3)'
    },
    {
        title: 'Environment',
        description: `"Protecting nature is protecting our future." Yuva Samarpan is committed to environmental sustainability through tree plantation drives, waste management awareness, and clean-up campaigns. We actively promote eco-friendly practices and inspire communities to take ownership of the planet’s well-being.`,
        image: require('../../assets/env.jpg'),
        overlayColor: 'rgba(0, 0, 0, 0.3)'
    },
];

export default function HighlightsSection() {
    return (
        <section className="highlight-section">
            {highlights.map((item, index) => (
                <div
                    key={index}
                    className={`highlight-block ${index % 2 === 1 ? 'reverse' : ''}`}
                    data-index={index + 1} // for CSS targeting
                >
                    <div className="highlight-overlay" />
                    <div className="highlight-text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="highlight-img">
                        <img src={item.image} alt={item.title} />
                    </div>
                </div>
            ))}
        </section>
    );
}