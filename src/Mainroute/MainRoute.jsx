import React from 'react';
import NavbarPaage from '../Pages/NavbarPaage';
import { Routes ,Route } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import SingUp from '../Components/SingUp';
import Cart from '../Components/Cart';
import GameList from '../Components/GameList';
import Checkout from '../Components/Checkout';
import AddDetails from '../Components/AddDetails';
import PageNotFoud from '../Components/PageNotFoud';
const MainRoute = () => {
  return (
    <div>
    <NavbarPaage/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SingUp/>}/>
        <Route path='/GameList' element={<GameList/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/adddetails' element={<AddDetails/>}/>
        <Route path='*' element={<PageNotFoud/>}/>
    </Routes>
   
      
    </div>
  );
}

export default MainRoute;
