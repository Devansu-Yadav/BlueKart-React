import { useEffect } from "react";
import { NavBar, Footer, LandingPageContent } from "components";
import "styles/LandingPage.css";

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