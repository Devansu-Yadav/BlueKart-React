import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { formatProductPrice } from "../../common/helpers/priceFormatter";
import { useProductActions } from "../../common/helpers/ProductActions";

const ProductListCard = ({ productData, className, outOfStock }) => {
    const { isItemInWishList, toggleWishList } = useProductActions();

    return (
        <div className={`card ${outOfStock ? "card-text-overlay": ""} space-S ${className}`}>
            {!outOfStock && <span className="card-badge">⭐ {productData.rating}/5</span> }
            <div className="card-img">
                <img src={`${productData.image}`} alt={`${productData.productName}`} />
                { outOfStock && <div class="card-header">Out of Stock</div> }
            </div>
            <div className="card-header">{productData.productName}</div>
            <div className="card-title">{formatProductPrice(productData.price)}</div>
            {outOfStock && <span className="card-badge">⭐ {productData.rating}/5</span> }
            <p className="card-text">
                {productData.description}
            </p>

            <div className={`card-buttons ${outOfStock && "centered-flex-row-container"}`}>
                {outOfStock ?  <button className="card-button out-of-stock-btn btn-outline-primary btn-outline-disable" disabled>OUT OF STOCK</button> 
                : <button className="card-button btn-outline-primary">ADD TO CART</button> }
                {!outOfStock && (isItemInWishList(productData._id) ? 
                <FavoriteIcon className="card-icon material-icon-size" onClick={(event) => toggleWishList(event, productData)} /> 
                : <FavoriteBorderIcon className="card-icon material-icon-size" onClick={(event) => toggleWishList(event, productData)} />) }
            </div>
        </div>
    );
}

export { ProductListCard };