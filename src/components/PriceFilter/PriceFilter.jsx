import "./PriceFilter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { usePriceFilterSideBar } from "../../common/context/PriceFilterSideBarContext";
import { formatProductPrice } from "../../common/helpers/priceFormatter";
import { useProductPriceFilter } from "../../common/context/ProductPriceFilterContext";
import { useProductsData } from "../../common/context/ProductsDataContext";
import { 
    FOUR_STAR_AND_ABOVE, 
    THREE_STAR_AND_ABOVE, 
    TWO_STAR_AND_ABOVE, 
    ONE_STAR_AND_ABOVE,
    SORT_BY_PRICE,
    SORT_BY_RATING,
    SORT_BY_PRICE_DESCENDING,
    SORT_BY_PRICE_ASCENDING,
    SORT_BY_RATING_DESCENDING,
    INCLUDE_OUT_OF_STOCK,
    INCLUDE_IN_STOCK,
    SELECT_ELECTRONICS_CATEGORY,
    UNSELECT_ELECTRONICS_CATEGORY,
    SELECT_FASHION_CATEGORY,
    UNSELECT_FASHION_CATEGORY,
    SELECT_SPORTS_CATEGORY,
    UNSELECT_SPORTS_CATEGORY,
    SELECT_ACCESSORIES_CATEGORY,
    UNSELECT_ACCESSORIES_CATEGORY
} from "../../common/constants";

const PriceFilter = () => {
    const [filterSideBarMobileDisplay, setFilterSideBarMobileDisplay] = useState(false);
    const { displayPriceFilterSideBar, handlePriceFilterSideBar } = usePriceFilterSideBar();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { 
        priceRange,
        categoryFilter,
        setPriceRange, 
        ratingsFilter,
        ratingsFilterDispatch, 
        sortByFilter,
        sortByFilterDispatch, 
        includeOutOfStock,
        includeOutOfStockDispatch,
        categoryFilterDispatch,
        clearProductFilters
    } = useProductPriceFilter();

    const { productPriceRange } = useProductsData();

    // Make Price Filters comp responsive for Mobile devices
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
                    <button className="btn-link btn-link-primary space-S" onClick={clearProductFilters}>CLEAR</button>
                </div>

                <hr className="divide-nav-items" />

                {/* Price filter */}
                <div className="filter price-filter flex-col-container space-S">
                    <div className="filter-heading">PRICE RANGE</div>
                    
                    <div className="price-range centered-flex-row-container">
                        <label className="input-label">{formatProductPrice(productPriceRange.minRange)}</label>
                        <input className="input-range"
                            name="price-range"
                            min={productPriceRange.minRange.toString()}
                            max={productPriceRange.maxRange.toString()}
                            value={priceRange.maxRange}
                            type="range"
                            onChange={(event) => {
                                setPriceRange(priceRange => ({
                                    ...priceRange,  
                                    maxRange: Number(event.target.value) 
                                }));
                            }
                        } />
                        <label className="input-label">{formatProductPrice(productPriceRange.maxRange)}</label>
                    </div>
                </div>

                <hr className="divide-nav-items" />

                {/* Category Filter  */}
                <div className="filter flex-col-container space-S">
                    <div className="filter-heading">CATEGORY</div>

                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="electronics-category">
                                    <input id="electronics-category" className="input-checkbox" name="electronics category" type="checkbox" 
                                    checked={categoryFilter.Electronics}
                                    onChange={event => {
                                        if(event.target.checked) {
                                            categoryFilterDispatch({ category: SELECT_ELECTRONICS_CATEGORY });
                                        } else {
                                            categoryFilterDispatch({ category: UNSELECT_ELECTRONICS_CATEGORY });
                                        }
                                    }}/>
                                    Electronics
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="fashion-category">
                                    <input id="fashion-category" className="input-checkbox" name="fashion category" type="checkbox" 
                                    checked={categoryFilter.Fashion}
                                    onChange={event => {
                                        if(event.target.checked) {
                                            categoryFilterDispatch({ category: SELECT_FASHION_CATEGORY });
                                        } else {
                                            categoryFilterDispatch({ category: UNSELECT_FASHION_CATEGORY });
                                        }
                                    }}/>
                                    Fashion
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="sports-category">
                                    <input id="sports-category" className="input-checkbox" name="sports category" type="checkbox" 
                                    checked={categoryFilter.Sports}
                                    onChange={event => {
                                        if(event.target.checked) {
                                            categoryFilterDispatch({ category: SELECT_SPORTS_CATEGORY });
                                        } else {
                                            categoryFilterDispatch({ category: UNSELECT_SPORTS_CATEGORY });
                                        }
                                    }}/>
                                    Sports
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="accessories-category">
                                    <input id="accessories-category" className="input-checkbox" name="accessories category" type="checkbox" 
                                    checked={categoryFilter.Accessories}
                                    onChange={event => {
                                        if(event.target.checked) {
                                            categoryFilterDispatch({ category: SELECT_ACCESSORIES_CATEGORY });
                                        } else {
                                            categoryFilterDispatch({ category: UNSELECT_ACCESSORIES_CATEGORY });
                                        }
                                    }}/>
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
                                <label className="input-label flex-row-container" htmlFor="four-star-rating">
                                    <input id="four-star-rating" className="input-radio" name="rating" type="radio" 
                                    checked={ratingsFilter.ratings === 4.0}
                                    onChange={() => ratingsFilterDispatch({ ratingType: FOUR_STAR_AND_ABOVE })}/>
                                    4 Stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="three-star-rating">
                                    <input id="three-star-rating" className="input-radio" name="rating" type="radio" 
                                    checked={ratingsFilter.ratings === 3.0}
                                    onChange={() => ratingsFilterDispatch({ ratingType: THREE_STAR_AND_ABOVE })}/>
                                    3 Stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="two-star-rating">
                                    <input id="two-star-rating" className="input-radio" name="rating" type="radio" 
                                    checked={ratingsFilter.ratings === 2.0}
                                    onChange={() => ratingsFilterDispatch({ ratingType: TWO_STAR_AND_ABOVE })}/>
                                    2 Stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="one-star-rating">
                                    <input id="one-star-rating" className="input-radio" name="rating" type="radio" 
                                    checked={ratingsFilter.ratings === 1.0}
                                    onChange={() => ratingsFilterDispatch({ ratingType: ONE_STAR_AND_ABOVE })}/>
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
                                <label className="input-label flex-row-container" htmlFor="price-descending">
                                    <input id="price-descending" className="input-radio" name="sort" type="radio" 
                                    checked={sortByFilter.sortByPrice === 1}
                                    onChange={() => sortByFilterDispatch({ type: SORT_BY_PRICE, sorted: SORT_BY_PRICE_DESCENDING })}/>
                                    Price - High to Low
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="price-ascending">
                                    <input id="price-ascending" className="input-radio" name="sort" type="radio" 
                                    checked={sortByFilter.sortByPrice === -1}
                                    onChange={() => sortByFilterDispatch({ type: SORT_BY_PRICE, sorted: SORT_BY_PRICE_ASCENDING })}/>
                                    Price - Low to High
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label flex-row-container" htmlFor="rating-descending">
                                    <input id="rating-descending" className="input-radio" name="sort" type="radio" 
                                    checked={sortByFilter.sortByRating === 1}
                                    onChange={() => sortByFilterDispatch({ type: SORT_BY_RATING, sorted: SORT_BY_RATING_DESCENDING })}/>
                                    Rating - High to Low
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <hr className="divide-nav-items" />

                {/* Out of Stock Filter  */}
                <div className="filter flex-col-container space-S">
                    <div className="filter-heading">Out Of Stock</div>

                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label flex-row-container" htmlFor="out-of-stock">
                                    <input id="out-of-stock" className="input-checkbox" name="electronics category" type="checkbox" 
                                    checked={includeOutOfStock.shouldIncludeOutOfStock}
                                    onChange={event => {
                                        if(event.target.checked) {
                                            includeOutOfStockDispatch({ type: INCLUDE_OUT_OF_STOCK });
                                        } else {
                                            includeOutOfStockDispatch({ type: INCLUDE_IN_STOCK });
                                        }
                                    }}/>
                                    Include Out of Stock
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