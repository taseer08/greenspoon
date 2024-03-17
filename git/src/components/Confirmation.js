import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Confirmation.css'
import resto from './images/resto.jpg'

export default function Confirmation() {
  return (
    
    <>
        <Navbar/>
        <div className="resver">
            <img src={resto} alt="" />
            <div className="resv">
                <h1>
                    Reserved
                </h1>
            </div>
        </div>
            <div className='confir'>
                <div className="confirm">
                    <div className="confi">

                        <i class="fa fa-check-circle"></i>
                        <h3>Booking Conformation </h3>
                    </div>
                    <div className="confirmed">
                        <p>Great! Your booking has been confirmed. Enjoy your meal at the restaurant! <br />
                        If you have any other questions or need further assistance, feel free to ask.</p>
                    </div>
                    </div>
            </div>
        <Footer/>
    </>
    
  )
}
