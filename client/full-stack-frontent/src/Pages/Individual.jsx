import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Individual(props) {
    const [data,setData] = useState({});
    const {id} = useParams();

    useEffect(()=>{
          fetchSingleData();
    },[])

    const fetchSingleData = ()=>{
        const token = JSON.parse(localStorage.getItem("token"));

        axios.get(`https://lime-tough-nightingale.cyclic.app/todo/single/${id}`,{
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((res)=>{
            setData(res.data.data);
        })
        .catch((err)=>console.log(err));
    }


    return (
        <div>
            <h1 style={{color : "darkgrey"}}>Single Todo Page</h1>
                    <div>
                        <h3>Name : <span>{data.name}</span></h3>
                        <p>Age : {data.age}</p>
                        <img src = {data.image} alt = {data.name}/>
                        <p>Gender : {data.gender}</p>
                        <p>Hobby : {data.hobby}</p>
                    </div>
        </div>
    );
}

export default Individual;