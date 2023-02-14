import React from 'react';
import { Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
	return (
		<Container>
      <Jumbotron style={{paddingTop: "23vh"}}>
        <h1 className="bigWordName m-0">Eunah Kim</h1>
        <h1 className="bigWord m-0 text-info">Full Stack Developer</h1> 
        <h4>hello, nice to meet you.</h4>
      </Jumbotron>
		</Container>
	);
};

export default Home;
