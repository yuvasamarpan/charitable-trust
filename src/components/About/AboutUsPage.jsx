import React from 'react';
import './AboutUsPage.css';
import logo from '../../assets/og_logo.png';

export default function AboutUsPage() {
    return (
        <div className="aboutus-container">
            <div className="aboutus-left">
                <img src={logo} alt="Yuva Samarpan Logo" className="aboutus-logo" />
                <h1>Yuva Samarpan</h1>
                <p>Serving humanity with compassion and commitment.</p>
            </div>

            <div className="aboutus-right">
                <div className="aboutus-content">
                    <h2>About Yuva Samarpan</h2>
                    <p>
                        At Yuva Samarpan, we believe in creating a world where everyone has the opportunity to thrive. Through our core initiatives, we provide quality education to underprivileged children, ensuring they have the tools to build a better future. Our healthcare programs offer free medical aid, check-ups, and life-saving treatments to those in need. We stand by the elderly, offering them shelter, care, and dignity in their golden years. Orphaned and abandoned children find a safe haven with us, receiving love, education, and a chance at a brighter tomorrow. We empower women through skill development and legal support, helping them become independent and confident members of society.                     </p>


                    <h2>Our Mission</h2>
                    <p>
                        At Yuva Samarpan, we believe in creating a world where everyone has the
                        opportunity to grow. Through our core initiatives, we provide quality
                        education to underprivileged children, ensure they have the tools to build a
                        better life. Our healthcare programs offer free medical aid, check-ups, and
                        life-saving treatments to those in need. We stand by the elderly, offering
                        them shelter, care, and dignity in their golden years.
                    </p>

                    <h2>Our Work</h2>
                    <p>
                        We empower women through skill development and support, helping them become
                        independent and confident members of society. Additionally, our sports and
                        youth development programs encourage discipline, teamwork, and leadership,
                        giving young minds the chance to excel beyond their circumstances.
                    </p>

                    <p>
                        Together, with your support, we can <strong>transform lives</strong> and
                        <strong> spread hope</strong> where it’s needed the most.
                    </p>
                </div>
            </div>
        </div>
    );
}