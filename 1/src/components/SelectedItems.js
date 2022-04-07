import React, { useContext } from 'react'
import { ItemContext } from './ItemContextProvider'
export default function SelectedItems() {
 const{post}=useContext(ItemContext)
  return (
       <div className='container2'>
          <h3>Selected Items</h3> 
          {post.map((i,index)=><p key={index}>{i.name}</p>)}
        </div>  
    )
}
