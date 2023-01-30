import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(props) {
    const [token,setToken] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        setToken(JSON.parse(localStorage.getItem("token")));
    })

    const handleLogout = ()=>{
        localStorage.clear();
        setToken("");
        navigate("/login")
    }

    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black",alignItems:"center",height : "60px"}}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/create">Create</Link>
            {token ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
            <Link to="/signup">SignUp</Link>
        </div>
    );
}

export default Navbar;