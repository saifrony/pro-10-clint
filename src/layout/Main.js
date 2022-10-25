import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navber from '../Header';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
             <Container>
                <Col>
                <Row><h2>hi</h2></Row></Col>
                <Col>
                <Row><Outlet></Outlet></Row></Col>
             </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;