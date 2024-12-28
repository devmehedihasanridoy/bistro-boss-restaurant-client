import React from 'react';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/shared/navbar/Navbar';

const Home = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* carosel */}
            <Banner/>
        </div>
    );
};

export default Home;