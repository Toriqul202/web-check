
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row , Button } from 'react-bootstrap';
import './Sample-about.css'

const Sampleabout = () => {
    return (
        <div style={{margin:'5%',backgroundColor:'black',color:'white',padding:'20px',borderRadius:"5px"}}>
     <Container >
          <Row>
              <Col className=" mx-auto">
              <div className="d-flex justify-content-center">
                  <img src="http://zcube.in/hitup/img/bg/about-img.png" alt="" className="img-fluid me-5"/>
              </div>
             
             
              </Col>
              <Col className="py-5">
             
              <h2>Body Shape <span style={{color:'#8368FF'}}>HERO</span>  </h2>
                <p className="meta-des">We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long term contracts</p>
               <Button variant="warning" style={{backgroundColor:'#8368FF'}} className="btn">Check It Now</Button>
              </Col>
          </Row>
       </Container>
        </div>
    );
};

export default Sampleabout;