import { useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
    // Updating title on rendering Profile Page comp
    useEffect(() => {
        document.title = "BlueKart - Profile";
    }, []);

    return (
        <div>
            <NavBar linkActive="profile" />
            <Footer />
        </div>
    );
}

export { ProfilePage };
