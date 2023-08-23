import React, { useState } from'react';
import '../Style/Login.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 function Login() {
const [mail,newmail]=useState("")
const [pass,newpass]=useState("")

const naviga=useNavigate()




const handleLogin=async()=>{

   const formdata={emailAddress:mail,password:pass}
    console.log(formdata)
    try{
        const response=await axios.post("/login",formdata)
        console.log(response.data.msg)
        if(response.data.msg){
            alert("Login successfull")
             naviga('/home')
            
        }
        else{
            alert('Login failed')
        }

    }
    catch(error){
console.log(error)
alert('Email or password doesnt match')
    }

}
 

    return(
        <>

       
         <div id='formy' >
        <p id='p'>Welcome</p>
        <h1 id='h1'>Login</h1>
        <label htmlFor="Email" id='labe1'>Email</label>
    <input type='text' placeholder='Enter your Email address' id='mail' onChange={(e)=>{newmail(e.target.value)}} /><br></br>

    <label htmlFor="password" id='labe2'>password</label>
    <input type='password' placeholder='Enter your password' id='pass' onChange={(e)=>{newpass(e.target.value)}} /><br></br>



        
  <button type="button" id="btn" onClick={handleLogin}>Login</button>
  <p id='p1'>
  Don't have an account? <Link to="/register">Create account</Link>
 </p>
  </div>

 
 </>

    )
    
}
export default Login;