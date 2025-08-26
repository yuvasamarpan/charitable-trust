// import React from 'react';
// import './Hero.css';
// //import heroImg from '../../assets/hero-mockup.png'; // replace with your image

// export default function Hero() {
//     return (
//         <section className="hero">
//             <div className="hero-content">
//                 <h1>We Deliver your Product <br /> <span>So Fast</span></h1>
//                 <p>Quickly morph client-centric results through performance-based applications.</p>
//                 <button>Download Now</button>
//             </div>
//             <div className="hero-image">
//                 {/* <img src={heroImg} alt="App Mockup" /> */}
//             </div>
//         </section>
//     );
// }


import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/hero.jpg';
import img2 from '../../assets/plant.webp';
import img3 from '../../assets/elder.jpg';

const images = [img1, img2, img3];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 4000); // 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="image-slider" style={{ backgroundImage: `url(${images[current]})` }}>
                <div className="gradient-overlay"></div>
                <div className="hero-text">
                    <h1>Yuva Samarpan <br /></h1>
                    <h2>Buildign a better tomorrow, today.</h2>

                </div>
            </div>
        </section>
    );
}