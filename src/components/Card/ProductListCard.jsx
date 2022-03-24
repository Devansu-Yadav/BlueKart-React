import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductListCard = ({ productData, className }) => {
    return (
        <div className={`card space-S ${className}`}>
            <span className="card-badge">⭐ {productData.rating}/5</span>
            <div className="card-img">
                <img src={`${productData.image}`} alt={`${productData.productName}`} />
            </div>
            <div className="card-header">{productData.productName}</div>
            <div className="card-title">{productData.price}</div>
            <p className="card-text">
                {productData.description}
            </p>

            <div className="card-buttons">
                <button className="card-button btn-outline-primary">ADD TO CART</button>
                <FavoriteBorderIcon className="card-icon material-icon-size" />
            </div>
        </div>
    );
}

export { ProductListCard };