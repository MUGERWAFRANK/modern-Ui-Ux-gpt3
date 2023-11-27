import React from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/logo svg.webp' ;

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
    <div className='gpt3__navbar-links'>
    <div className='gpt3__navbar-links-logo'>
    <img src={logo} alt='logo' />

    </div>
    </div>
    </div>
  )
}

export default Navbar