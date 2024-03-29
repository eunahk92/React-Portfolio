import React from 'react';
import Resume from '../../assets/Resume.pdf';

const Footer = () => {
	return (
        <nav className="navbar fixed-bottom navbar-light bg-light" id="footer">
            <span className="navbar-brand mx-left">
                <small>contact me at: kim.eunahj@gmail.com</small>
            </span>
            <span className="navbar-brand mx-right">
                <a 
                    className="ml-4 text-dark" 
                    href="https://github.com/eunahk92" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Github Repositories"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a 
                    className="ml-4 text-dark" 
                    href="https://www.linkedin.com/in/eunahjkim/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Linkedin"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a 
                    className="ml-4 text-dark" 
                    href="mailto:eunahkim92@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Email Me"
                >
                    <i className="fas fa-envelope fa-2x"></i>
                </a>
                <a 
                    className="ml-4 text-dark" 
                    title="Download Resume" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={Resume} download
                >
                    <i className="fas fa-file-download fa-2x"></i>
                </a>
            </span>
        </nav>
	);
};

export default Footer;
