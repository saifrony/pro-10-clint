import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaGoogle,FaTwitter,FaGithub } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from './context/AuthProvider';

const Login = () => {

  const{signIn,signInWithGoogle}=useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = event=>{
    event.preventDefault();
    const form= event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log('login user',user)
      form.reset();
      navigate('/Home')

    })
    .catch(error=>{
      console.error(error);
    })
    }
    const handleGoogleBtn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
      })
    }

 
  return (
    <div className='w-50 mx-auto mt-5 mb-5 '>
      <Form onSubmit={handleSubmit} className=''>
        <h3 className='text-primary'>Please Login</h3>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <div className='text-center'>
    <p>Signup with social accounts</p>
    <button onClick={handleGoogleBtn}  className='btn btn-outline text-primary mt-2 me-2'><FaGoogle/></button>
    <button  className='btn btn-outline text-primary mt-2 me-2'><FaTwitter/></button>
    <button  className='btn btn-outline text-primary mt-2 me-2'><FaGithub/></button>
    </div>
    <p className='text-center'><small>Don't have an account yet?</small><Link to='/ragister'>Sign up</Link>.</p>
    </div>
    
  );
};

export default Login;