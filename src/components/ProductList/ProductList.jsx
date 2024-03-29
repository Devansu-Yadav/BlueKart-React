import "./ProductList.css";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
import { useProductPriceFilter, useProductsData } from "common/context";
import { fetchCategoryLabel } from "common/helpers";
import { PriceFilter, ProductListCard, SearchBar } from "../index";

const ProductListing = () => {
    const { filteredProductData, categoryFilterDispatch, clearProductFilters } = useProductPriceFilter();
    const { setProductsSearchQuery } = useProductsData();
    const { categoryName } = useParams();
    const { search } = useLocation();
    const queryVal = new URLSearchParams(search).get("query");

    const [loading, setLoading] = useState(true);
    const sleep = milliSeconds => {
        return new Promise(resolve => setTimeout(resolve, milliSeconds));
    }

    // Loading screen for loading all products
    useEffect(() => {
        sleep(1500).then(() => setLoading(false));
    }, []);

    // Set user's search query in products Data context
    useEffect(() => {
        setProductsSearchQuery(search);
    }, [search]);

    useEffect(() => {
        // Clearing All Filters when loading Products List everytime (Reason - UX).
        clearProductFilters();
        const categoryLabel = fetchCategoryLabel(categoryName);

        if(categoryLabel) {
            categoryFilterDispatch({ category: categoryLabel });
        }
    }, [categoryName]);

    return (
        <main className="main-container product-grid-2-column">
            {/* Pricing Filters Sidebar */}
            <PriceFilter />

            {/* Products Container */}
            <div className="products">
                <SearchBar className={{ position: "searchbar-in-products-list" }}/>

                { loading ? 
                    ( <ReactLoading 
                        className="spinning-loader"
                        type="spin"
                        color="#008FF5"
                        height={80}
                        width={80}
                    /> ): (

                        <>
                            { search && <div className="centered-flex-col-container search-header">
                                {`Search Results for "${queryVal}" - ${filteredProductData.length} products`}
                            </div>
                            }

                            <div className="product-cards product-grid-3-column">
                                { search && !filteredProductData.length && 
                                    <div className="product-cards product-grid-3-column">
                                        <div className="productList-empty-container centered-flex-col-container">
                                            <h3 className="productList-empty-heading">No Search Results found for {queryVal}</h3>
                                            <img className="productList-empty-img" src="/assets/images/empty-productlist.svg" alt="Product Not found" />
                                        </div>
                                    </div>
                                }

                                {!search && !filteredProductData.length && <div className="productList-empty-container centered-flex-col-container">
                                    <h3 className="productList-empty-heading">Couldn't find products based on your filter :(</h3>
                                    <p className="productList-empty-content">
                                        Try changing the filters or Refreshing the page!
                                    </p>
                                    <img className="productList-empty-img" src="/assets/images/empty-productlist.svg" alt="Product Not found" />
                                </div> }

                                { filteredProductData.map(product => {
                                    return <ProductListCard productData={product} key={product._id} className="zoom" outOfStock={product.isOutOfStock} />
                                })}
                            </div>
                        </>
                    ) 
                }
            </div>
        </main>
    );
}

export { ProductListing };
