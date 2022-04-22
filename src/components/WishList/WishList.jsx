import "./WishList.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "common/context";
import { WishListCard } from "../index";

const WishList = () => {
    const [showEmptyWishList, setShowEmptyWishList] = useState(false);
    const { userData } = useUserData();

    // Show Empty WishList if Items count is zero
    useEffect(() => {
        !userData.wishList.length ? setShowEmptyWishList(true): setShowEmptyWishList(false);
    }, [userData]);

    return (
        <main className="main-container">
            {/* WishList Container  */}
            <div className="wishList">
                <div className="wishList-heading centered-flex-row-container">
                    <h1 className="heading-1">
                        My WishList
                        <FontAwesomeIcon icon={faHeart} />
                    </h1>
                </div>

                {/* Empty WishList Div  */}
                { showEmptyWishList && <div className={`wishList-empty-container ${showEmptyWishList ? "show": ""} centered-flex-col-container`}>
                    <h3 className="wishList-empty-heading">Your WishList is Empty</h3>
                    <p className="wishList-empty-content">
                        Add items you like to your wishlist. Review them anytime and
                        easily move them to your cart.
                    </p>
                    <img className="wishList-empty-img" src="/assets/images/wishlist-empty.svg" alt="Add to WishList" />
                    <Link to="/productList"><button className="btn btn-outline-primary rounded-med">BUY NOW</button></Link>
                </div> }

                {/* WishList Cards  */}
                <div className={`wishList-cards ${showEmptyWishList ? "empty": ""} wishList-grid-3-column`}>
                    { userData.wishList.map(item => {
                        return (
                            <WishListCard productData={item} className="zoom" key={item._id} />
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export { WishList };