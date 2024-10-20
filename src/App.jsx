import './App.css';
import { useState } from 'react';

function App() {
 const [move, setmove] = useState()



  const moveMouse = (e) => {
    setTimeout(()=>{
      console.log(e);
   setmove({left: e.clientX , top:e.clientY})
    },50)
  };



  return (
    <>
      <div className='w-full h-[100vh] ' onMouseMove={moveMouse}>
         <div className='w-8 h-8 rounded-full bg-green-700 absolute' style={move}  ></div>
         <div className='w-12 mt-8 h-12 rounded-full bg-blue-700 absolute' style={move}  ></div>
         <div className='w-4 mb-8 mr-5 h-4 rounded-full bg-yellow-700 absolute' style={move}  ></div>
         
          </div>
    </>
  );
}

export default App;
