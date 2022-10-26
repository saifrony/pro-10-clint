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
        <div className='d-flex'>
            <div>
            <h2>hooo{catagories.length}</h2>
            {
                catagories.map(course=><p key={course.id}>
                    <Link to={`/course/$course.id`}>{course.name}</Link>
                </p>)

            }
        </div>
        <div>
        
        {
                catagories.map(course=><p key={course.id}>
                    <Link>src={course.img}</Link>
                </p>)

            }
        </div>
        </div>
    );
};

export default Courses;