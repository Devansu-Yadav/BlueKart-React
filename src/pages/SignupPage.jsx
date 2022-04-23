import { useEffect } from "react";
import { useSidebar } from "common/context";
import { NavBar, Footer, SideBar, SignupForm } from "components";
import "styles/SignupPage.css";

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
