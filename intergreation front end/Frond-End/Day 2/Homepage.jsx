import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Make sure to replace 'YourComponent' with the actual name of your React component
import './Loginsignup';

// Create a functional component
const Homepage = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">H2B</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
            <li><Link to ="/Login">Login</Link></li>
            
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

export default Homepage;