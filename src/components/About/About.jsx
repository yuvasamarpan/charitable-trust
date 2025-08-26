import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';


export default function About() {
    const navigate = useNavigate();

    return (
        <section className="about-section">
            <div className="about-content">
                <h1> Yuva Samarpan</h1>
                <p>
                    Yuva Samarpan is committed to empowering youth and fostering a culture of compassion, service,
                    and innovation. We aim to uplift communities through meaningful programs and social impact initiatives.
                </p>
                <button onClick={() => navigate('/about')}>Read More</button>
            </div>
        </section>
    );
}