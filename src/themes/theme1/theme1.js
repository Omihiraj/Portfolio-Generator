import { useContext } from "react"
import { ThemeContext } from "../context_theme"
export const Theme1 = ()=>{
    const item = useContext(ThemeContext)
    return (
        <>
            <p>Theme Name : Theme 1</p>
            <p>Description : {item.title}</p>
            <p>Body : {item.body}</p>
        </>
    )
}

