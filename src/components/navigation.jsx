//import { useState } from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className="nav nav-nodes">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;