import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div class="d-flex justify-content-center mt-5">
            <div><h2>Page not found</h2>
            
            <h4 className='text-center'><Link to='/'>Home</Link></h4></div>
           
        </div>
    );
};

export default Error;