import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Create(props) {
    const [create,setCreate] = useState({
        name : "",
        age : "",
        gender : "",
        image : "",
        hobby : ""
    })
    const navigate = useNavigate();

    const handleChange = (e)=>{
            setCreate({
                ...create,
            [e.target.name] : e.target.value
         })
    }

    const handleCreate = ()=>{
        const token = JSON.parse(localStorage.getItem("token"));

        axios.post(`https://lime-tough-nightingale.cyclic.app/todo/create`,create,{
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((res)=>{
            alert("Succesfully Created")
            navigate("/dashboard")
        })
        .catch(err=>console.log(err));
    }

    return (
        <div style={{boxShadow:"0 0 10px black",padding:"10px 20px 30px 30px",width:"25%",margin:" 50px auto"}}>
            <h1>Create Todo</h1>
            <input type="text" placeholder='Enter your name' onChange={handleChange} name="name"/><br></br><br></br>
            <input type="number" placeholder='Enter your age' onChange={handleChange} name="age"/><br></br><br></br>
            <input type="text" placeholder='Enter your gender' onChange={handleChange} name="gender"/><br></br><br></br>
            <input type="text" placeholder='Enter your image URL' onChange={handleChange} name="image"/><br></br><br></br>
            <input type="text" placeholder='Enter your hobby' onChange={handleChange} name="hobby"/><br></br><br></br>
            <button onClick={handleCreate} style={{width:"170px",backgroundColor : "darkgold",border : "none",height:"30px",letterSpacing:"2px"}}>Create</button>
        </div>
    );
}

export default Create;