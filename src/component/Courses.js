import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const Courses = () => {
    const [catagories,setCatagory]=useState([]);

    useEffect(()=>{
            fetch('http://localhost:5000/course')
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
                    <img src={course.img} alt=''></img>
                </p>)

            }
        </div>
        <div className=' bg-red'>
        
        {
                catagories.map(course=><p key={course.id}>
                    <img src={course.img} alt=''/>
                    <p>{course.name}</p>
                    <p>{course.Details}</p>
                </p>)

            }
        </div>
        </div>
        </div>
    );
};

export default Courses;