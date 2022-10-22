import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllItems = () => {
    const [items , setItems]= useState([])
    useEffect(()=>{
        async function fetchData(){
            const res= await axios('http://localhost:5000/item', {mode:'cors'});
            setItems(res.data);
        }
        fetchData();
    }, []);
  return (
    <div>
        <h1>All Items</h1>
        <div style={{
            display:'flex',
            overflowX:'scroll',
        }}>
        {items.map(item =>{
            return(
                <div style={{
                    border: '2px solid #000',
                    margin: '10px',
                    padding: '10px',
                    width:'100vw',
                    borderRadius: '20px',
                    height:'80vh',
                    position:'relative',
                    textDecoration:'none',
                    
                }} key={item.id}>
                <Link to={`/item/`+ item.id} >
                   
                        <h1>{item.name}</h1>
                        <img style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',

                        }} src={item.image} alt={item.name} />
                        <p>{item.description}</p>
                </Link>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default AllItems