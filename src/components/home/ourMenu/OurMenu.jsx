import React, { useEffect, useState } from 'react';
import Heading from '../../shared/heading/Heading';

const OurMenu = () => {
    // 
    const [menuData, setMenuData] = useState([]);
    // 
    useEffect(()=>{
      fetch('/manu.json')
      .then(res=> res.json())
      .then(data => setMenuData(data) )
    },[])

    // 
    return (
        <div>
            {/* heading */}
            <Heading title={'FROM OUR MENU'} subTitle={'---Check it out---'}/>
            {/*cards  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                menuData.slice(0,6).map(menu=>(
                    <div key={menu._id} className='flex justify-between items-center gap-6'>
                    <div > <img className='w-[160px]' style={{borderRadius:'10px 300px 300px 300px'}} src={menu?.image} alt="" /></div>
                    <div><h2 className='text-[#151515] text-xl font-normal capitalize mb-2'>{menu?.name}--------------</h2><p className='text-[#737373] text-base font-normal'>{menu?.recipe}</p></div>
                    <div><span className='text-[#BB8506] text-xl font-medium'>${menu?.price}</span></div>
                </div>
                ))
            }  
            </div>

            <div className='text-center mt-8 '>
                <button className='hover:bg-slate-400 text-xl font-semibold capitalize border-b-2 rounded-xl px-6 py-3'>View full menu</button>
            </div>
        </div>
    );
};

export default OurMenu;