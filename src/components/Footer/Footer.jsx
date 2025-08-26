import React from 'react';
import './Footer.css';
import logo from '../../assets/og_logo.png'; // adjust path based on folder


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Yuva Samarpan" />
                    <h3>Yuva Samarpan</h3>
                    <p>Serving humanity with compassion and commitment.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/program">Program</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Email: contact@yuvasamarpan.org</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: Mumbai, India</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Yuva Samarpan. All rights reserved.</p>
            </div>
        </footer>
    );
}