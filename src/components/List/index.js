import React from 'react';
import './style.css';

export const ListItem = ({ jobDescription }) => {
	return <li class='list-group-item'>{jobDescription}</li>;
};
