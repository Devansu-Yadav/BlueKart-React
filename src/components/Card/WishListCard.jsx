import { formatProductPrice } from "../../common/helpers/priceFormatter";

const WishListCard = ({ productData, className, wishListItemsCountHandler }) => {
    const closeBtnHandler = (event) => {
        event.target.parentNode.classList.add("wishList-card-display-none");
        wishListItemsCountHandler((wishListItemsCount) => wishListItemsCount - 1);
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
                <button className="card-button btn-outline-primary">MOVE TO CART</button>
            </div>
        </div>
    );
}

export { WishListCard };
