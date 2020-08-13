import React from 'react';
import './style.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <span></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-right" id="navbarTogglerDemo02">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">ABOUT ME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">PORTFOLIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contactme">CONTACT ME</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;