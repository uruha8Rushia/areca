import React from 'react';
import './Navbar.css'; // Ensure this file exists for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="logo-container">
                    <a href="#home" className="logo">
                        <img 
                            src="/title.jpg" // Update the path to your logo image
                            alt="Areca Logo"
                            className="logo-image"
                        />
                    </a>
                </div>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    <li>
                        <a href="#about" className="navbar-link">
                            About Penang
                        </a>
                    </li>
                    <li>
                        <a href="#tourist-spot" className="navbar-link">
                            Tourist Spot
                        </a>
                    </li>
                    <li>
                        <a href="#food" className="navbar-link">
                            Food
                        </a>
                    </li>
                    <li>
                        <a href="#history" className="navbar-link">
                            Culture & History
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
