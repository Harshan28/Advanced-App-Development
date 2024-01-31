import './Adminlogin.css';
import profile from "../../assets/icons8-me-50.png";
import email from "../../assets/icons8-email-32.png";
import pass from "../../assets/icons8-password-24.png";
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
function LoginUi() {
  return (
    <div className="main">
     <div className="hoh">
       <div>
        {/* <Navbar/> */}
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>ADMIN</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <Link to='/Homepage2'> <button className="but" >Login</button></Link>
          </div>
           
            <p className="link">
              {/* <a className="ab" href="#">Forgot password ?</a> <Link to='/register'> Sign Up</Link> */}
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;