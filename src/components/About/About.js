import React from 'react';
import { Col, Container, Row ,Button } from 'react-bootstrap';

import './About.css'

const About = () => {
    return (
        <div >
           <div className="about p-5">
           <Container>
          <Row>
              <Col className=" mx-auto">
              <div className="d-flex justify-content-center">
                  <img src="https://www.pngfind.com/pngs/m/615-6157821_taekwondo-png-transparent-png.png" alt="" 
                  className="img-fluid " height="200px" width="300px"/>
              </div>
             
             
              </Col>
              <Col className="py-5">
             
              <h2><span style={{color:'#8368FF'}}>About US</span></h2>
                <p className="meta-des">We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long term contracts</p>
               <Button variant="warning" style={{backgroundColor:'#8368FF'}} className="btn">Read More</Button>
              </Col>
          </Row>
       </Container>
           </div>
       
        </div>
    );
};

export default About;