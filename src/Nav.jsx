// import { useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    // const [state, setstate] = useState(initialValue);
    
    return (
            <div>
                <div className=' w-full h-10'>
                    <div className="flex flex-wrap max-w-[500px] m-0 mx-auto justify-between bg-blue-500 ">
                <div className='text-white ' ><Link to="/Home">Name</Link></div>
                <div className='text-white '><Link to="/About">City</Link></div>
                <div className='text-white '><Link to="/Cont">Contact</Link></div>
                <div className='text-white '><Link to="/Uni">University</Link></div>
            </div>
                </div>
            </div>
    );
};
export default Nav;