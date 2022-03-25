import { useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { SideBar } from "../components/SideBar/SideBar";
import { SignupForm } from "../components/Signup/SignupForm";
import { useSidebar } from "../common/context/SidebarContext";
import "../styles/SignupPage.css";

const SignUpPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Signup Page comp
    useEffect(() => {
        document.title = "BlueKart - Signup";
    }, []);

    return (
        <div>
            <NavBar linkActive="signup" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <SignupForm />
            <Footer />
        </div>
    );
}

export { SignUpPage };