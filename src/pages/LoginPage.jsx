import { useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { SideBar } from "../components/SideBar/SideBar";
import { LoginForm } from "../components/Login/LoginForm";
import { useSidebar } from "../common/context/SidebarContext";
import "../styles/LoginPage.css";

const LoginPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Login Page comp
    useEffect(() => {
        document.title = "BlueKart - Login";
    }, []);

    return (
        <div>
            <NavBar linkActive="login" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <LoginForm />
            <Footer />
        </div>
    );
}

export { LoginPage };