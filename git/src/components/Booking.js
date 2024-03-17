import { Component } from 'react'
import i from './images/i.png'
import logo from './images/logo.jpg'
import './Navbar.css'
import Footer from './Footer'
import './Booking.css'


export class Booking extends Component {
    state = {clicked: false};
    handleclick =() =>{
      this.setState({clicked : !this.state.clicked})
    }
  
    render() {
  return (
    <>
      <div>
        <div className="navigation1">
      
      <a href="/"><img src={logo} alt="/" /></a>
      <div className="navigation">
      <ul id="navbar" className={this.state.clicked ? "navbar active" : "#navbar"}>
        <li><a className="active" href="/">HOME</a></li>
        <li> <a href="/">MENU</a></li>
        <li><a href="/">ABOUT US</a></li>
        <li><a href="/">CONTACT</a></li>
        <li> <a href="/">BOOKING </a></li>
      </ul>
      <div className='mobile' onClick={this.handleclick}><i id='bar' className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i></div>
</div>
</div>
<div className="but1"><button><a href="/">Book NOW</a></button></div>

</div>

        <div className="booking">
            <div className="book">
                 <h1>Book a <span>Table</span>  </h1> <img src={i} alt="" /> 
            </div>
            <div className="form">
                <form action="">
                    <input type="text"    placeholder='Enter Name'/>
                    <input type="number"  placeholder='Phone Number'/>
                    <input type="date"    placeholder='Pick up Date ' />
                    <input type="time"    placeholder='Select-Time'/>
                    <input type="number"  placeholder='No of people' />
                    <input type="number"  placeholder='Select Table'/>
                </form>
            </div>
            </div>
        
        <div className='textarea'>
            <div className="text">
                 <h1>Request <span>Box</span></h1> <img src={i} alt="" />

            </div>
            < div className="text1">
                <form action="">
                    <input type="textarea"  placeholder='(Ex: Cake, Decorations Anniversary/  Birthdays or any Bulk Orders, Family Get To-Gather  for more details feel free to ask us!)'/>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  );
}
}
export default Booking;