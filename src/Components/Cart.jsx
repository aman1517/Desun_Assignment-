import React,{useState} from 'react';
import "../Style/Cart.css"
 import { useNavigate } from 'react-router-dom';

const Cart= () => {
  let x=localStorage.getItem("check")
  let data = JSON.parse(localStorage.getItem("gameData"));
  const navigate=useNavigate()
  const [array,setArray]=useState(data)
//  const delteHandle=(el)=>{
//   const new_arr=array.filter((item)=>item.id  !==el)
//   console.log(new_arr)
//    setArray(new_arr)
  
//  }
 const CheckoutHandle=(ele)=>{
  if(x=="youcanbuy"){
    localStorage.setItem("title",ele)
    navigate("/checkout")
  }
  else{
    alert("You have to login first for booking")
    navigate("/login")
  }
 }

  return (
    <div>
     <h2>Cart Page</h2>
    <div className='cartmain'>
     
      {
        array.length>0 && data.map((el,index)=>{
          return(
            <div className='cartbox'>
              <h2>{el.name}</h2>
              <div><img src={el.img} alt="cart img"/></div>
              <span className='btn'>
              <button onClick={()=>CheckoutHandle(el.name)}>Checkout</button>
             
              </span>
            </div>
          )
        })
      }
    </div>
    </div>
  );
}

export default Cart;
