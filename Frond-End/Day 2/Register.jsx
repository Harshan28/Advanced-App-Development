// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Register.css';

 // eslint-disable-next-line no-unused-vars
//  import user from "./Asserts/user.png";

 // eslint-disable-next-line no-unused-vars
//  import pass from "./Asserts/padlock(1).png";


export const Register = () => {
  const [username, setUsername] = useState('');
  const[email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');



  

  const handleLogin = () => {
    // Handle login logic here
    // console.log(Logging in with username: ${username} and password: ${password});
  };

  return (
    <div className='bod'>
    <div className="login-container1">
      <div className="login-card1">
        <div className="login1">
        <h2 className='htag'>Registration</h2>
        </div>
        <form className='frm'>
          <label className='lab' htmlFor="username">Username:</label>
          <input
            className='inp'
            type="text"
            id="username"
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}


          <label className='lab' htmlFor="email">Email Id:</label>
          <input
          className='inp'
            type="text"
            id="email"
            placeholder='Enter your Email-Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label className='lab' htmlFor="password">Password:</label>
          <input
          className='inp'
            type="password"
            id="password"
            placeholder='Enter your Password'
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />

         <label className='lab' htmlFor="dob">D.O.B:</label>
          <input
          className='inp'
            type="date"
            id="dob"
            placeholder='Enter your Date of birth'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

        <label className='lab' htmlFor="mob">Mobile No:</label>
          <input
          className='inp'
            type="tel"
            id="mob"
            placeholder='Enter your Mobile number'
            pattern="[0-9]{10} " required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br></br><br></br>

          <button className="butt" type="button" onClick={handleLogin}>
            Register
          </button>
          <br></br>
         
        </form>
      </div>
    </div>
    </div>
  );
};
