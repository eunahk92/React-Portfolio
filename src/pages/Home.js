import React from 'react';
import { Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
   return (
      <Container>
         <Jumbotron>
            <h1 className="bigWord m-0">Hello,</h1> 
            <h1 className="bigWord m-0">my name is <span className="bigWordName m-0">Eunah Kim</span></h1>
            <h4 className="text-right">and welcome to my page.</h4><br />
         </Jumbotron>
      </Container>
   ) 
};

export default Home;