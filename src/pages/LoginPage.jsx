import { useEffect } from "react";
import { useSidebar } from "common/context";
import { NavBar, Footer, SideBar, LoginForm } from "components";
import "styles/LoginPage.css";

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
