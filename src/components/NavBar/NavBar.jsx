import "./navbar.css";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCartShopping, 
    faArrowRightToBracket, 
    faHeart,
    faBars,
    faCircleUser,
    faUser,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SearchBar, LogoutBtn } from "../index";
import { useSidebar, useAuth, useUserData } from "common/context";

const NavBar = ({ linkActive }) => {
    const { setDisplaySideBar } = useSidebar();
    const { isUserAuthenticated } = useAuth();
    const { userData } = useUserData();
    const wishListItemsCount = userData.wishList.length;
    const cartItemsCount = userData.cart.length;
    const userMenuRef = useRef(null);

    return (
    <nav className="navbar flex-row-container shadow-md">
        <Link id="nav-logo" to="/">
            <p className="logo-txt">BlueKart</p>
            <FontAwesomeIcon icon={faCartShopping} />
        </Link>

        <div className="navigation page-nav centered-flex-row-container">
            <ul className="nav-items centered-flex-row-container">
                <li className={`${linkActive === "home" ? "link-active-hover": "" } space-S`}><Link className={linkActive === "home" ? "link-active": "" } to="/">Home</Link></li>
                <li className={`${linkActive === "productList" ? "link-active-hover": "" } space-S`}><Link className={linkActive === "productList" ? "link-active": "" } to="/productList">Shop Now</Link></li>
            </ul>

            <SearchBar className={{ position: "searchbar-nav" }}/>

            <div className="nav-icons centered-flex-row-container">
                <div className={`nav-submenu-item centered-flex-col-container ${linkActive === "profile" ? "link-active" : "" }`} 
                onClick={() => userMenuRef.current.classList.toggle("show-menu")} >
                    <div className="user-profile-avatar centered-flex-col-container">
                        <FontAwesomeIcon icon={faCircleUser} className="space-XS profile-icon" />
                    </div>
                    <p className={`${ linkActive === "profile" ? "link-active-hover" : "" }`}>User</p>

                    <div className="nav-dropdown-menu" ref={userMenuRef}>
                        { isUserAuthenticated && <Link className={`nav-icon-item flex-row-container ${ linkActive === "profile" ? "link-active": "" }`} to="/account">
                            <FontAwesomeIcon icon={faUser} className="nav-icon-margin"/>
                            <div className={`${ linkActive === "profile" ? "link-active-hover": "" }`}>Profile</div>
                        </Link>}

                        <LogoutBtn display={isUserAuthenticated ? true: false} />
                        
                        {!isUserAuthenticated && <Link className={`nav-icon-item flex-row-container ${ linkActive === "signup" ? "link-active": "" }`} to="/signup">
                            <FontAwesomeIcon icon={faUserPlus} className="nav-icon-margin"/>
                            <div className={`${ linkActive === "signup" ? "link-active-hover": "" }`}>Sign Up</div>
                        </Link> }

                        {!isUserAuthenticated && <Link className={`nav-icon-item flex-row-container ${ linkActive === "login" ? "link-active": "" }`} to="/login">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className="nav-icon-margin"/>
                            <div className={`${ linkActive === "login" ? "link-active-hover": "" }`}>Login</div>
                        </Link> }
                    </div>
                </div>

                <Link className={`nav-icon-item centered-flex-col-container ${linkActive === "wishList" ? "link-active" : "" }`} to="/wishList">
                    <div className="wishList-badge space-XS">
                        <FontAwesomeIcon icon={faHeart} className="nav-icon-margin"/>
                        <span className="badge-icon badge-number badge-right">{wishListItemsCount}</span>
                    </div>
                    <p className={`${ linkActive === "wishList" ? "link-active-hover" : "" }`}>WishList</p>
                </Link>

                <Link className={`nav-icon-item centered-flex-col-container ${linkActive === "cart" ? "link-active" : "" }`} to="/cart">
                    <div className="cart-badge space-XS">
                        <FontAwesomeIcon icon={faCartShopping} className="nav-icon-margin"/>
                        <span className="badge-icon badge-number badge-right">{cartItemsCount}</span>
                    </div>
                    <p className={`${linkActive === "cart" ? "link-active-hover" : ""}`}>Cart</p>
                </Link>
                <FontAwesomeIcon icon={faBars} className="nav-menu" onClick={() => setDisplaySideBar(true)}/>
            </div>
        </div>
    </nav>
    );
}

export { NavBar };