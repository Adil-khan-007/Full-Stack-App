import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {useNavigate,useParams} from "react-router-dom";

function Edit(props) {
    const [edit,setEdit] = useState({
        name : "",
        age : "",
        gender : "",
        image : "",
        hobby : ""
    })
    const {id} = useParams();
    const navigate = useNavigate();

    const handleChange = (e)=>{
            setEdit({
                ...edit,
            [e.target.name] : e.target.value
         })
    }

    const handleEdit = ()=>{
        const token = JSON.parse(localStorage.getItem("token"));

        axios.patch(`http://localhost:3004/todo/edit/${id}`,edit,{
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((res)=>{
            alert("Succesfully Edited")
            navigate("/dashboard")
        })
        .catch(err=>console.log(err));
    }

    return (
        <div style={{boxShadow:"0 0 10px black",padding:"10px 20px 30px 30px",width:"25%",margin:" 50px auto"}}>
            <h1>Edit Todo</h1>
            <input type="text" placeholder='Enter your name' onChange={handleChange} name="name"/><br></br><br></br>
            <input type="number" placeholder='Enter your age' onChange={handleChange} name="age"/><br></br><br></br>
            <input type="text" placeholder='Enter your gender' onChange={handleChange} name="gender"/><br></br><br></br>
            <input type="text" placeholder='Enter your image URL' onChange={handleChange} name="image"/><br></br><br></br>
            <input type="text" placeholder='Enter your hobby' onChange={handleChange} name="hobby"/><br></br><br></br>
            <button onClick={handleEdit} style={{width:"170px",backgroundColor : "darkgolden",border : "none",height:"30px",letterSpacing:"2px"}}>Edit</button>
        </div>
    );
}

export default Edit;