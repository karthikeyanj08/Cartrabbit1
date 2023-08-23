import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  import "../Style/Register.css"
import axios from 'axios'
 import {  Link, useNavigate } from 'react-router-dom';


function Register() {
  const [fullName,setfullname]= useState('')
  const [email, setemail] = useState('')
  const [password,setpassword]=useState('')
  const[confrimpass,setconfrimpass]=useState('')
  const[phone,setphone]=useState('')

   const navigate=useNavigate()

    



  const handleSubmit = async() => {


    const formdata={fullName:fullName,emailAddress:email,password:password,confirmPassword:confrimpass,phoneNumber:phone}
    console.log(formdata)
    try{
        const response=await axios.post("/register",formdata)
        console.log(response.data.msg)
        if(response.data.msg){
            alert("Registration successfully completed now Login to see profile")
            navigate('/login')

        }

    }
    catch(error){
console.log(error)
alert('please fillout all the fields and check passwords are same')
    }
  };

  return (
    
    <>


    <div id='forms'>
        <p>Welcome</p>
        <h3>Sign up</h3>
    <div id='form1'>
    <label for="Fullname" id='label1'>Fullname</label>
    
    <input type='text' placeholder='Enter your fullname' id='name'onChange={(e)=>{setfullname(e.target.value)}} name='fullName' value={fullName}/>

    <label for="Email" id='label2'>Email</label>
    <input type='text' placeholder='Enter your Email address' id='email' onChange={(e)=>{setemail(e.target.value)}} name='emailAddress' value={email}/><br></br>
    </div>

    <div id='form2'>

    <label for="password" id='label4'>password</label>
    <input type='password' placeholder='Enter your password' id='password' onChange={(e)=>{setpassword(e.target.value)}} name='password' value={password}/><br></br>
    </div>

    <div id='form3'>
    <label for="phone" id='label5'>Phone Number</label>
    <input type='tel' id='phone' onChange={(e)=>setphone(e.target.value)} name='phoneNumber' value={phone}/>
    <label for="confirm pasword" id='label6'>confirm password</label>
    <input type='password' id='confirmpass' onChange={(e)=>setconfrimpass(e.target.value)} name='confirmPassword' value={confrimpass}/><br></br>
    </div>

    <div id='form4'>

    </div>
    <div id='form5'>

</div>

    <br/>
    <button id='bt' onClick={handleSubmit}>Signup</button>
    <p id='al'>
        Already have an accoun? <Link to="/login">Login</Link>
    </p>
    </div>
 </>
    

  );
}
export default Register;
