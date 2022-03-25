import "./CartList.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartListCard } from "../Card/CartListCard";
import { CartBill } from "./CartBill";

const CartList = () => {
    const [showEmptyCart, setShowEmptyCart] = useState(false);
    const [cartListItemsCount, setCartListItemsCount] = useState(0);

    // Initialize CartList Items Count
    useEffect(() => {
        const initialCartListItemsCount = document.querySelectorAll(".cart-cards .card").length;
        setCartListItemsCount(initialCartListItemsCount);
    }, []);

    // Show Empty CartList if items count is zero
    useEffect(() => {
        !cartListItemsCount ? setShowEmptyCart(true): setShowEmptyCart(false);
    }, [cartListItemsCount]);

    // User Cart Data will be fetched from the API.
    const cartItems = [
        {
            _id: 2,
            productName: "Samsung Galaxy M32",
            brand: "Samsung",
            image: "https://bluekart.netlify.app/assets/images/products/smartphone.jpg",
            price: 30999,
            categoryName: "Electronics",
            rating: "4.5",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
        },
        {
            _id: 1,
            productName: "Surface Pro 8",
            brand: "Microsoft",
            image: "https://bluekart.netlify.app/assets/images/products/laptop.jpg",
            price: 100000,
            categoryName: "Electronics",
            rating: "4.8",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
        },
        {
            _id: 6,
            productName: "Boat Wireless Headphones",
            brand: "Boat",
            image: "https://bluekart.netlify.app/assets/images/products/accessories-1.jpg",
            price: 3299,
            categoryName: "Accessories",
            rating: "4.8",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
        },
        {
            _id: 9,
            productName: "Nike Sports Shoes",
            brand: "Nike",
            image: "https://bluekart.netlify.app/assets/images/products/Sports-1.jpg",
            price: 5099,
            categoryName: "Sports",
            rating: "4.0",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
        }
    ];

    return (
        <main className="main-container">
            {/* Cart Container  */}
            <div className="cart-container">
                <div className="cart-container-heading centered-flex-row-container">
                    <h1 className="heading-1">
                        My Cart ({cartListItemsCount})
                    </h1>
                </div>

                {/* Empty Cart Div  */}
                {showEmptyCart && <div className={`cart-empty-container ${showEmptyCart ? "show": ""} centered-flex-col-container`}>
                    <h3 className="cart-empty-heading">Your Cart is Empty :(</h3>
                    <p className="cart-empty-content">
                        Looking for something Blue, but couldn't find it? <br /> Check out some
                        <Link className="cart-empty-redirect-link" to="/productList"> fresh new products</Link> or add some items from your wishlist!
                    </p>
                    <img className="cart-empty-img" src="/assets/images/empty-cart.svg" alt="Add to Cart" />
                    <button className="btn btn-outline-primary rounded-med">Add Items From WishList</button>
                </div> }

                {/* Cart Cards  */}
                <div className="cart">
                     <div className={`cart-cards ${showEmptyCart ? "empty": ""} cart-grid-2-column`}>
                        { cartItems.map(item => 
                            <CartListCard productData={{
                                image: item.image,
                                productName: item.productName,
                                price: item.price
                            }} cartListItemsCountHandler={setCartListItemsCount}/>
                        )}
                    </div>

                    {/* Cart Bill container  */}
                    {!showEmptyCart && <CartBill cartItemsData={cartItems} cartListItemsCount={cartListItemsCount}/> }
                </div>
            </div>
        </main>
    );
}

export { CartList };