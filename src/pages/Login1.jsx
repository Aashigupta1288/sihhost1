import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './login.css';
import bg from './bglogin.jpeg';


export const Login1 = () => {
  return (
    <>
    <Navbar/>
    <div className="Bb">


           <div className="L">
            <br/> <br/> <br/>
            <logi>
            <pp>Crisis Aid 360</pp>
            <br/><br/>
            <l>A site meant to help people in need</l>
            </logi>
           

          
           
           </div>



           <div className="R">
            <le>Login</le><br/><br/><br/>
             <div className="inputs">
               <input type="number" placeholder="ID"  />
               <br /><br/>
               <input type="password" placeholder="Password"  />
               <br /><br/> <br/>
        
   

               <button><Link to="/Signup" style={{ textDecoration: "none", color:"White"}} > Login </Link></button>

             </div>
             <br />
             <p>
             &nbsp;&nbsp;&nbsp;Don't have an account? <Link to="/signup" style={{ textDecoration: "none" ,color:"Pink" }}>Create your account</Link>
             </p>
           
           </div>
         </div>
        
         
   </>
  )
}
export default Login1
