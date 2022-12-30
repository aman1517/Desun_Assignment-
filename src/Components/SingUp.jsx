import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style/Signup.css"

const SingUp = () => {
  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleFormSubmit = (e) => {
    let creddtels = {};
     e.preventDefault();
     if(!email || !password || !name){
       alert("please fill all credential")
     }
     else{
       creddtels = {
          name:name,
           email : email,
           password : password
       }
         localStorage.setItem("AuthInfo", JSON.stringify(creddtels))
         alert("You have signed-up successfully")
         navigate("/login");
     }
     setName("")
     setEmail("");
     setPassword("");
 }
  return (
    <div className='singupmain'>
    <form  onSubmit={HandleFormSubmit}>
        <h1>Sign-up Form</h1>
        <label>Name : </label>
             <input type="text" value={name} placeholder='Enter your Name' onChange={(e) => setName(e.target.value)}  /> <br/>
            <label>Email id : </label>
            <input type="email" value={email} placeholder='Enter your username' onChange={(e) => setEmail(e.target.value)}  />
            <br/>
            <label>Password : </label>
            <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  />
            <br/>
            <button type="submit">Register</button>
            <br/>
            <p>Already Registered : {<a href='./Login'>Login here</a>}</p>
    </form>
</div>
  );
}

export default SingUp;
