import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { SideBar } from "../components/SideBar/SideBar";
import { useSidebar } from "../common/context/SidebarContext";
import "../styles/NotFound404Page.css";

const NotFound404Page = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering 404 Page comp
    useEffect(() => {
        document.title = "BlueKart - 404 Not Found";
    }, []);

    return (
        <div>
            <NavBar linkActive="login" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <div className={`page-not-found-container centered-flex-col-container`}>
                <h3 className="page-not-found-heading">404 Page Not Found :(</h3>
                <img className="page-not-found-img" src="/assets/images/page-not-found.svg" alt="404 Page Not Found" />
                <Link to="/"><button className="btn btn-outline-primary rounded-med">{"<- Back To Home Page"}</button></Link>
            </div>
            <Footer />
        </div>
    );
}

export { NotFound404Page };