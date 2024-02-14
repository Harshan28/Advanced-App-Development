import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; 
import Slide from '../LoginSignup/Slide';
// Make sure to replace 'YourComponent' with the actual name of your React component
// import './Loginsignup';
// import './Cources';
// import './Enquiry';

// Create a functional component
const Homepage1= () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">H2B</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Cources">Courses</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
            {/* <li><a href="#">Feedback</a></li> */}
            {/* <li><Link to ="/Login">Login</Link></li> */}
            
          </ul>
        </div>
      </nav>
     
     
      <div className="imgbg">
          <Slide/>
      </div>
      <div className="center">
        <div className="title">Education: One thing that cant be taken from you</div>
        <div className="sub_title">No child should be left behind</div>
        <div className="btns">
          {/* <button>Learn More</button>
          <button>Subscribe</button> */}
        </div>
      </div>
     
    </div>
  );
};

export default Homepage1