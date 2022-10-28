

const Logout = () => {
  


 
  return (
    <div className='w-50 mx-auto mt-5 mb-5 '>
      <Form  className=''>
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
        Register
      </Button>
    </Form>
    <p ><FcGoogle onClick={googleSubmit}></FcGoogle></p>
    </div>
    
  );
};

export default Logout;