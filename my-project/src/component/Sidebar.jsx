import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">My <span className='text-red-600'>Book</span> <br /> <span className="text-4xl">Shelf</span></h1>
            <br />
           
           <div className='grid gap-y-40'>
           <div className='grid grid-cols-1 gap-3'>

               <a className='text-[#8A8A8A]' href="">Home</a>
               <input className='w-[120px]' type="text" placeholder='search'/>
               <a className='text-[#8A8A8A]' href="">MySelf</a>
               <a className='text-[#8A8A8A]' href="">Favourite</a>


           </div>




           <div className='grid grid-cols-1 gap-3' >
                     <a href="">About</a>
                     <a href="">Support</a>
                     <a href="">Term & Condition</a>
           </div>


           </div>
            
        </div>
    );
};

export default Sidebar;