import React from 'react';
import { Card, Col, Container, Row ,Button } from 'react-bootstrap';
import './Sample-services.css'

const Sampleservices = () => {
    return (
        <div>
       <Container>
         <Row className="g-2">
          <Col>  
           <Card className="p-2">
            <Card.Img variant="top" src="https://html.modernwebtemplates.com/okorner/images/team/01.jpg" />
          <Card.Body className="text-center">
          <Card.Title style={{fontSize:'15px'}}> Karate Training</Card.Title>
          <Card.Text className="text-center">
          Combining the experience of karate masters, we give useful karate practice tips to help improve your existing skills.
          </Card.Text>
        
           <Button variant="primary" className="text-center">Get Course</Button>
         
         </Card.Body>
       </Card>
      </Col>
         <Col> 
          <Card className="p-2">
            <Card.Img variant="top" src="https://html.modernwebtemplates.com/okorner/images/team/02.jpg" />
          <Card.Body className="text-center">
          <Card.Title style={{fontSize:'15px'}}> Self Training</Card.Title>
          <Card.Text className="text-center">
          Combining the experience of Shaolin masters, we give useful Shaolin practice tips to help improve your existing skills.
          </Card.Text>
        
           <Button variant="primary" className="text-center">Get Course</Button>
         
         </Card.Body>
       </Card></Col>
         <Col>  
         <Card className="p-2">
            <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20190912/ourlarge/pngtree-karate-man-png-image_1728017.jpg" />
          <Card.Body className="text-center">
          <Card.Title style={{fontSize:'15px'}}>kungfu Training</Card.Title>
          <Card.Text className="text-center">
          Combining the experience of Kungfu masters, we give useful kungfu practice tips to help improve your existing skills.
          </Card.Text>
        
           <Button variant="primary" className="text-center">Get Course</Button>
         
         </Card.Body>
       </Card></Col>
         <Col> 
          <Card className="p-2">
            <Card.Img variant="top" src="https://html.modernwebtemplates.com/okorner/images/team/03.jpg" />
          <Card.Body className="text-center">
          <Card.Title style={{fontSize:'15px'}}> Judo Training</Card.Title>
          <Card.Text className="text-center">
          Combining the experience of Judo masters, we give useful Judo practice tips to help improve your existing skills.
          </Card.Text>
        
           <Button variant="primary" className="text-center">Get Course</Button>
         
         </Card.Body>
       </Card></Col>
        </Row>
        </Container>
        </div>
    );
};

export default  Sampleservices ;