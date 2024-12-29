import React from 'react';

const MenuCard = ({menu , item}) => {
    const {image , name , price , recipe} = menu || item || {}
    return (
        <div className='flex justify-between items-center gap-6'>
        <div > <img className='w-[160px]' style={{borderRadius:'10px 300px 300px 300px'}} src={image} alt="" /></div>
        <div><h2 className='text-[#151515] text-xl font-normal capitalize mb-2'>{name}--------------</h2><p className='text-[#737373] text-base font-normal'>{recipe}</p></div>
        <div><span className='text-[#BB8506] text-xl font-medium'>${price}</span></div>
    </div>
    );
};

export default MenuCard;