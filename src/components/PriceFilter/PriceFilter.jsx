import "./PriceFilter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { usePriceFilterSideBar } from "../../common/context/PriceFilterSideBarContext";

const PriceFilter = () => {
    const [filterSideBarMobileDisplay, setFilterSideBarMobileDisplay] = useState(false);
    const { displayPriceFilterSideBar, handlePriceFilterSideBar } = usePriceFilterSideBar();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        windowWidth < 560 ? setFilterSideBarMobileDisplay(true): setFilterSideBarMobileDisplay(false);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [windowWidth]);

    return (
        <aside className={`${filterSideBarMobileDisplay ? "pricing-filter-sidebar-small-screen": "pricing-filter-sidebar"} ${displayPriceFilterSideBar ? "filter-show": "" }`}>
            <nav className="pricing-nav centered-flex-col-container">
                <div className="pricing-filter-heading centered-flex-row-container">
                    <h3 className="heading-3">FILTERS</h3>
                    <button className="btn-link btn-link-primary space-S">CLEAR</button>
                </div>

                <hr className="divide-nav-items" />

                {/* Price filter */}
                <div className="filter flex-col-container space-S">
                    <div className="filter-heading">PRICE</div>

                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="price" type="radio" />
                                    Under ₹999
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="price" type="radio" />
                                    ₹1000 to ₹5999
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="price" type="radio" />
                                    ₹6000 to ₹9,999
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="price" type="radio" />
                                    More than ₹10,000
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

                <hr className="divide-nav-items" />

                {/* Category Filter  */}
                <div className="filter flex-col-container space-S">
                    <div className="filter-heading">CATEGORY</div>

                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="input-checkbox">
                                    <input className="input-checkbox" name="electronics category" type="checkbox" />
                                    Electronics
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="input-checkbox">
                                    <input className="input-checkbox" name="fashion category" type="checkbox" />
                                    Fashion
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="input-checkbox">
                                    <input className="input-checkbox" name="sports category" type="checkbox" />
                                    Sports
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="input-checkbox">
                                    <input className="input-checkbox" name="accessories category" type="checkbox" />
                                    Accessories
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

                <hr className="divide-nav-items" />

                {/* Ratings Filter */}
                <div className="filter flex-col-container space-S">
                    <div className="filter-heading">RATING</div>

                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    4 Stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    3 Stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    2 Stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    1 Star & Above
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

                <hr className="divide-nav-items" />

                {/* Sort By Filter  */}
                <div className="filter flex-col-container space-S">
                    <div className="filter-heading">SORT BY</div>

                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    Price - High to Low
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    Price - Low to High
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="input-radio">
                                    <input className="input-radio" name="rating" type="radio" />
                                    Rating - High to Low
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            { filterSideBarMobileDisplay && <div className="filters-slider-comp centered-flex-row-container" onClick={handlePriceFilterSideBar}>
                FILTERS
                {!displayPriceFilterSideBar && <FontAwesomeIcon icon={faArrowRight} /> }
                {displayPriceFilterSideBar && <FontAwesomeIcon icon={faArrowLeft} /> }
            </div> }
        </aside>
    );
}

export { PriceFilter };