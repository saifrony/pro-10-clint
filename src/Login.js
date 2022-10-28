import React, { useContext } from 'react';
import {FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { toast } from 'react-toastify';
import { AuthContext } from './context/AuthProvider';


const Login = () => {
  const{createUser,updateName, signInWithGoogle} = useContext(AuthContext)
 


const handleRegister = event=>{
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  

  createUser(email,password)
  .then(result=>{
    console.log(result.user)

    updateName(name)
    .then(()=>{
      toast.success('thanks')
      

      // email varification
      // varifyEmail(auth.createUser).then( ()=>{
      //   toast.success('please check  you email ')
      // })
    .catch(error=>{
      toast.error(error.massage)
     })
    })

    
  })
  .catch(error=>console.log(error))
}
const googleSubmit = () =>{
 signInWithGoogle().then(result=>{
    console.log(result.user)
  })
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
    <p ><FcGoogle onClick={googleSubmit}></FcGoogle></p>
    </div>
    
  );
};

export default Login;