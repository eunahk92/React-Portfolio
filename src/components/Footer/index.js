import React from "react";

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light" id="footer">
        <span className="navbar-brand">
            <a className="ml-4 text-dark" href="https://github.com/eunahk92">
                <i className="fab fa-github"></i>
            </a>
            <a className="ml-4 text-dark" href="https://linkedin.com/eunahjkim">
                <i className="fab fa-linkedin"></i>
            </a>
            <a className="ml-4 text-dark" href="mailto:eunahkim92@gmail.com">
                <i className="fas fa-envelope"></i>
            </a>
        </span>
    </nav>
  );
}

export default Footer;