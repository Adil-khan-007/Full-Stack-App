import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black",alignItems:"center",height : "60px"}}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
        </div>
    );
}

export default Navbar;