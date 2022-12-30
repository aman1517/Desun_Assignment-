import React,{useState} from 'react';
import "../Style/Checkout.css"
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  let navigate=useNavigate()
  const [name,setName]=useState("")
  const [phone, setPhone]=useState("")
  const [strdate,setstrDate]=useState([])
  const [enddate,setEndDate]=useState([])
  const [add,setAdd]=useState("")

    let x=localStorage.getItem("title")
  
  const startDate=(e)=>{
    let datee=(e.target.value)
   setstrDate(datee)
  }
  const endDate=(e)=>{
    let datee=(e.target.value)
   setEndDate(datee)
  }
  const addHandle=(e)=>{
  console.log(e.target.value)
  setAdd(e.target.value)
  }
  let allData=[]
  const submitHandler=(e)=>{
   e.preventDefault()
   console.log("helo")
   let obj={
    title:x,
    name:name,
    phone:phone,
    strdate:strdate,
    enddate:enddate,
    add:add
   }
   allData.push(obj)
   localStorage.setItem("allData",JSON.stringify(allData))
   
   navigate("/adddetails")
  }
 
  return (
    <div >
      <h2>Checkout Page</h2>
      <div className='formmainDiv'>
      <h3>you are goinng to book {x} game .Please fill the some informations </h3>
      
      <form onSubmit={submitHandler}>
        <label>Enter Name:</label>
        <input type="text" palceholder="please enter your name " onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Phone No:</label>
        <input type="number" placeholer="Enter your phone number" onChange={(e)=>setPhone(e.target.value)}></input><br/>
        <label>Starting Date:</label>
        <input type="datetime-local" onChange={startDate}></input><br/>
        <label>Ending Date:</label>
        <input type="datetime-local" onChange={endDate}></input><br/>
        <label>Location</label>
        <select value={add} onChange={addHandle}>
          <option valu="">Address</option>
          <option value="Baghajatin, Kolkata, WB-15">Baghajatin, Kolkata, WB</option>
          <option value="Garia, Kolkata, WB-25">Garia, Kolkata, WB</option>
          <option value="Sealdaha, Kolkata, WB-35">Sealdaha, Kolkata, WB</option>
          <option value="Jadavpur, Kolkata, WB-14">Jadavpur, Kolkata, WB</option>
        </select><br/>
      <input type="submit" className='subbtn'/>
        
      </form>
      </div>
     
    </div>
  );
}

export default Checkout;
