import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import img1 from './assin/1.png'
import { AuthContext } from './context/AuthProvider';


const Navber = () => {
  const {user}=useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={img1} alt='' className='me-2'/>
          <Link to="/">
           R-Programing
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/Course'>Courses</Link></Nav.Link>
            <Nav.Link><Link>FAQ</Link></Nav.Link>
            <Nav.Link ><Link to='/Blog'>Blog</Link></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Link to='login'>login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navber;