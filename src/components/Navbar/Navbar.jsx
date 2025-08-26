import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/og_logo.png';

export default function Navbar() {
    return (
        <nav className="navbar transparent">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Yuva Samarpan Logo" className="logo" />
                </Link>
            </div>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>

                {/* <div className="dropdown">
                    <span className="dropdown-toggle">Program ▾</span>
                    <div className="dropdown-menu">
                        <a href="#">Child Welfare</a>
                        <a href="#">Education</a>
                        <a href="#">Environment</a>
                        <a href="#">Old Age Home</a>
                        <a href="#">Social Service</a>
                        <a href="#">Sports</a>
                    </div>
                </div> */}

                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact Us</a>
            </div>
        </nav>
    );
}