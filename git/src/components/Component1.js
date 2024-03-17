import React from 'react'
import his from './images/his.jpeg'
import tandoori from './images/Tandoori.jpg'
import i from './images/i.png'
import f from './images/f.jpg'
import desert from "./images/desert.jpeg"
import e from './images/e.jpg'
import chef from './images/chef.jpeg'
import dosa from './images/dose.jpeg'
import palov from './images/palov.jpeg'
import tandoor from './images/tandoor.jpeg'
import chenies from './images/chenies.jpeg'
import colddrink from './images/colddrink.jpeg'
import icecream from './images/icecream.jpeg'
import celebration3 from './images/celebration3.jpeg'
import celebration1 from './images/celebration1.jpeg'
import celebration2 from './images/celebration2.jpeg'
import girlcelebrates from './images/girlcelebrates.png'
import celeb1 from './images/celeb1.jpg'
import './compnent1.css'

export default function Component1() {
  return (
    <>
    <div className="compt">
        
        <div className="history">
             <h1> our <span>history</span> </h1> <img src={i} alt="" />             
        </div>
         </div>
    <div className="para"> 
          <div className="imge"  >
            <img src={his} alt="" />
            </div>
            <div className='pare'>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            </div>
    </div>  
    <div className="compt">
        
        <div className="history">
             <h1> <span>about</span> chef</h1> <img src={i} alt="" />             
        </div>
         </div>
    <div className="para1"> 
          <div className="imge">
            <img src={chef} alt="" /></div>
            <div className='pare'>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
              </div>
    </div> 
    <div className="splcont">
      <div className="cont">
        <h1> <span>MOST POPULAR </span> FOOD</h1> 
        <img src={i} alt="" />
      </div>
    </div>
    <div className="splcon">
      <div className="spl1">
        <img src={tandoori} alt="" />
         <h6>tanduri</h6>
         <div className="rate">
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star' id='rating'></i>
            </div>
            <button>Book Now</button>
      </div>
      
      <div className="spl2">
        <img src={e} alt="" />
        <h6>evening snacks</h6>
        <div className="rate">
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star' id='rating'></i>
            </div>
            <button>Book Now</button>

      </div>
      <div className="spl3">
        <img src={desert} alt="" />
        <h6> deserts</h6>
        <div className="rate">
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star' id='rating'></i>
            </div>
            <button>Book Now</button>

      </div>
    </div>
    <div className="menu">
      <h1>Menu</h1><img src={i} alt="" />  
    </div>
    <div className="menuimg">
      <div className="menu1">
        <div className="dosa"><img src={dosa} alt="" /><h6>Dosa  Specialities</h6></div>
        <div className="pulav"><img src={palov} alt="" /><h6>Pulav & Biriyani</h6></div>
      </div>
      <div className="menu2">
        <div className="tandoor"><img src={tandoor} alt="" /><h6>Tandoor</h6></div>
        <div className="pulav"><img src={chenies} alt="" /><h6>Chinese Starters</h6></div>
      </div>
      <div className="menu3">
        <div className="ice"><img src={icecream} alt="" /><h6>Ice Cream</h6></div>
        <div className="cold"><img src={colddrink} alt="" /><h6>Cold Beverages</h6></div>
      </div>
      <div className="button12"> <button><a href="/"> More</a></button></div>
      </div>
      <div className="celebration">
        <h2><span>For</span> party <span>/</span> celebration</h2><img src={i} alt="" />  
      </div>
      <div className="celebraimg">
        <div className="slider-wrapper">
          <div className="image-list">
            <img src={celebration3} alt="celebration3" className="image-item" />
            <img src={celebration1} alt="celebration1" className="image-item"/>
            <img src={celebration2} alt="celebration2" className="image-item"/>
            <img src={celeb1} alt="celebration2" className="image-item"/>
            <img src={girlcelebrates} alt="celebration2" className="image-item"/>

          </div>
        </div>
             <h3><a href="/">Book now!</a></h3>
      </div>
      <div className="phon">
        <button><a href="/">Contact us</a></button>
      </div>
      <div className="feedback">
        <h1><i>Customers <span>Reviews</span></i></h1><img src={i} alt="" /> 
      </div>
      <div className="feed">
        <h3>JOHN LOBO</h3>
        <div className="rating">
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star' id='rating'></i></div>
          

      </div>
      <div className="start">
          <div className="imga">
            <img src={i} alt="" /></div>
          <div className="imgp">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p> 
          </div>
        </div>
    </>
  );
}
