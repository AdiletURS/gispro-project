import React from 'react';
import HeroSection from '../../components/About/HeroSection';
import AboutCompany from '../../components/About/AboutCompany';
import MissionSection from '../../components/About/MissionSection';
import ServicesSection from '../../components/About/ServicesSection';
import ValuesSection from '../../components/About/ValuesSection';
import ContactSection from '../../components/About/ContactSection';
import ServicesTabs from "../../components/ServicesTabs/ServicesTabs.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const About = () => {
    return (
        <>
            <HeroSection />
            <AboutCompany />
            <MissionSection />
            <ServicesTabs />
            {/*<ValuesSection />*/}
            <Footer/>
        </>
    );
};

export default About;