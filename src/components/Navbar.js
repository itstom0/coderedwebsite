import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">CODE <span className="red">RED</span></div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">2024-2025 Team</Link></li>
                <li><Link to="/support">Support Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
