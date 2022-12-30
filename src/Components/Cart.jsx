import React,{useState} from 'react';
import "../Style/Cart.css"

const Cart= () => {
  let data = JSON.parse(localStorage.getItem("gameData"));
  const [array,setArray]=useState(data)
 const delteHandle=(el)=>{
  const new_arr=array.filter((item)=>item.id  !==el)
  console.log(new_arr)
   setArray(new_arr)
  
 }
 const CheckoutHandle=(ele)=>{
  localStorage.setItem("title",ele)
 }

  return (
    <div>
     <h2>Cart</h2>
    <div className='cartmain'>
     
      {
        array.length>0 && data.map((el,index)=>{
          return(
            <div className='cartbox'>
              <h2>{el.name}</h2>
              <div><img src={el.img} alt="cart img"/></div>
              <span className='btn'>
              <button onClick={()=>CheckoutHandle(el.name)}>Checkout</button>
              <button onClick={()=>delteHandle(index)}>Delet form Cart</button>
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
