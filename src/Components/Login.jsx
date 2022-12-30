import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style/Signup.css"

const Login = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false)
    let credData = JSON.parse(localStorage.getItem("AuthInfo"))


    const HandleFormSubmit = () => {
      if(credData.email===email && credData.password===password)
      {
           setAuth(true);
           localStorage.setItem("cred", auth);
           alert("Login Successfully");
           navigate("/gameList");
      }else{
         setAuth(false);
         alert("Please Fill Valid Information");
      }
      setEmail("");
      setPassword("");
 }

  return (
    <div  className='singupmain'>
      <h2>Login Page</h2>
      <form  onSubmit={HandleFormSubmit}>
            
                <label>Username : </label>
                <input type="email" value={email} placeholder='Enter your username' onChange={(e) => setEmail(e.target.value)}  />
                <br/>
                <label>Password : </label>
                <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  />
                <br/>
                <button type="submit">Login</button>
                <br/>
                <p>New user ? {<a href='./Signup'>Click here for Register</a>}</p>
           
        </form>
    </div>
  );
}

export default Login;
