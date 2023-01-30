import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Todo from '../Pages/Todo';

function AllRoutes(props) {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/dashboard" element={<PrivateRoute><Todo/></PrivateRoute>} />
            </Routes>
    );
}

export default AllRoutes;