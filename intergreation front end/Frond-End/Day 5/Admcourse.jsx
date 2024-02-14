// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Admincourse.css';

 // eslint-disable-next-line no-unused-vars
//  import user from "./Asserts/user.png";

 // eslint-disable-next-line no-unused-vars
//  import pass from "./Asserts/padlock(1).png";


 const Admcourse = () => {
  const [username, setUsername] = useState('');
  const[email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');



  

  const handleLogin = () => {
    
  };

  return (
    <div className='lol'>
    {/* <div className='bod'> */}
    <div className="login-container1">
      <div className="login-card1">
        <div className="login1">
        <h2 className='htag'>New Course Enrollment</h2>
        </div>
        <form className='frm'>
          <label className='lab' htmlFor="username">Course Name:</label>
          <input
            className='inp'
            type="text"
            id="username"
            placeholder='Enter the course Needed to be added'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}


          <label className='lab' htmlFor="email">Duration:</label>
          <input
          className='inp'
            type="text"
            id="email"
            placeholder='Enter the Duration'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label className='lab' htmlFor="password">Timing:</label>
          <input
          className='inp'
            type="text"
            id="password"
            placeholder='Enter the Class timing'
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />

         <label className='lab' htmlFor="dob">Mode:</label>
          <input
          className='inp'
            type="text"
            id="dob"
            placeholder='Enter Wheather ofline or Online Mode'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

        <label className='lab' htmlFor="mob">Fee:</label>
          <input
          className='inp'
            type="tel"
            id="mob"
            placeholder='Enter The Fee Amount'
            pattern="[0-9]{10} " required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br></br><br></br>

          <button className="butt" type="button" onClick={handleLogin}>
            Submit
          </button>
          <br></br>
         
        </form>
      </div>
    {/* </div> */}
    </div>
    </div>
  );
};

export default Admcourse;
