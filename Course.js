import React from 'react';
const Course = (props) => (
  
    <div key={props.course.id}>
        <p onClick={()=>console.log({props})}>{props.course.state+" "+props.course.cases+" "+
        
        props.course.deaths+" "+props.course.recovered
        }</p>
    </div>
);
export default Course;