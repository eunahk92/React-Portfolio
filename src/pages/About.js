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
               <p>Ambitious Full Stack Web Developer with over 8 years of experience in a leadership role in the Food & Beverage industry. Recent recipient of a certificate from the University of Central Florida Full Stack Web Development Bootcamp that allowed me to acquire and hone my skills. Professional strengths include multitasking, communication and time management with solid ability to learn quickly and stay calm under high pressure and fast-paced environments, collaborate with a team or work independently, and a strong focus on attention to detail. Passionate to make an impact in creating intuitive applications and continue my growth in this ever-growing field. </p>
               <h2 className="mb-1 text-info">skills</h2>
               <p>HTML5 | CSS3 | JAVASCRIPT | jQUERY | NODE.JS | MONGO-DB | MYSQL | REACT | EXPRESS | EXPRESS-HANDLEBARS | JSON </p>    
               <h2 className="mb-1 text-info">education</h2> 
               <h4 className="mb-0">UNIVERSITY OF CENTRAL FLORIDA</h4>
               <span className="text-white ml-3">MARCH - SEPTEMBER 2020</span><br/>
               <span className="text-white ml-3">FULL STACK WEB DEVELOPMENT CERTIFICATE</span>
               <h4 className="mb-0">UNIVERSITY OF CENTRAL FLORIDA</h4>
               <small className="text-white ml-3">ROSEN COLLEGE OF HOSPITALITY MANAGEMENT</small><br/>
               <span className="text-white ml-3">2015 | BACHELORS IN HOSPITALITY AND EVENT MANAGEMENT</span>
            </Col>
         </Row>
      </Container>
   ) 
};

export default About;