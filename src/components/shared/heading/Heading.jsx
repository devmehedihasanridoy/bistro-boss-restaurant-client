import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className='text-center mb-12'>
             <p className='text-[#D99904] text-xl font-normal mb-4'>{subTitle}</p>
             <h1 className='px-10 border-t-4 border-b-4 border-[#E8E8E8] text-[#151515] text-4xl py-4 inline-block'>{title}</h1>
        </div>
    );
};

export default Heading;