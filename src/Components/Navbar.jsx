import React from 'react';
import "../Style/Navbar1.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='Navbar1'>
        
        <Link to="/"><p>Home</p></Link>
        <Link to="/gamelist"><p>Game List</p></Link>
        <Link to="/login"><p>Login</p></Link>
       
      </div>
    </div>
  );
}

export default Navbar;
