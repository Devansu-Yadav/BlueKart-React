import { 
    SELECT_ELECTRONICS_CATEGORY, 
    SELECT_FASHION_CATEGORY, 
    SELECT_SPORTS_CATEGORY,
    SELECT_ACCESSORIES_CATEGORY
} from "../constants";

const getMinPriceOfProducts = (productData) => {
    return productData.reduce((minPrice, currProduct) => currProduct.price < minPrice ? currProduct.price: minPrice, Number.MAX_SAFE_INTEGER);
}

const getMaxPriceOfProducts = (productData) => {
    return productData.reduce((maxPrice, currProduct) => currProduct.price > maxPrice ? currProduct.price: maxPrice, Number.MIN_SAFE_INTEGER);
}

const filterProductsInPriceRange = (productsData, minRange, maxRange) => {
    return productsData.filter(item => item.price >= minRange && item.price <= maxRange);
}

const filterProductsByRating = (productsData, rating) => {
    return productsData.filter(item => parseFloat(item.rating) >= rating);
}

const sortProductsFilter = (productsData, sortByState) => {
    if(sortByState.sortByPrice > 0) {
        // Sort products by price - High to Low
        productsData.sort((a, b) => b.price - a.price);
    }

    if(sortByState.sortByPrice < 0) {
        // Sort products by price - Low to High
        productsData.sort((a, b) => a.price - b.price);
    }

    if(sortByState.sortByRating > 0) {
        // Sort products by Rating - High to Low
        productsData.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return [...productsData];
}

const outOfStockFilter = (productData, includeOutOfStock) => {
    if(!includeOutOfStock) {
        return productData.filter(item => !item.isOutOfStock);
    }
    return productData;
}

const filterProductsByCategory = (productData, categoryFilterState) => {
    if(Object.values(categoryFilterState).every(val => !val)) {
        return productData
    }
    return Object.keys(categoryFilterState).reduce((filteredProductData, currKey) => 
    categoryFilterState[currKey] ? [...filteredProductData, ...productData.filter(item => item.categoryName === currKey)]: [...filteredProductData], []);
}

const fetchCategoryLabel = (categoryName) => {
    switch(categoryName) {
        case "Electronics":
            return SELECT_ELECTRONICS_CATEGORY;
        case "Fashion":
            return SELECT_FASHION_CATEGORY;
        case "Sports":
            return SELECT_SPORTS_CATEGORY;
        case "Accessories":
            return SELECT_ACCESSORIES_CATEGORY;
        default:
            return "";
    }
}

export { 
    getMinPriceOfProducts, 
    getMaxPriceOfProducts, 
    filterProductsInPriceRange, 
    filterProductsByRating, 
    filterProductsByCategory,
    sortProductsFilter,
    outOfStockFilter,
    fetchCategoryLabel
};
