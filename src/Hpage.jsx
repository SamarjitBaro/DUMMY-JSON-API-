// import { useEffect, useState } from "react";
import Allpage from "./reusable";

const Hpage= ({url})=>{





    return(


        <>
          
          <Allpage url={url} renderUser={(user) => <div>{user.firstName}&nbsp;&nbsp;{user.lastName}</div>} />
            
        </>
    );

}

export default Hpage;