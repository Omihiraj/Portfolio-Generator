import { BrowserRouter, Route,Routes } from "react-router-dom"
import { ContextTheme } from "./themes/context_theme"
const App = ()=>{
  return(
    
      <BrowserRouter>
        <Routes>
          <Route path=":userId" element={<ContextTheme/>} /> 
        </Routes>
      </BrowserRouter>
        
   
  )
}
export default App