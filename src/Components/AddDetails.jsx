import React from 'react';
import "../Style/Add.css"
import { useNavigate } from 'react-router-dom';

const AddDetails = () => {
  const navigate=useNavigate()
  let allData =JSON.parse(localStorage.getItem("allData"))
  let startDate=allData[0].strdate.split("T")
  let endDate=allData[0].enddate.split("T")
  let add=allData[0].add.split("-")
  let cost=+add[1]
  if(cost<=30){
   var  totalCsot=1500
  }
  else{
    let val=cost-30;
    totalCsot=1500+val*50
  }
 const paymentHamdle=()=>{
  console.log("heelo")
       navigate("/payment")
 }

  return (
    <div className='add'>
    <div>
      <span>Your name:</span>
      <span>{allData[0].name}</span>
    </div>
    <hr/>
    <div>
      <span>Your Phone No:</span>
      <span>{allData[0].phone}</span>
    </div>
    <hr/>
      <div>
        <span>Gamename:</span>
        <span>{allData[0].title}</span>
      </div>
      <hr/>
      <div>
        <span>startDate & Time:</span>
        <span>{`${startDate[0]}-${startDate[1]}`}</span>
      </div>
      <hr/>
      <div>
        <span>EndDate & Time:</span>
        <span>{`${endDate[0]}-${endDate[1]}`}</span>
      </div>
      <hr/>
      <div>
        <span>Your Location</span>
        <span>{add[0]}</span>
      </div>
      <hr/>
      <div>
        <span>Distance:</span>
        <span>{`${add[1]} KM`}</span>
      </div>
      <hr/>
      <div>
        <span>Total Cost:</span>
        <span>{`${totalCsot} INR`}</span>
      </div>
      <button className='btn' onClick={paymentHamdle}>Proceed To payment</button>
    </div>
  );
}

export default AddDetails;
