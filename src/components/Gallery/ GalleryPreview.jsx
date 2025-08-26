import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './GalleryCss.css';

const images = [
    require('../../assets/1.jpg'),
    require('../../assets/5.jpg'),
    require('../../assets/15.jpg'),
    require('../../assets/20.jpg'),
    require('../../assets/24.jpg'),
    require('../../assets/gallery1.jpg'),
];

export default function GalleryPreview() {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="gallery-preview">
            <h2 className="section-title">Gallery</h2>

            <div className="glass-carousel">
                <Slider {...settings} className="slider">
                    {images.map((img, i) => (
                        <div key={i} className="slide">
                            <img src={img} alt={`Gallery ${i + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="view-more-container">
                <button onClick={() => navigate('/gallery')} className="view-more-btn">
                    View More <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </button>
            </div>
        </section>
    );
}