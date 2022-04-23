import "./CartListCard.css";
import { formatProductPrice, useProductActions } from "common/helpers";
import { INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY } from "common/constants";

const CartListCard = ({ productData }) => {
    const { removeCartItem, isItemInWishList, addToWishListFromCart, updateCartItemQty } = useProductActions();

    const closeBtnHandler = (event) => {
        event.target.parentNode.classList.add("cartList-card-display-none");
        removeCartItem(event, productData._id);
    }

    return (
        <div className="card card-horizontal space-S">
            <div className="card-img">
                <img src={`${productData.image}`} alt={`${productData.productName}`} />
                <div className="cart-card-details flex-col-container">
                    <div className="card-header">{productData.productName}</div>
                    <div className="card-title">{formatProductPrice(productData.price)}</div>
                    <div className="card-quantity-btns flex-row-container">
                        <button className="increase-qty centered-flex-row-container" onClick={(event) => updateCartItemQty(event, productData, INCREASE_ITEM_QUANTITY)}>+</button>
                        <span className="qty">{ productData.qty }</span>
                        <button className="decrease-qty centered-flex-row-container" onClick={(event) => updateCartItemQty(event, productData, DECREASE_ITEM_QUANTITY)}>-</button>
                    </div>

                    <div className="card-buttons">
                        <button className="card-button btn-outline-primary" onClick={(event) => addToWishListFromCart(event, productData)}>{ !isItemInWishList(productData._id) ? "MOVE TO WISHLIST": "GO TO WISHLIST" }</button>
                    </div>
                </div>
            </div>
            <img className="btn-close" src="/assets/images/close-button.svg" alt="Close Button" onClick={(event) => closeBtnHandler(event)}/>
        </div>
    );
}

export { CartListCard };
