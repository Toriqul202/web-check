import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
       fetch('./Tools.JSON')
       .then(res=>res.json())
       .then(data=>setServices(data))
    },[])
    return (
        <div className="d-grid">
            <h1 className="text-center">All Services</h1>
            <Row xs={1} md={4} className="g-2 mx-3">
            {
                services.map(sw=><Service service={sw}></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;