import React from 'react';
import Hero from "./Hero/Hero";
import Contacts from "./Contacts/Contacts";
import AboutUs from "./AboutUs/AboutUs";
import BestSellers from "./BestSellers/BestSellers";
import MeinMenu from "./MeinMenu/MeinMenu";
import ModernInterior from "./ModernInterior/ModernInterior";

const Home = () => {
    return (
        <div>
            <Hero/>
            <AboutUs/>
            <BestSellers/>
            <MeinMenu/>
            <ModernInterior/>
            <Contacts/>
        </div>
    );
};

export default Home;