import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Make sure to replace 'YourComponent' with the actual name of your React component
// import './Loginsignup';
// import './Cources';
import './Adminenquiry';

// Create a functional component
const Homepage2= () => {
  return (
    <div className='kok'>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">H2B</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admnpmcourse">Add Courses</Link></li>
            <li><Link to="/update">Update Course</Link></li>
            <li><Link to="/Adminenquiry">View Enquiry</Link></li>
            

            {/* <li><a href="#">Feedback</a></li> */}
            {/* <li><Link to ="/Login">Login</Link></li> */}
            
          </ul>
        </div>
      </nav>
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">Education: One thing that can’t be taken from you</div>
        <div className="sub_title">No child should be left behind</div>
        <div className="btns">
          {/* <button>Learn More</button>
          <button>Subscribe</button> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage2