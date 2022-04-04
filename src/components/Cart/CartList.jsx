import "./CartList.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartListCard } from "../Card/CartListCard";
import { CartBill } from "./CartBill";
import { useUserData } from "../../common/context/UserDataContext";
import { calculateTotalCartItems } from "../../common/helpers/CartService";

const CartList = () => {
    const [showEmptyCart, setShowEmptyCart] = useState(false);
    const { userData } = useUserData();
    const cartItemsCount = userData.cart.length;

    // Show Empty CartList if items count is zero
    useEffect(() => {
        !cartItemsCount ? setShowEmptyCart(true): setShowEmptyCart(false);
    }, [cartItemsCount]);

    return (
        <main className="main-container">
            {/* Cart Container  */}
            <div className="cart-container">
                <div className="cart-container-heading centered-flex-row-container">
                    <h1 className="heading-1">
                        My Cart ({ cartItemsCount })
                    </h1>
                </div>

                {/* Empty Cart Div  */}
                { showEmptyCart && <div className={`cart-empty-container ${showEmptyCart ? "show": ""} centered-flex-col-container`}>
                    <h3 className="cart-empty-heading">Your Cart is Empty :(</h3>
                    <p className="cart-empty-content">
                        Looking for something Blue, but couldn't find it? <br /> Check out some
                        <Link className="cart-empty-redirect-link" to="/productList"> fresh new products</Link> or add some items from your wishlist!
                    </p>
                    <img className="cart-empty-img" src="/assets/images/empty-cart.svg" alt="Add to Cart" />
                    <Link to="/wishList"><button className="btn btn-outline-primary rounded-med">Add Items From WishList</button></Link>
                </div> }

                {/* Cart Cards  */}
                <div className="cart">
                     <div className={`cart-cards ${showEmptyCart ? "empty": ""} cart-grid-2-column`}>
                        { userData.cart.map(cartItem => 
                            <CartListCard productData={cartItem} key={cartItem._id}/>
                        )}
                    </div>

                    {/* Cart Bill container  */}
                    { !showEmptyCart && <CartBill cartItemsData={userData.cart} cartListItemsCount={calculateTotalCartItems(userData.cart)}/> }
                </div>
            </div>
        </main>
    );
}

export { CartList };