// import React, { useState } from 'react'
// import './LoginSignup.css'
// import texticon from '../Asserts/icons8-name-tag-24.png'
// import emailicon from '../Asserts/icons8-email-32.png'
// import passwordicon from '../Asserts/icons8-password-24.png'

// export const LoginSignup = () => {

//   const [action,setAction]=useState("Login");    

//   return (
//     <div className='container'>
//      <div className="header">
//        <div className="text">{action}</div>
//        <div className="Underline"></div> 
//     </div>
//     <div className="inputs">
//       {action==="Login"?<div></div>:<div className="input">
//         <img src={texticon} alt="" />   
//         <input type="text" placeholder='Name'/>
//     </div>}
//     <div className="input">
//         <img src={emailicon} alt="" />   
//         <input type="email" placeholder='Email' />
//     </div> 
//     <div className="input">
//         <img src={passwordicon} alt="" />   
//         <input type="password" placeholder='password' />
//     </div>
//    </div> 
//    {action==="Sign Up"?<div></div>:<div className= "forget password">Lost password<span><a>Click Here</a></span></div>} 
 
//    <div className="submit-container"></div>
//     <div className={action==="Login"?"sumbit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//     <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//    </div>    
//   );
// };
import './LoginUi.css';
import profile from "../../assets/icons8-me-50.png";
import email from "../../assets/icons8-email-32.png";
import pass from "../../assets/icons8-password-24.png";
import { Link } from 'react-router-dom';
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button className="but">Login</button>
          </div>
           
            <p className="link">
              <a className="ab" href="#">Forgot password ?</a> <Link to='/register'> Sign Up</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;
