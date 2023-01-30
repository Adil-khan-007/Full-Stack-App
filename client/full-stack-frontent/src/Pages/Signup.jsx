import React from 'react';
import { useState } from 'react';
import axios from "axios";
import {  useNavigate } from 'react-router-dom';

function Signup(props) {
    const [form,setForm] = useState({
        name : "",
        age : 0,
        email : "",
        password : "",
    })
    const navigate = useNavigate();

    const handleChange = (e)=>{
            setForm({
                ...form,
                [e.target.name] : e.target.value
            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
         axios.post("http://localhost:3004/auth/signup",form).then((res)=>{
            if(res.data.message === "Registration Succesfully"){
                navigate("/login");
            }
         })
         .catch(err=>console.log(err))
    }
    
    return (
        <div style={{boxShadow:"0 0 10px black",padding:"10px 20px 20px 30px",width:"25%",margin:" 50px auto"}}>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' onChange={handleChange} name="name"/><br></br>
                <input type="number" placeholder='Enter your age' onChange={handleChange} name="age"/><br></br>
                <input type="text" placeholder='Enter your email' onChange={handleChange} name="email"/><br></br>
                <input type="password" placeholder='Enter your password' onChange={handleChange} name="password"/><br></br>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signup;