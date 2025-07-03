import React from 'react'
import BottomHeader from '../components/Header/BottomHeader';
import Layout from '../components/common/Layout'
import BestSeller from '../components/Home/BestSeller';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';

const Home = () => {
    return (
        <Layout>
            <BottomHeader />
            <HeroSection />
            <PopularProducts />
            <BestSeller />
        </Layout>
    );
}

export default Home;