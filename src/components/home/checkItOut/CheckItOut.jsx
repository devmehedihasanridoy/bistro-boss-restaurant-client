import React from 'react';
import heroImg from "../../../assets/home/featured.jpg"
const CheckItOut = () => {
    return (
        <div className=' flex flex-wrap sm:flex-nowrap justify-center items-center gap-12 w-11/12 mx-auto'>
             <div className='w-full sm:w-1/2 mx-auto'>  <img className='w-full mx-auto' src={heroImg} alt="" /></div>
            <div className='w-full text-white text-xl font-medium space-y-3 sm:w-1/2 mx-auto'>
                <p>March 20, 2023</p>
                 <h2>WHERE CAN I GET SOME?</h2>
                 <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                 <button className='hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3'>read more</button>
            </div>
        </div>
    );
};

export default CheckItOut;