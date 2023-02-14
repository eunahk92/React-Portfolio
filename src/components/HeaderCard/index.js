import React from 'react';
import './style.css';

const HeaderCard = ({
	positionTitle,
	companyName,
	employedDates,
	children
}) => {
	return (
		<div class='card text-left border-info mt-3'>
			<div class='card-header'><h5 class='p-2'>{companyName}</h5></div>
			<div class='card-body'>
				<h3 class='card-title'>{positionTitle}</h3>
				<p class='card-text'>
					{children}
				</p>
			</div>
			<div class='card-footer smallGrey'>{employedDates}</div>
		</div>
	);
};

export default HeaderCard;
