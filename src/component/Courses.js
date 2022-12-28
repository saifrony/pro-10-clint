import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
// import Catagory from './Catagory';


const Courses = () => {
    const [catagories,setCatagory]=useState([]);

    useEffect(()=>{
            //  fetch('https://course-iota.vercel.app/course')
            fetch('https://servers-sooty.vercel.app/course')
            .then(res=>res.json())
            .then(data=>setCatagory(data));
    },[])
    return (
        <div>
              <h2 className=' bg-success  text-center'>All course  {catagories.length}</h2>
        <div className='d-flex '>
          
            <div className='w-50 ps-5 mt-4'>
            
            {
                catagories.map(course=><p key={course.id}>
                   <p><Link to={`/course/$course.id`}>{course.name}</Link></p> 
                   
                </p>)

            }
        </div>
        <div className=''>
            {/* <Catagory></Catagory> */}
        
        {
                catagories.map(course=><p key={course.id} course={course}>
                   
                    <img src={course.img} alt='' style={{ width: '18rem' }}/>
                    <h3>{course.name}</h3>
                    <p>{course.Details}</p>
                    <button variant="primary">More</button>
                   
                </p>)

            }
        </div>
        </div>
        </div>
    );
};

export default Courses;