import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import { Col, Container, Row,Button } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
        <Container>
          <Row>
              <Col className="py-5">
                <h2>WELCOME<br/> TO <span style={{color:'red'}}>KARATE</span> HERO
                </h2>
                <p className="meta-des">Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
               <Button variant="danger" className="btn">Enroll Now</Button>
              </Col>
              <Col>
              <div>
                  <img src="https://png.pngtree.com/png-vector/20190912/ourlarge/pngtree-karate-man-png-image_1728017.jpg" alt="" className="img-fluid"/>
              </div>
              </Col>
          </Row>
       </Container>
        </div>
    );
};

export default Header;