import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div>
                <Card className="text-center">
      
      <Card.Body>
        <Card.Title>R-Programing</Card.Title>
        <Card.Text>
        R-Programing refers to the various tools and techniques that are utilized in the process of communication <br/>between different types of devices over the internet.A web browser is used to access web pages.Web browsers can <br/>be defined as programs that display text, data, pictures, animation, and video on the Internet.
        </Card.Text>
        <Link to='/ragister'><Button  variant="primary" className='me-2'>Register</Button></Link>
        <Link to='/login'><Button variant="primary">Login</Button></Link>
      </Card.Body>
    
    </Card>
        </div>
    );
};

export default Home;