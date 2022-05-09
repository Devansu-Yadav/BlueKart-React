import { useState, useEffect } from "react";
import { useProductsData } from "common/context";

const useSearchProducts = () => {
    const { productsData, productsSearchQuery } = useProductsData();

    const queryVal = new URLSearchParams(productsSearchQuery).get("query");
    const [searchedProducts, setSearchedProducts] = useState([]);

    const getSearchedProducts = () => {
        let searchedProducts = [];
        searchedProducts = productsData.filter((product) => 
            product.productName.toLowerCase().includes(queryVal.toLowerCase()) || 
            product.categoryName.toLowerCase().includes(queryVal.toLowerCase())
        );
        setSearchedProducts(searchedProducts);
    };

    useEffect(() => {
        setSearchedProducts(productsData);
    }, [productsData]);

    useEffect(() => {
        if(productsSearchQuery.length > 0) {
            getSearchedProducts();
        } else {
            setSearchedProducts(productsData);
        }
    }, [productsSearchQuery, productsData]);

    return { searchedProducts };
}

export { useSearchProducts };
