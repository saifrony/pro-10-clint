import React from 'react';


import { Outlet } from 'react-router-dom';
import Courses from '../component/Courses';
import Footer from '../Footer';
import Navber from '../Header';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            
               <Outlet>
                    <Courses></Courses>
               </Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;