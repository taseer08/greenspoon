import React from 'react'
import logol from './images/logol.png'
import bb from './images/bb.png'
import './Footer.css'

export default function footer() {
  return (
    <>
    <div className='footer'>
    <div className="footer1">
        <div className="logo">
            <img src={logol} alt="" />
        </div>
        <div className="open">
            <h5>Opening hours</h5>
            <ul>
                <li id='li1'> Monday  - Sunday : </li>
                <li>08:00 AM to 10:30 PM</li>
            </ul>
        </div>
        <div id="contact">
            <h5>Contact Us</h5>
            <ul>
                <li> 8296826244 </li>
                <li> 0824 - 6816604</li>
            </ul>
        </div>
        <div className="address">
            <h5>Address</h5>
            <ul>
                <li> Opp Rosa Mystica School,</li>
                <li> Near Polali Dwara, </li>
                <li> Gurupura Kaikamba,</li>
                <li> Mangalore </li>
            </ul>
        </div>
    </div>
        <br />
        <div className="footer2">
            <div className="foot">
                <img src={bb} alt="" />
            </div>
            <div className="socalmedia">
                <i className='fa-brands  fa-facebook'></i>
                <i className='fa-solid  fa-envelope'></i>
                <i className='fa-brands fa-instagram'></i>
            </div>
           
        </div>
    </div>
      
    </>
  )
}
