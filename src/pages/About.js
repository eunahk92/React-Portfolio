import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import picture from '../assets/profile_picture.png';

const About = () => {
   return (
      <Container>
         <Jumbotron className="mt-3 mb-3">
            <h1 className="bigWordName m-0 text-right">Eunah Kim</h1>
            <h1 className="bigWord m-0 text-right">Full Stack Developer</h1> 
         </Jumbotron>
         <Row fluid>
            <Col size="md-4">   
               <img src={picture} className="img-thumbnail mt-3" alt="eunah-headshot" />
            </Col>
            <Col size="md-8">   
               <h2 className="mb-1 text-info">who am i?</h2>
               <p>Experienced Food and Beverage operations professional with over 8 years of experience in the Hospitality Industry in a leadership role. I am an ambitious individual with strong skills in communication, problem-solving and time-management. I am well versed with Microsoft Office and Adobe Photoshop.<br/>
               I am aspiring to be a Software Developer and currently am maturing my skills as a Full Stack Web Developer to create, develop, and transform visions or new opportunities in their businesses. My hobbies include photography, graphic design, and traveling.</p>
               <h2 className="mb-1 text-info">skills</h2>
               <p>HTML | CSS | JAVASCRIPT | NODE.JS | MONGODB | MYSQL | REACT</p>    
               <h2 className="mb-1 text-info">education</h2> 
               <h4 className="mb-0">UNIVERSITY OF CENTRAL FLORIDA</h4>
               <span className="text-white ml-3">ROSEN COLLEGE OF HOSPITALITY MANAGEMENT</span><br/>
               <span className="text-white ml-3">2015 | BACHELORS IN HOSPITALITY AND EVENT MANAGEMENT</span>
               <h4 className="mb-0">UNIVERSITY OF CENTRAL FL - FULL STACK CODING BOOTCAMP</h4>
               <span className="text-white ml-3">MARCH - SEPTEMBER 2020</span>
            </Col>
         </Row>
      </Container>
   ) 
};

export default About;