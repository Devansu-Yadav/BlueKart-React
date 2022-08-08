import "./Logout.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useLogoutHandler } from "common/helpers";

const LogoutBtn = ({ display }) => {
    const { logoutHandler } = useLogoutHandler();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handling Logout btn on Mobile devices
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [windowWidth]);

    // Initializing User Data and Auth token when logging out
    const logoutBtnClickHandler = () => {
        logoutHandler();
    }

    return (
        display && <Link className={`nav-icon-item ${windowWidth <= 522 ? "sidebar-item centered-flex-row-container space-S rounded-med": "hide-logout-btn" } logout-btn`} onClick={logoutBtnClickHandler} to="/login">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className={`${windowWidth <= 522 ? "sidebar-icon ": "nav-icon-margin" }`} />
            <div className={`${windowWidth <= 522 ? "sidebar-item-txt": ""}`}>Logout</div>
        </Link>
    );
}

export { LogoutBtn };