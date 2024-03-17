import React from 'react'
import tas from './images/pasta.jpg'
import pasta from './images/pasta.jpg'
import pasta2 from './images/pasta2.jpg'
import b from './images/b.jpg'
import './Navbar.css'


export default function Welcom() {
  return (
    <div>
          <section className="home">
      <div className="content">
          <h1> wel <span>come</span> </h1>
          <p>Welcome to a world where veggies take center stage! Indulge in our diverse menu and discover the joy of vegetarian dining </p><img src={b} alt="" />
      </div>
      <div className="content2">
          < img className="img" src={pasta} alt=""/>
            <div className="img1"> <img  src={tas} alt=""/></div>
            <div className="img2"><img  src={pasta2} alt=""/></div>
      </div>    
  </section>
      
    </div>
  )
}
