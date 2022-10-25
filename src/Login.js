import React from 'react';
import Form from 'react-bootstrap/Form';
const Login = () => {
    return (
        <div className=' w-50 m-auto align-items-center justify-content-center mt-5'>
            <Form className='border rounded border-info mb-5 p-2'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
        <button className='rounded bg-success m-0 bg-red hover'>submit</button>
    
    </Form>
        </div>
    );
};

export default Login;