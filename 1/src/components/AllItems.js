import React, { useEffect, useState, } from 'react'
import Items from './Items';
export default function AllItems() {
    const [items,setItems]=useState('')
    useEffect(()=>{
        fetch('./1.json')
        .then(response=>response.json())
        .then(res=>setItems(res))
    },[])
  return (
    <div className='container1'>
        <h3>All Items</h3>
        {items && items.length>0 && items.map((item,index)=> < Items key={index} data={item} />)}
    </div>
  )
}
