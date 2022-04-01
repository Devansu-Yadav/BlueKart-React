import "./LandingPageContent.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SideBar } from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SearchBar } from "../SearchBar/SearchBar";
import { useSidebar } from "../../common/context/SidebarContext";
import { useProductsData } from "../../common/context/ProductsDataContext";

const LandingPageContent = () => {
    const { displaySideBar } = useSidebar();
    const { categoryData } = useProductsData();

    return (
        <main>
            <SearchBar className={{ position: "searchbar-below-nav" }} />

            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />

            <main className="main-container">
                {/* Hero Section */}
                <section className="hero flex-row-container">
                    <div className="hero-left">
                        <div className="hero-info space-S centered-flex-col-container">
                            <h1 className="hero-heading-small">ONE STORE, ONE PLACE</h1>
                            <h1 className="highlight-hero-heading">FOR EVERYTHING BLUE</h1>
                            <p className="hero-content">
                                Are you a <span>Blue color</span> fanatic? <span>Go Blue</span> in style with our wide range of categories
                                specially designed to help you satisfy your 💙 for <span>Blue</span>
                            </p>
                            <div className="hero-info-btns centered-flex-row-container">
                                <Link to="/productList"><button className="btn btn-primary rounded-med space-S">Explore</button></Link>
                                <HashLink to="#category"><button className="btn btn-outline-default rounded-med space-S">Categories</button></HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right centered-flex-row-container">
                        <img src="/assets/images/hero-svg.svg" alt="Online Shopping Hero Image" />
                    </div>
                </section>

                {/* Top Offers */}
                <section className="top-offers flex-col-container">
                    <div className="top-offers-title">
                        <h1 className="top-offers-heading">Top Offers</h1>
                    </div>
                    <div className="top-offers-cards-container flex-row-container">
                        <div className="card space-S zoom">
                            <span className="card-badge">15% OFF</span>
                            <div className="card-img">
                                <img src="https://res.cloudinary.com/bluekart/image/upload/v1648712083/smartphone.webp" alt="Electronics Sale" />
                            </div>

                            <div className="card-header">Galaxy M32</div>
                            <div className="card-title">by Samsung</div>

                            <div className="card-buttons">
                                <button className="card-button">ADD TO CART</button>
                                <FavoriteBorderIcon className="card-icon material-icon-size" />
                                <ShoppingCartIcon className="card-icon material-icon-size" />
                            </div>
                        </div>

                        <div className="card space-S zoom">
                            <span className="card-badge">45% OFF</span>
                            <div className="card-img">
                                <img src="https://res.cloudinary.com/bluekart/image/upload/v1648713821/fashion-sale.jpg" alt="Fashion Sale" />
                            </div>

                            <div className="card-header">Levis Mens T-Shirt</div>
                            <div className="card-title">by Levis</div>

                            <div className="card-buttons">
                                <button className="card-button">ADD TO CART</button>
                                <FavoriteBorderIcon className="card-icon material-icon-size" />
                                <ShoppingCartIcon className="card-icon material-icon-size" />
                            </div>
                        </div>

                        <div className="card space-S zoom">
                            <span className="card-badge">7% OFF</span>
                            <div className="card-img">
                                <img src="https://res.cloudinary.com/bluekart/image/upload/e_bgremoval/v1648712870/Sports-1.webp" alt="Sports Sale" />
                            </div>

                            <div className="card-header">Mens Shoes</div>
                            <div className="card-title">by Nike</div>

                            <div className="card-buttons">
                                <button className="card-button">ADD TO CART</button>
                                <FavoriteBorderIcon className="card-icon material-icon-size" />
                                <ShoppingCartIcon className="card-icon material-icon-size" />
                            </div>
                        </div>

                        <div className="card space-S zoom">
                            <span className="card-badge">35% OFF</span>
                            <div className="card-img">
                                <img src="https://res.cloudinary.com/bluekart/image/upload/v1648713915/accessories-sale.webp" alt="Accessories Sale" />
                            </div>

                            <div className="card-header">Tint Smartwatch</div>
                            <div className="card-title">by Daniel Klein</div>

                            <div className="card-buttons">
                                <button className="card-button">ADD TO CART</button>
                                <FavoriteBorderIcon className="card-icon material-icon-size" />
                                <ShoppingCartIcon className="card-icon material-icon-size" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section id="category" className="categories flex-col-container">
                    <div className="category-title">
                        <h1 className="categories-heading">Categories</h1>
                    </div>
                    <div className="category-cards-container flex-row-container">
                        { categoryData.map(({ id, categoryName, image }) => {
                            return (
                            <Link to={`/productList/${categoryName}`} key={id}>
                                <div className="card card-text-overlay space-S zoom">
                                    <div className="card-img">
                                        <img src={`${image}`} alt={`${categoryName}`} />
                                        <div className="card-header">{categoryName}</div>
                                    </div>
                                </div>
                            </Link> 
                            );
                        })}
                    </div>
                </section>
            </main>
        </main>
    );
}

export { LandingPageContent };