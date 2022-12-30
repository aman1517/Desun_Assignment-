import React from 'react';
import "../Style/Checkout.css"

const Checkout = () => {
  let x=localStorage.getItem("title")
  const submitHandler=()=>{

  }
  console.log(x)
  return (
    <div >
      <h2>Checkout Page</h2>
      <div className='formmainDiv'>
      <h3>you are goinng to book {x} game .Please fill the some informations </h3>
      
      <form onSubmit={submitHandler}>
        <label>Enter Name:</label>
        <input type="text" palceholder="please enter your name "/><br/>
        <label>Phone No:</label>
        <input type="number" placeholer="Enter your phone number"></input><br/>
        <label>Starting Date:</label>
        <input type="datetime-local"></input><br/>
        <label>Ending Date:</label>
        <input type="datetime-local"></input><br/>
        <label>Location</label>
        <select>
          <option>Address</option>
          <option>Baghajatin, Kolkata, WB</option>
          <option>Garia, Kolkata, WB</option>
          <option>Sealdaha, Kolkata, WB</option>
          <option>Jadavpur, Kolkata, WB</option>
        </select><br/>
      <input type="submit" className='subbtn'/>
        
      </form>
      </div>
    </div>
  );
}

export default Checkout;
