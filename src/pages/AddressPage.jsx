import { useEffect } from "react";
import { NavBar, SideBar, Footer, AddressPageContent } from "../components";
import { useSidebar } from "common/context";
import "../styles/AddressPage.css";

const AddressPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Address Page comp
    useEffect(() => {
        document.title = "BlueKart - Addresses";
    }, []);

    return (
        <div>
            <NavBar linkActive="profile" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <AddressPageContent />
            <SideBar />
            <Footer />
        </div>
    );
}

export { AddressPage };
