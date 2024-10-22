import { useEffect, useState } from "react";

const Allpage= ({url, renderUser})=>{


const [update, setUpdate]  =  useState();
const [load, setLoad]  = useState("Loading ...")

    useEffect(()=>{
        fetch(url)
        .then(res=> {return res.json()})
        .then((data)=>
            
           
    setUpdate(data.users)
    )
    },[url])





    useEffect(() => {
       const fetchData = async()=>{
              try{
                  const res = await fetch(url);
                  if(!res){
                    throw new Error("Failed to fetch")
                  }
                 const data =  await res.json();
                 setUpdate(data.users);

              }
              catch(err){
                // console.log(err.message);
                setLoad(err.message)
              }
       };
       fetchData();
        
    
       
      }, [url]);



    return(


        <>
       
           {update? update.map(user=>(<div className=" mx-auto bg-green-400 w-40 flex items-center justify-center m-6 rounded" key={user.id}>{renderUser(user)}</div>)):(<div className=" bg-red-500 text-white flex justify-center rounded w-[200px] m-0 mx-auto">{load}</div>)}


           
            
        </>
    );

}

export default Allpage;