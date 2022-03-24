import "./WishList.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { WishListCard } from "../Card/WishListCard";

const WishList = () => {
    const [showEmptyCart, setShowEmptyCart] = useState(false);
    const [wishListItemsCount, setWishListItemsCount] = useState(0);

    // Initialize WishList Items Count
    useEffect(() => {
        const initialWishListItemsCount = document.querySelectorAll(".wishList-cards .card").length;
        setWishListItemsCount(initialWishListItemsCount);
    }, []);

    // Show Empty WishList if Items count is zero
    useEffect(() => {
        !wishListItemsCount ? setShowEmptyCart(true): setShowEmptyCart(false);
    }, [wishListItemsCount]);

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
                {showEmptyCart && <div className={`wishList-empty-container ${showEmptyCart ? "show": ""} centered-flex-col-container`}>
                    <h3 className="wishList-empty-heading">Your WishList is Empty</h3>
                    <p className="wishList-empty-content">
                        Add items you like to your wishlist. Review them anytime and
                        easily move them to your cart.
                    </p>
                    <img className="wishList-empty-img" src="/assets/images/wishlist-empty.svg" alt="Add to WishList" />
                    <button className="btn btn-outline-primary rounded-med">BUY NOW</button>
                </div> }

                {/* WishList Cards  */}
                <div className={`wishList-cards ${showEmptyCart ? "empty": ""} wishList-grid-3-column`}>
                    <WishListCard productData={{
                        image: "https://bluekart.netlify.app/assets/images/products/smartphone.jpg",
                        productName: "Samsung Galaxy M32",
                        price: "₹30,999",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom" wishListItemsCountHandler={setWishListItemsCount}/>

                    <WishListCard productData={{
                        image: "https://bluekart.netlify.app/assets/images/products/laptop.jpg",
                        productName: "Surface Pro 8",
                        price: "₹1,00,000",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom" wishListItemsCountHandler={setWishListItemsCount}/>

                    <WishListCard productData={{
                        image: "https://bluekart.netlify.app/assets/images/products/fashion-men.jpg",
                        productName: "Mens Sherwani",
                        price: "₹9,999",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom" wishListItemsCountHandler={setWishListItemsCount}/>

                    <WishListCard productData={{
                        image: "https://bluekart.netlify.app/assets/images/products/fashion-3.jpg",
                        productName: "Men's jacket",
                        price: "₹1,599",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom" wishListItemsCountHandler={setWishListItemsCount}/>

                    <WishListCard productData={{
                        image: "https://bluekart.netlify.app/assets/images/products/Sports-1.jpg",
                        productName: "Nike Sports Shoes",
                        price: "₹5,099",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom" wishListItemsCountHandler={setWishListItemsCount}/>

                    <WishListCard productData={{
                        image: "https://bluekart.netlify.app/assets/images/products/accessories-1.jpg",
                        productName: "Boat Headphones",
                        price: "₹3,299",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom" wishListItemsCountHandler={setWishListItemsCount}/>
                </div>
            </div>
        </main>
    );
}

export { WishList };