import "./CartListCard.css";
import { formatProductPrice } from "../../common/helpers/priceFormatter";

const CartListCard = ({ productData, cartListItemsCountHandler }) => {
    const closeBtnHandler = (event) => {
        event.target.parentNode.classList.add("cartList-card-display-none");
        // cartListItemsCountHandler((cartListItemsCount) => cartListItemsCount - 1);
    }

    return (
        <div className="card card-horizontal space-S">
            <div className="card-img">
                <img src={`${productData.image}`} alt={`${productData.productName}`} />
                <div className="cart-card-details flex-col-container">
                    <div className="card-header">{productData.productName}</div>
                    <div className="card-title">{formatProductPrice(productData.price)}</div>
                    <div className="card-quantity-btns flex-row-container">
                        <button className="increase-qty centered-flex-row-container">+</button>
                        <span className="qty">1</span>
                        <button className="decrease-qty centered-flex-row-container">-</button>
                    </div>

                    <div className="card-buttons">
                        <button className="card-button btn-outline-primary">MOVE TO WISHLIST</button>
                    </div>
                </div>
            </div>
            <img className="btn-close" src="/assets/images/close-button.svg" alt="Close Button" onClick={(event) => closeBtnHandler(event)}/>
        </div>
    );
}

export { CartListCard };