import React from 'react';
import { Col,Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5" style={{backgroundColor:'black',color:'white',padding:'10px 0px 0px 0px'}}> 
            
            <Row>
                <Col className="text-center p-5">
                     <h3>Recent Post</h3>
                     <p style={{fontSize:'10px'}}> How To Win In Every Road Fight</p>
                    
                     <p style={{fontSize:'10px'}}>Make It Your Destiny To Accomplish Great Things In Your Life</p>
                </Col>
                <Col className="text-center p-5">
                    <h3>Karate Hero</h3>
                    <p style={{fontSize:'10px'}}>Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                </Col>
                <Col className="p-5"><img src="https://html.modernwebtemplates.com/okorner/images/gallery/15.jpg" alt="" className="img-fluid my-auto" /></Col>
            </Row>
            <div style={{backgroundColor:'white',textAlign:'center',color:'black',fontSize:'10px',padding:'10px'}}>CopyRight By @Toriqul 2022</div>
        </div>
        
    );
};

export default Footer;