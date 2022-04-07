import { useState ,createContext } from "react"
export const ItemContext = createContext({})
const ItemContextProvider=({children})=>{
   const [post,setPost] = useState([])
   return(
     <ItemContext.Provider value={{post,setPost}}>
         {children}
     </ItemContext.Provider>
    )
}
export default ItemContextProvider
