import React from 'react';

import Card from 'react-bootstrap/Card';


const Blog = () => {
    return (
        <div>
            <div className="justify-content-center">
      <Card  className='mb-3'>
        <Card.Body>
          <Card.Title>What is Cor's ?</Card.Title>
          <Card.Text>
          Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title>Why are you using Firebase? What other options do you have implement Authentication</Card.Title>
          <Card.Text>
          Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title>How does the Private route work.</Card.Title>
          <Card.Text>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title>What is Node? How does Node work.</Card.Title>
          <Card.Text>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
          <br/>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </Card.Text>
        </Card.Body>
      </Card>

      
    </div>
        </div>
    );
};

export default Blog;