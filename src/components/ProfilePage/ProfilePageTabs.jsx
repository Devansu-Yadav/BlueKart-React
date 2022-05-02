import "./ProfilePageTabs.css";
import { Link } from "react-router-dom";

const ProfilePageTabs = () => {
    return (
        <div className="tabs-no-icons-fixed tabs-fixed">
            <nav className="tabs centered-flex-row-container">
                <Link className="tab centered-flex-row-container" to="/account">
                    <span className="tab-txt">Profile</span>
                </Link>
                <Link className="tab centered-flex-row-container" to="/account/addresses">
                    <span className="tab-txt">Addresses</span>
                </Link>
            </nav>
        </div>
    );
}

export { ProfilePageTabs };
