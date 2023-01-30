import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import Create from '../Pages/Create';
import Edit from '../Pages/Edit';
import Home from '../Pages/Home';
import Individual from '../Pages/Individual';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Todo from '../Pages/Todo';

function AllRoutes(props) {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/dashboard" element={<Todo/>} />
                <Route path="/single/:id" element={<PrivateRoute><Individual/></PrivateRoute>} />
                <Route path="/edit/:id" element={<PrivateRoute><Edit/></PrivateRoute>} />
                <Route path="/create" element={<PrivateRoute><Create/></PrivateRoute>} />
            </Routes>
    );
}

export default AllRoutes;