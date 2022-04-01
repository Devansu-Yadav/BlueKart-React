import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faXmark, 
    faHouse, 
    faCartShopping, 
    faRightToBracket,
    faHeart 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSidebar } from "../../common/context/SidebarContext";
import { useAuth } from "../../common/context/AuthenticationContext";
import { LogoutBtn } from "../Logout/LogoutBtn";

const SideBar = () => {
    const { displaySideBar, setDisplaySideBar } = useSidebar();
    const { isUserAuthenticated } = useAuth();

    return (
        <aside className={`sidebar ${ displaySideBar ? "show": "" }`}>
            <nav className="sidebar-nav centered-flex-col-container">
                <div className="sidebar-heading centered-flex-row-container">
                    <h2 className="heading-2">Your Menu</h2>
                    <FontAwesomeIcon icon={faXmark} className="close-nav-menu" onClick={() => setDisplaySideBar(false)} />
                </div>
                <hr className="divide-nav-items" />

                <Link className="sidebar-item centered-flex-row-container space-S rounded-med" to="/">
                    <FontAwesomeIcon icon={faHouse} className="sidebar-icon link-active" />
                    <div className="sidebar-item-txt link-active">Home</div>
                </Link>

                <Link className="sidebar-item centered-flex-row-container space-S rounded-med" to="/productList">
                    <FontAwesomeIcon icon={faCartShopping} className="sidebar-icon" />
                    <div className="sidebar-item-txt">Shop Now</div>
                </Link>

                <LogoutBtn display={isUserAuthenticated ? true: false} />
                
                {!isUserAuthenticated && <Link className="sidebar-item sidebar-item-actions centered-flex-row-container space-S rounded-med" to="/login">
                    <FontAwesomeIcon icon={faRightToBracket} className="sidebar-icon" />
                    <div className="sidebar-item-txt">Login</div>
                </Link> }

                <Link className="sidebar-item sidebar-item-actions centered-flex-row-container space-S rounded-med" to="/wishList">
                    <FontAwesomeIcon icon={faHeart} className="sidebar-icon" />
                    <div className="sidebar-item-txt">WishList</div>
                </Link>

                <Link className="sidebar-item sidebar-item-actions centered-flex-row-container space-S rounded-med" to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} className="sidebar-icon" />
                    <div className="sidebar-item-txt">Cart</div>
                </Link>
            </nav>
        </aside>
    );
}

export { SideBar };