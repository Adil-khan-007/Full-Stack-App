import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

function Todo(props) {
    const [todo,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = ()=>{

        const token  = JSON.parse(localStorage.getItem("token"));

        axios.get("http://localhost:3004/todo",{
            headers : {
                "Content-Type" : "application/json",
                 "Authorization" : `Bearer ${token}` 
            }
        })
        .then((res)=>setData(res.data.data))
        .catch(err=>console.log(err));
    }

    return (
        <div style={{width : "30%",margin:"auto"}}>
            <h1>TODO</h1>
            <table border="1px" cellPadding="7px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((el,i)=>{
                            return <tr key={i}>
                                <td>{el.name}</td>
                                <td>{el.age}</td>
                                <td>{el.gender}</td>
                                <td>edit</td>
                                <td>delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todo;