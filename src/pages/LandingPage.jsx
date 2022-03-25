import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { LandingPageContent } from "../components/LandingPage/LandingPageContent";
import "../styles/LandingPage.css";

const LandingPage = () => {
    // Updating title on rendering Landing Page comp
    useEffect(() => {
        document.title = "BlueKart - Home";
    }, []);

    return (
        <div>
            <NavBar linkActive="home"/>
            <LandingPageContent />
            <Footer />
        </div>
    );
}

export { LandingPage };