import React, { Component } from 'react';
import { Container, Row } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import HeaderCard from '../components/HeaderCard';
import Experiences from '../utils/experiences.json';
import { ListGroup } from '../components/ListGroup';
import { ListItem } from '../components/List';

class Experience extends Component {
	state = { Experiences };
	render() {
		return (
			<Container>
				<Jumbotron className='mt-3 mb-3'>
					<h1 className='bigWordName m-0 text-right'>experience</h1>
					<h4 className='text-right'>recent tech experience</h4>
				</Jumbotron>
				<Row Container>
					{this.state.Experiences.map((experience) => (
						<HeaderCard
							companyName={experience.companyName}
							positionTitle={experience.positionTitle}
							employedDates={experience.employedDates}
						>
							<ListGroup>
								{experience.jobDescriptions.map((description) => (
									<ListItem jobDescription={description} />
								))}
							</ListGroup>
						</HeaderCard>
					))}
				</Row>
			</Container>
		);
	}
}

export default Experience;
