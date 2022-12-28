import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';





const Ragister = () => {

 const{createUser,signInWithGoogle}=useContext(AuthContext);


 const handleGoogle = () =>{
  signInWithGoogle()
  .then(result=>{
    const user = result.user;
    console.log(user);

  })
  .catch(error=>{
    console.error(error);
  })
}
// const handleGoogleSignIn = () => {
//   signInGoogle()
//   .then( result => {
//       const user = result.user;
//       console.log(user);
//   })
//   .catch(error => console.error(error));
// }


const handleRegister = event=>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(name, email,password)

  createUser(email,password)
  .then(result=>{
    const user = result.user;
    console.log('register user',user)
    form.reset();
  })
  .catch(error=>{
    console.error(error);
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
     
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <button onClick={ handleGoogle} className='btn btn-outline btn-success mt-2'>Google</button>
    </div>
    
  );
};

export default Ragister;