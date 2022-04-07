import React, {useContext} from 'react'
import { ItemContext} from './ItemContextProvider';
export default function Items(props) {
  const{data}=props
  const { post,setPost } = useContext(ItemContext);
  const handleChange=(e)=>{
        if(e.target.checked){
          setPost([...post,{name:data.name,id:data.id}])
        } else{
            setPost(post.filter((i)=>i.id!==data.id))
        }
    }
  return ( 
        <>
        
          <input type="checkbox" value={post} key={data.id} onChange={handleChange}/>
          <label key={data.name}>{data.name}</label>
          <br/>
       </>
       
    )

}