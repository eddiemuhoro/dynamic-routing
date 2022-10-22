import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, withRouter } from "react-router";

const SingleItem = () => {
    const params= useParams()

    const[items, setItems]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res = await axios(`http://localhost:5000/item/${params.id}`);
            console.log(res.data);
            setItems(res.data);
        }
            fetchData()
    }, [])
  return (
    <div>
        <h1>{items.title}</h1>
        <img src={items.image} alt={items.title} />

        Purchace your order
    </div>
  )
}

export default SingleItem