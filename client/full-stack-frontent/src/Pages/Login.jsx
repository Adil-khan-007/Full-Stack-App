import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [form,setForm] = useState({
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
        axios.post("http://localhost:3004/auth/login",form)
        .then((res)=> { 
            localStorage.setItem("token",JSON.stringify(res.data.token));
            navigate("/dashboard");
        })
        .catch(err=>console.log(err))
    }

    return (
        <div style={{boxShadow:"0 0 10px black",padding:"10px 20px 20px 30px",width:"25%",margin:" 50px auto"}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your email' onChange={handleChange} name="email"/><br></br>
                <input type="text" placeholder='Enter your password' onChange={handleChange} name="password"/><br></br>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login;