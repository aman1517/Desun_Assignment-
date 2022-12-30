import React,{useState} from 'react';
import "../Style/Navbar1.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div>
      <div className='Navbar1'>
        
        <Link to="/"><p className='title'>Home</p></Link>
        <Link to="/gamelist"><p className='title'>Game List</p></Link>
        <Link to="/login"><p className='title'>Signup</p></Link>
        <Link to="/cart"><p className='title'>Cart</p> </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
