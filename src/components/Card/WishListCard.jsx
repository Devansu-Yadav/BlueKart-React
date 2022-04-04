import { formatProductPrice } from "../../common/helpers/priceFormatter";
import { useProductActions } from "../../common/helpers/ProductActions";

const WishListCard = ({ productData, className }) => {
    const { toggleWishList, isItemInCart, addToCartFromWishList } = useProductActions();

    const closeBtnHandler = (event) => {
        event.target.parentNode.classList.add("wishList-card-display-none");
        toggleWishList(event, productData);
    }

    return (
        <div className={`card space-S ${className}`}>
            <div className="card-img">
                <img src={`${productData.image}`} alt={`${productData.productName}`} />
            </div>
            <img className="btn-close" src="/assets/images/close-button.svg" alt="Close Button" onClick={(event) => closeBtnHandler(event)} />
            <div className="card-header">{productData.productName}</div>
            <div className="card-title">{formatProductPrice(productData.price)}</div>
            <p className="card-text">
                {productData.description}
            </p>

            <div className="card-buttons">
                <button className="card-button btn-outline-primary" onClick={(event) => addToCartFromWishList(event, productData)}>{ !isItemInCart(productData._id) ? "MOVE TO CART": "GO TO CART" }</button>
            </div>
        </div>
    );
}

export { WishListCard };
