import { Component } from 'react'
import logo from './images/logo.jpg'
import './Navbar.css'


export class Navbar extends Component {
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
  </>
    );
  }
}
export default Navbar;






