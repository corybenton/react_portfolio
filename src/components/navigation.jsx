//import { useState } from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <h1>Cory Benton</h1>
            <nav>
                <ul className="nav nav-nodes row">
                    <li className="nav-item col-4">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item col-4">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item col-4">
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;