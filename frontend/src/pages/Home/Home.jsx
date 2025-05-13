// src/pages/Home/Home.jsx
import React from 'react';
import Hero from "../../components/Hero/Hero.jsx";
import ServicesSection from "../../components/ServicesSection/ServicesSection.jsx";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection.jsx";
import CasesSection from "../../components/CasesSection/CasesSection.jsx";
import ProcessAnimationSection from "../../components/ProcessAnimationSection/ProcessAnimationSection.jsx";
import TeamSection from "../../components/TeamSection/TeamSection.jsx";


export default function Home() {

    return (
        <>
        <Hero/>
        <ServicesSection/>
        <AchievementsSection/>
            <CasesSection/>
            <ProcessAnimationSection/>
            <TeamSection/>
        </>

    );
}
