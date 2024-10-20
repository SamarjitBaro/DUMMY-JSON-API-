import { useState } from 'react';
import 'boxicons'

import './App.css'

function App() {
 const [passwordtype, setPassword] = useState("password")


 const hide =()=>{
  setPassword(passwordtype === "password"? "text":"password")


 }
  return (
    <>
       <div className='flex items-center justify-center mt-20'>
          <input className='border border-gray-400 ' type={passwordtype} placeholder="Enter password" />
          <box-icon onClick={(hide)} name="hide"></box-icon>
          
         
       </div>
        
    </>
  )
}

export default App
