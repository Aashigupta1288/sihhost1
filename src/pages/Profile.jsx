import React from 'react';
import './profile.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import  back from './profile.PNG';
import p from './pp.PNG'


class Profile extends React.Component{
    render(){
      const myStyle={
backgroungImage:"url('https://rare-gallery.com/thumbs/5295964-eruption-volcano-indonesia-sumatra-lava-plumes-smoke-night-stars-mountain-peak-explosion-orange-red-sinabung-free-images.jpg')"
      };

        return(
        <>
        <Navbar/>
        <div className="pimg">
          <br/>
          <im>

            
          </im>
        <div className='leftp'>
        <pf>Profile</pf>

        <div className='logop'>
       
        <img src='https://www.centralaidagency.org/uploads/1/2/9/4/129459756/published/emergency-response-force-1-patch-copy-copy.png?1614568418' height="200px" />
   
         

        </div>
               
             
                  <div className='contentp'>
                  {/* <h2 >Details:</h2> */}
                  <p> <b> Username&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="" /></p>
                  
                  <p> <b> Name&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="" /></p>
                 
    
                  <p> <b> Contact No.&nbsp;</b>&nbsp;&nbsp;&nbsp;<input type="number" placeholder="" /></p>
                 
                  <p> <b> Address&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="" /></p>
                 
                  <p> <b> Type&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="" /></p>
                  
                  <p> <b> ID&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" placeholder="" /></p>
                  </div>
        </div>
                  
        <div className='rightp'>

          <alert>   Alert  </alert>     

        </div>


        </div>
      
        
              </>


            );
    }
}

export default Profile