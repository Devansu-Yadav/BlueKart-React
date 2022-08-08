import { useEffect } from "react";
import { NavBar, SideBar, Footer, ProfilePageContent } from "components";
import { useSidebar } from "common/context";
import "styles/ProfilePage.css";

const ProfilePage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Profile Page comp
    useEffect(() => {
        document.title = "BlueKart - Profile";
    }, []);

    return (
        <div>
            <NavBar linkActive="profile" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <ProfilePageContent />
            <SideBar />
            <Footer />
        </div>
    );
}

export { ProfilePage };
