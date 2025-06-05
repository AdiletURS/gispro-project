// src/pages/Home/Home.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from "../../components/Hero/Hero.jsx";
import ServicesTabs from "../../components/ServicesTabs/ServicesTabs.jsx";
import CasesSection from "../../components/CasesSection/CasesSection.jsx";
import ProcessAnimationSection from "../../components/ProcessAnimationSection/ProcessAnimationSection.jsx";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import AboutCompany from "../../components/AboutCompany/AboutCompany.jsx";
import FloatingContact from "../../components/FloatingContact/FloatingContact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Очищаем состояние после скролла
                    window.history.replaceState({}, document.title);
                }, 100);
            }
        }
    }, [location.state]);

    return (
        <>
            <Hero />

            {/* Services Section */}
            <section id="services">
                <ServicesTabs />
            </section>

            {/* Cases / Projects Section */}
            <section id="projects">
                <CasesSection />
            </section>

            {/* Process Animation Section */}
            <section id="process">
                <ProcessAnimationSection />
            </section>

            {/* Achievements Section */}
            <section id="achievements">
                <AchievementsSection />
            </section>

            {/* Why Choose Us Section */}
            <section id="why-choose-us">
                <WhyChooseUs />
            </section>

            {/* About Company Section */}
            <section id="about-company">
                <AboutCompany />
            </section>

            {/* Contacts Section - скролл к футеру */}
            <section id="contacts">
                <Footer />
            </section>

            <FloatingContact />
        </>
    );
}
