import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import picture from '../assets/profile_picture.png';

const Home = () => {
   return (
      <Container>
         <Jumbotron>
            <h1 className="bigWord m-0">Hello,</h1> 
            <h1 className="bigWord m-0">my name is <span className="bigWordName m-0">Eunah Kim</span></h1>
            <h4 className="text-right">and welcome to my page.</h4><br />
         </Jumbotron>
         <Row>
            <Col size="4">   
               <img src={picture} className="img-thumbnail" alt="eunah-picture" />
            </Col>
            <Col size="8">   
               <h4>Hello world.</h4>
            </Col>
         </Row>
      </Container>
   ) 
};

export default Home;