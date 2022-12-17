import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { createContext } from "react"
import { MainTheme } from "./main_theme"

export const ThemeContext = createContext()

export const ContextTheme = ()=>{
    const [item, setItem] = useState([]);
    const params = useParams()
    const id = params.userId
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then((result)=>{
            setItem(result)
        })
    },[])
   return(
    <ThemeContext.Provider value={item}>
        <MainTheme/>
    </ThemeContext.Provider>
   )
  

}