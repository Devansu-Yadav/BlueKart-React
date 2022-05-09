import { useEffect } from "react";
import { useSidebar } from "common/context";
import { NavBar, Footer, SideBar, PasswordResetForm } from "components";
import "styles/ForgetPasswordPage.css";

const ForgetPasswordPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Signup Page comp
    useEffect(() => {
        document.title = "BlueKart - Forget Password";
    }, []);

    return (
        <div>
            <NavBar />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <PasswordResetForm />
            <Footer />
        </div>
    );
};

export { ForgetPasswordPage };
