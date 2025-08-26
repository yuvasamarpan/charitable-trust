import React, { useEffect } from 'react';
import './ContactPage.css';
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="contact-container">
            <h1><FaPhoneAlt style={{ marginRight: '8px' }} />Contact Us</h1>

            <div className="contact-details">
                <div className="contact-card">
                    <FaEnvelope className="icon" />
                    <span><strong>yuvasamarpancharitabletrust@gmail.com</strong></span>
                </div>
                <div className="contact-card">
                    <FaFacebookF className="icon" />
                    <span><strong>Yuva Samarpan Charitable Trust</strong></span>
                </div>
                <div className="contact-card">
                    <FaInstagram className="icon" />
                    <span><strong>@yuvasamarpan_charitable_trust</strong></span>
                </div>
                <div className="contact-card">
                    <FaPhoneAlt className="icon" />
                    <span><strong>8097051122</strong></span>
                </div>
            </div>

            <div className="social-embed-section">
                <div className="social-block">
                    <h2>Instagram</h2>
                    <div className="embed-box">
                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink="https://www.instagram.com/reel/DJ1-2k4T7B1/"
                            data-instgrm-version="14"
                            style={{
                                background: '#FFF',
                                border: 0,
                                margin: '1rem auto',
                                maxWidth: '540px',
                                width: '100%',
                            }}
                        ></blockquote>
                    </div>
                </div>

                <div className="social-block">
                    <h2>Facebook</h2>
                    <div className="embed-box">
                        <iframe
                            title="Facebook Post"
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122131012166766753%26set%3Da.122103912926766753%26type%3D3&show_text=true&width=500"
                            width="100%"
                            height="520"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}