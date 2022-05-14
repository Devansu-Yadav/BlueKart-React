import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductsData } from "common/context";
import { v4 as uuid } from "uuid";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTag } from "@fortawesome/free-solid-svg-icons";
import { formatProductPrice, useProductActions, getDiscountedProductPrice } from "common/helpers";
import "./SingleProductPageCard.css";

const SingleProductCard = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { getSingleProductData } = useProductsData();
    const { isItemInWishList, toggleWishList, addToCart, isItemInCart } = useProductActions();
    const [productData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await getSingleProductData(productId);
            console.log(data.product);
            setProductData({...data.product });
            setIsLoading(false);
        })();
    }, [productId]);

    return (
        <main className="main-container">
            { isLoading ? ( <ReactLoading 
                    className="spinning-loader"
                    type="spin"
                    color="#008FF5"
                    height={80}
                    width={80}
                />) : (
                <div className="product-container">
                    <div className="product-img-container">
                        <img src={productData.image} alt={productData.productName} className="img-responsive" />
                    </div>
                    <div className="product-details-container">
                        <ul className="ulist-style-none stack-list">
                            <li className="stack-list-item">
                                <div className="product-details-heading space-S">
                                    <h2 className="heading-2">{productData.productName}</h2>
                                    <div className="product-rating centered-flex-row-container">
                                        {productData.rating} 
                                        <FontAwesomeIcon icon={faStar} className="rating" />
                                    </div>
                                </div>
                            </li>
                            <li className="stack-list-item">
                                <div className="product-price-container flex-col-container space-S">
                                    <div className="product-price flex-col-container">
                                        <div className="price-heading flex-row-container">
                                            <span>{formatProductPrice(getDiscountedProductPrice(productData.price, productData.discountPercent))}</span>
                                            <span className="strikethrough-txt rg-txt disabled-txt">{formatProductPrice(productData.price)}</span> 
                                            <span className="product-discount">({productData.discountPercent}% OFF)</span>
                                        </div>
                                        <p className="inclusive-tax">Inclusive of all taxes</p>
                                    </div>

                                    <div className="product-actions centered-flex-row-container">
                                        { productData.isOutOfStock ? <button className="card-button out-of-stock-btn btn-outline-primary btn-outline-disable" disabled>OUT OF STOCK</button> 
                                        : <button className="card-button cart-btn" onClick={(event) => addToCart(event, productData)}>{ !isItemInCart(productData._id) ? "ADD TO CART": "GO TO CART" }</button> }
                                        
                                        {!productData.isOutOfStock && (isItemInWishList(productData._id) ? 
                                        <button className="card-button wishlist-btn btn-outline-default" onClick={() => navigate("/wishList")}>WISHLISTED</button> 
                                        : <button className="card-button wishlist-btn btn-outline-default" onClick={(event) => toggleWishList(event, productData)}>WISHLIST</button>)}
                                    </div>
                                </div>
                            </li>
                            <li className="stack-list-item">
                                <div className="product-features-offers-container flex-col-container space-S">
                                    <div className="product-offers flex-col-container">
                                        <div className="offers-heading flex-row-container">
                                            BEST OFFERS
                                            <FontAwesomeIcon icon={faTag} />
                                        </div>
                                        <p className="offers-txt">The product is already at the best price</p>
                                    </div>

                                    <div className="product-features">
                                        <div className="product-features-heading">
                                            FEATURES
                                        </div>

                                        { Object.entries(productData.features).map(feature => {
                                            return <div key={uuid()} className="product-feature">{feature[0]}: {feature[1]}</div>
                                        })}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            )}
        </main>
    );
}

export { SingleProductCard };
