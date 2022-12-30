import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style/Payment.css"

const Paymemnt = () => {
    const navigate=useNavigate()
    const [upi,setUpi]=useState(false)
    const [cod,setCod]=useState(false)

    const upiHandle=()=>{
        setUpi(true)
       
    }
    const codHandle=()=>{
        setCod(true)
       
    }
    const ConfPayment=()=>{
        if(cod==true && upi==true){
            alert("Choces only one payment Metod")
        }
        else if(cod==false && upi==false){
            alert("Chose one pamymet method")
        }
        else{
            alert("Your booking is Confim Thank You!")
            navigate("/")
        }
    }
  return (
    <div>
    <h2>Chose your payment method</h2>
      <div className='pay'>
        <label>UPI</label>
        <input type="radio" value={upi} onChange={upiHandle}/>
        <hr/>
       
        <label>Cash on delivery</label>
        <input type="radio" value={cod} onChange={codHandle}/>
        <hr/>
        <button onClick={ConfPayment} className="btn">Confirm Your Order</button>
      </div>
    </div>
  );
}

export default Paymemnt;
