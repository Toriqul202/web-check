import React from 'react';
import { Card,Button, Col} from 'react-bootstrap';

const Service = (props) => {
    const {title,metaTitle,img}=props.service
    return (
        <div>
            
          <Col>  
           <Card className="p-2">
            <img src={img} alt="" height="200px"/>
          <Card.Body className="text-center">
          <Card.Title style={{fontSize:'20px'}}>{title}</Card.Title>
          <Card.Text className="text-center">
           {metaTitle}
          </Card.Text>
        
           <Button variant="primary" className="text-center">Get Course</Button>
         
         </Card.Body>
       </Card>
      </Col>
        
       
        </div>
    );
};

export default Service;