import { useState, useReducer, useEffect, useContext, createContext } from "react";
import { useProductsData } from "./index";
import { 
    filterProductsInPriceRange, 
    filterProductsByRating,
    filterProductsByCategory,
    sortProductsFilter, 
    outOfStockFilter,
    useSearchProducts
} from "common/helpers";

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
    SELECT_ELECTRONICS_CATEGORY,
    UNSELECT_ELECTRONICS_CATEGORY,
    SELECT_FASHION_CATEGORY,
    UNSELECT_FASHION_CATEGORY,
    SELECT_SPORTS_CATEGORY,
    UNSELECT_SPORTS_CATEGORY,
    SELECT_ACCESSORIES_CATEGORY,
    UNSELECT_ACCESSORIES_CATEGORY,
    CLEAR_CATEGORY_FILTER,
    CLEAR_SORT_BY_FILTER,
    CLEAR_INCLUDE_OUT_OF_STOCK_FILTER
} from "../constants";

const ProductPriceFilterContext = createContext({ 
    priceRange: { minRange: 0, maxRange: 0}, 
    categoryFilter: { Electronics: true, Fashion: true, Sports: true, Accessories: true },
    filteredProductData: [],
    clearProductFilters: () => {},
    setPriceRange: () => {}, 
    ratingsFilterDispatch: () => {}, 
    sortByFilterDispatch: () => {},
    includeOutOfStockDispatch: () => {},
    categoryFilterDispatch: () => {}
});

const useProductPriceFilter = () => useContext(ProductPriceFilterContext);

const ProductPriceFilterProvider = ({ children }) => {
    const { productsData, productPriceRange } = useProductsData();
    const { searchedProducts } = useSearchProducts();

    const ratingsFilterReducer = (state, action) => {
        switch(action.ratingType) {
            case FOUR_STAR_AND_ABOVE:
                return {
                    ...state,
                    ratings: 4.0
                }
            case THREE_STAR_AND_ABOVE:
                return {
                    ...state,
                    ratings: 3.0
                }
            case TWO_STAR_AND_ABOVE:
                return {
                    ...state,
                    ratings: 2.0
                }
            default: 
                return {...state, ratings: 1.0 };
        }
    }

    const sortByFilterReducer = (state, action) => {
        if(action.type === SORT_BY_PRICE) {
            switch(action.sorted) {
                case SORT_BY_PRICE_DESCENDING:
                    return {
                        ...state,
                        sortByPrice: 1,
                        sortByRating: 0
                    }
                case SORT_BY_PRICE_ASCENDING:
                    return {
                        ...state,
                        sortByPrice: -1,
                        sortByRating: 0
                    }
                case CLEAR_SORT_BY_FILTER:
                default:
                    return {
                        ...state,
                        sortByPrice: 0
                    }
            }
        } else {
            switch (action.sorted) {
                case SORT_BY_RATING_DESCENDING:
                    return {
                        ...state,
                        sortByPrice: 0,
                        sortByRating: 1
                    }
                case CLEAR_SORT_BY_FILTER:
                default:
                    return {
                        ...state,
                        sortByRating: 0
                    }
            }
        }
    }

    const includeOutOfStockReducer = (state, action) => {
        switch(action.type) {
            case INCLUDE_OUT_OF_STOCK:
                return {
                    ...state,
                    shouldIncludeOutOfStock: true
                }
            case CLEAR_INCLUDE_OUT_OF_STOCK_FILTER:
            default:
                return {
                    ...state,
                    shouldIncludeOutOfStock: false
                }
        }
    }

    const categoryFilterReducer = (state, action) => {
        switch(action.category) {
            case SELECT_ELECTRONICS_CATEGORY:
                return {
                    ...state,
                    Electronics: true
                }
            case UNSELECT_ELECTRONICS_CATEGORY:
                return {
                    ...state,
                    Electronics: false
                }
            case SELECT_FASHION_CATEGORY:
                return {
                    ...state,
                    Fashion: true
                }
            case UNSELECT_FASHION_CATEGORY:
                return {
                    ...state,
                    Fashion: false
                }
            case SELECT_SPORTS_CATEGORY:
                return {
                    ...state,
                    Sports: true
                }
            case UNSELECT_SPORTS_CATEGORY:
                return {
                    ...state,
                    Sports: false
                }
            case SELECT_ACCESSORIES_CATEGORY:
                return {
                    ...state,
                    Accessories: true
                }
            case UNSELECT_ACCESSORIES_CATEGORY:
                return {
                    ...state,
                    Accessories: false
                }
            case CLEAR_CATEGORY_FILTER:
                return {
                    ...state,
                    Electronics: false,
                    Fashion: false,
                    Sports: false,
                    Accessories: false
                }
            default:
                return {...state };
        }
    }

    const [filteredProductData, setFilteredProductData] = useState([]);
    const [ratingsFilter, ratingsFilterDispatch] = useReducer(ratingsFilterReducer, {
        ratings: 1.0
    });

    const [sortByFilter, sortByFilterDispatch] = useReducer(sortByFilterReducer, {
        sortByPrice: 0,
        sortByRating: 0
    });

    const [includeOutOfStock, includeOutOfStockDispatch] = useReducer(includeOutOfStockReducer, {
        shouldIncludeOutOfStock: false
    });

    const [categoryFilter, categoryFilterDispatch] = useReducer(categoryFilterReducer, {
        Electronics: false,
        Fashion: false,
        Sports: false,
        Accessories: false
    });

    const clearProductFilters = () => {
        setPriceRange(priceRange => ({
            ...priceRange, 
            minRange: productPriceRange.minRange, 
            maxRange: productPriceRange.maxRange 
        }));

        categoryFilterDispatch({ category: CLEAR_CATEGORY_FILTER });
        ratingsFilterDispatch({ ratingType: ONE_STAR_AND_ABOVE });

        if(sortByFilter.sortByPrice) {
            sortByFilterDispatch({ type: SORT_BY_PRICE, sorted: CLEAR_SORT_BY_FILTER });
        } else {
            sortByFilterDispatch({ type: SORT_BY_RATING, sorted: CLEAR_SORT_BY_FILTER });
        }

        includeOutOfStockDispatch({ type: CLEAR_INCLUDE_OUT_OF_STOCK_FILTER });
    }

    const [priceRange, setPriceRange] = useState({
        minRange: 0,
        maxRange: 0
    });

    // Initializing Filtered Product Data with Products Data & priceRange. 
    // Note:- Products Data & productPriceRange are only going to be updated initially when data is fetched from getProducts API.
    // This needs to be done since fetching Products Data from API takes a few milli secs, which would not be
    // captured within useEffect. 
    useEffect(() => {
        setFilteredProductData(productsData);
        setPriceRange(priceRange => ({
            ...priceRange, 
            minRange: productPriceRange.minRange, 
            maxRange: productPriceRange.maxRange 
        }));
    }, [productsData, productPriceRange]);

    // UseEffect to do side effect i.e Filtering and sorting data
    useEffect(() => {
        // Price Range Filter
        const priceRangeFilteredData = JSON.parse(JSON.stringify(filterProductsInPriceRange(searchedProducts, priceRange.minRange, priceRange.maxRange)));
        
        // Filtering products by category
        const filteredProductsByCategory = filterProductsByCategory(priceRangeFilteredData, categoryFilter);

        // Filtering products by Rating
        const filteredProductsByRating = filterProductsByRating(filteredProductsByCategory, ratingsFilter.ratings);
        
        // Sorting products by Price or Rating
        const sortedProductsByFilter = sortProductsFilter(filteredProductsByRating, sortByFilter);

        // Filter Out of Stock
        const includeOutOfStockProducts = outOfStockFilter(sortedProductsByFilter, includeOutOfStock.shouldIncludeOutOfStock);

        setFilteredProductData(includeOutOfStockProducts);
    }, [searchedProducts, priceRange, ratingsFilter, categoryFilter, sortByFilter, includeOutOfStock]);

    return (
        <ProductPriceFilterContext.Provider value={{ 
            priceRange, 
            setPriceRange, 
            filteredProductData, 
            ratingsFilter, 
            ratingsFilterDispatch,
            sortByFilter,
            sortByFilterDispatch,
            includeOutOfStock,
            includeOutOfStockDispatch,
            categoryFilter,
            categoryFilterDispatch,
            clearProductFilters
        }}>
            { children }
        </ProductPriceFilterContext.Provider>
    );
}

export { useProductPriceFilter, ProductPriceFilterProvider };