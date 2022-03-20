import "./ProductList.css";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductListing = () => {
    return (
        <main className="main-container product-grid-2-column">
            {/* Pricing Filters Sidebar */}
            <PriceFilter />

            {/* Products Container */}
            <div className="products">
                <div className="searchbar searchbar-in-products-list flex-row-container">
                    <input className="input-search input-primary" type="text" placeholder="Search for products, brands and more" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon space-M" />
                </div>

                <div className="product-cards product-grid-3-column">
                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.8/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/laptop.jpg" alt="Surface Laptop" />
                        </div>
                        <div className="card-header">Surface Pro 8</div>
                        <div className="card-title">₹1,00,000</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size"/>
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.5/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/smartphone.jpg" alt="Smartphone" />
                        </div>
                        <div className="card-header">Samsung Galaxy M32</div>
                        <div className="card-title">₹30,999</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.2/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/tablet.jpg" alt="Tablet" />
                        </div>
                        <div className="card-header">Samsung Tablet</div>
                        <div className="card-title">₹6,999</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.6/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/fashion-men.jpg" alt="Fashion Men" />
                        </div>
                        <div className="card-header">Mens Sherwani</div>
                        <div className="card-title">₹9,999</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.6/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/fashion-women.jpg" alt="Fashion Women" />
                        </div>
                        <div className="card-header">Women's T-Shirt</div>
                        <div className="card-title">₹1,599</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.1/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/fashion-3.jpg" alt="Men's Jacket" />
                        </div>
                        <div className="card-header">Men's jacket</div>
                        <div className="card-title">₹1,599</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.0/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/Sports-1.jpg" alt="Sports shoes" />
                        </div>
                        <div className="card-header">Nike Sports Shoes</div>
                        <div className="card-title">₹5,099</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.5/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/Sports-2.jpg" alt="Men's Sports wear" />
                        </div>
                        <div className="card-header">HRX Men's Sports Wear</div>
                        <div className="card-title">₹2,199</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.6/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/Sports-3.jpg" alt="Sports T-Shirt" />
                        </div>
                        <div className="card-header">Men's Sports T-Shirt</div>
                        <div className="card-title">₹2,199</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.6/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/accessories-1.jpg" alt="Headphones" />
                        </div>
                        <div className="card-header">Boat Wireless Headphones</div>
                        <div className="card-title">₹3,299</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.0/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/accessories-2.jpg" alt="SmartWatch" />
                        </div>
                        <div className="card-header">SmartWatch</div>
                        <div className="card-title">₹2,299</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>

                    <div className="card space-S zoom">
                        <span className="card-badge">⭐ 4.3/5</span>
                        <div className="card-img">
                            <img src="https://bluekart.netlify.app/assets/images/products/accessories-3.jpg" alt="Trimmer" />
                        </div>
                        <div className="card-header">Phillips Men's Trimmer</div>
                        <div className="card-title">₹2,599</div>
                        <p className="card-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio
                        </p>

                        <div className="card-buttons">
                            <button className="card-button btn-outline-primary">ADD TO CART</button>
                            <FavoriteBorderIcon className="card-icon material-icon-size" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export { ProductListing };