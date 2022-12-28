import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Catagory = () => {
    const{user}=useContext(AuthContext);
    return (
        <div>
            <h2>{user?.email}</h2>
            6
        </div>
    );
};

export default Catagory;