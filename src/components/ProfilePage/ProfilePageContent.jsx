import "./ProfilePageContent.css";
import { ProfilePageTabs } from "./ProfilePageTabs";
import { Link } from "react-router-dom";
import { useAuth, useUserData } from "common/context";
import { useLogoutHandler } from "common/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const ProfilePageContent = () => {
    const { isUserAuthenticated } = useAuth();
    const { userData } = useUserData();
    const { logoutHandler } = useLogoutHandler();

    return (
        <div>
            <div className="profile-page-content-container centered-flex-col-container">
                <ProfilePageTabs />
                <div className="profile-details-container centered-flex-row-container space-L">
                    <div className="profile-details flex-col-container">
                        <h2 className="account-details-heading">Account Details</h2>
                        <div className="account-name flex-row-container">
                            <span>Name</span>
                            <span>{ userData.firstName } { userData.lastName }</span>
                        </div>
                        <div className="account-email flex-row-container">
                            <span>Email</span>
                            <span>{ userData.email }</span>
                        </div>
                        { isUserAuthenticated && <Link onClick={logoutHandler} to="/login">
                            <button className="profile-logout-btn btn-icon btn-error rounded-med">
                                <FontAwesomeIcon icon={faArrowRightToBracket} />
                                Logout
                            </button>
                        </Link> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ProfilePageContent };
