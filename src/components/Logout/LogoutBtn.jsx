import "./Logout.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useUserData } from "../../common/context/UserDataContext";
import { USER_LOGOUT } from "../../common/constants";
import { useAuth } from "../../common/context/AuthenticationContext";

const LogoutBtn = ({ display }) => {
    const { userDataDispatch, initialUserData } = useUserData();
    const { setIsUserAuthenticated, setUserAuthToken } = useAuth();
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
        localStorage.setItem("authToken", "");
        setIsUserAuthenticated(false);
        setUserAuthToken("");
        userDataDispatch({ type: USER_LOGOUT, payload: initialUserData });
    }

    return (
        display && <Link className={`nav-icon-item ${windowWidth <= 522 ? "sidebar-item centered-flex-row-container space-S rounded-med": "centered-flex-col-container" } logout-btn`} onClick={logoutBtnClickHandler} to="/login">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className={`${windowWidth <= 522 ? "sidebar-icon ": "nav-icon-margin" }`} />
            <p className={`${windowWidth <= 522 ? "sidebar-item-txt": ""}`}>Logout</p>
        </Link>
    );
}

export { LogoutBtn };