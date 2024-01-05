import React from 'react'
import './helpline.css';
import image from "./bg.PNG";
import Navbar from './Navbar';

const Helpline = () => {
  return (
    <>
    <Navbar/>
    <div className='bgimg'>

    <h1 ALIGN='CENTER' className='headingh'>HELPLINE SERVICES</h1>
   <section className="cont" align='center'>
    <div className="profilea">
        <div className="profile-image profile1"></div>
        

        <h3 ALIGN="CENTER" className="h">KANDAGHAT POLICE STATION</h3>
        
        <p className="TEXT">CONTACT:9876456745</p>
     <p className="TEXT">LOCATION:KANDAGHAT</p>
     <p className="TEXT">TYPE:POLICE STATION</p>
     <br/>
     
     
    <a href="" className="style">  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; view more &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</a>
    

    </div>
    </section>
    </div>
 </>
  )
}

export default Helpline
