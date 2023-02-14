import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../../utils/navLinks.json';
import './style.css';

const NavListItem = ({children}) => {
	return <li className='nav-item'>{children}</li>;
};

const NavListGroup = ({children}) => {
	return <ul className='navbar-nav mx-auto mt-2 mt-lg-0'>{children}</ul>;
};

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<span></span>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo02'
				aria-controls='navbarTogglerDemo02'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div
				className='collapse navbar-collapse text-right'
				id='navbarTogglerDemo02'
			>
				<NavListGroup>
					{NavLinks.map((link) => (
						<NavListItem>
							<Link
								to={link.path}
								className={
									window.location.pathname === '/'
										? 'nav-link active'
										: 'nav-link'
								}
							>
								{link.text}
							</Link>
						</NavListItem>
					))}
				</NavListGroup>
			</div>
		</nav>
	);
};

export default NavBar;
