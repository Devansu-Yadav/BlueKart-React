import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { getMinPriceOfProducts, getMaxPriceOfProducts } from "common/helpers";

const ProductsDataContext = createContext({ 
    productsData: [], 
    setProductsData: () => {}, 
    productPriceRange: { minRange: 0, maxRange: 0 },
    categoryData: [],
    setCategoryData: () => {}
});

const useProductsData = () => useContext(ProductsDataContext);

const ProductsDataProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const [productPriceRange, setProductPriceRange] = useState({ minRange: 0, maxRange: 0 });
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const productsDataResponse = await axios.get("/api/products");
                if(productsDataResponse.status === 200) {
                    // Fetch the price range of products initially.
                    setProductPriceRange((productPriceRange) => {
                        return {
                            ...productPriceRange, 
                            minRange: getMinPriceOfProducts(productsDataResponse.data.products),
                            maxRange: getMaxPriceOfProducts(productsDataResponse.data.products)
                        }
                    });
                    setProductsData(productsDataResponse.data.products);
                }
            } catch(err) {
                console.log("Error in fetching all products ", err.response.data);
            }
        }

        const getCategoryData = async () => {
            try {
                const categoryDataResponse = await axios.get("/api/categories");
                if(categoryDataResponse.status === 200) {
                    setCategoryData(categoryDataResponse.data.categories);
                }
            } catch(err) {
                console.log("Error in fetching all products ", err.response.data);
            }
        }

        getProductsData();
        getCategoryData();
    }, []);

    return <ProductsDataContext.Provider value={{ productsData, setProductsData, categoryData, setCategoryData, productPriceRange, setProductPriceRange }}>
        { children }
    </ProductsDataContext.Provider>
}

export { useProductsData, ProductsDataProvider };