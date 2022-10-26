import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from './firebase/firebas.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';

const auth = getAuth(app);

const Login = () => {
const handleRegister = event=>{
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  

  createUserWithEmailAndPassword(auth,email,password)
  .then(result=>{
    console.log(result.user)

    updateProfile(auth.currentUser,{
      displayName:name,
    })
    .then(()=>{
      toast.success('name uploded')
      console.log(auth.currentUser.displayName)

      // email varification
      sendEmailVerification(auth.currentUser).then( ()=>{
        toast.success('please check  you email ')
      })
    .catch(error=>{
      toast.error(error.message)
     })
    })

    
  })
  .catch(error=>console.log(error))
}

  return (
    <div className='w-50 mx-auto mt-5 mb-5 '>
      <Form onSubmit={handleRegister} className=''>
        <h3 className='text-primary'>Please Register</h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" name='name' placeholder="User name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <div>
    <Button></Button>
    </div>
    </div>
    
  );
};

export default Login;