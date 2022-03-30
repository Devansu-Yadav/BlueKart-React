import "./Logout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutBtn = ({ display, onClick }) => {
    return (
        display && <button className="btn-icon btn-icon-primary logout-btn rounded-med space-M" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Logout
        </button>
    );
}

export { LogoutBtn };