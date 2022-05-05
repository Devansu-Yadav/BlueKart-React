import "./ProductList.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { useProductPriceFilter } from "common/context";
import { fetchCategoryLabel } from "common/helpers";
import { PriceFilter, ProductListCard, SearchBar } from "../index";

const ProductListing = () => {
    const { filteredProductData, categoryFilterDispatch, clearProductFilters } = useProductPriceFilter();
    const { categoryName } = useParams();
    const [loading, setLoading] = useState(true);
    const sleep = milliSeconds => {
        return new Promise(resolve => setTimeout(resolve, milliSeconds));
    }

    // Loading screen for loading all products
    useEffect(() => {
        sleep(1500).then(() => setLoading(false));
    }, []);

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
                        height={100}
                        width={100}
                    /> ): (
                        <div className="product-cards product-grid-3-column">
                            { !filteredProductData.length && <div className="productList-empty-container centered-flex-col-container">
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
                    ) 
                }
            </div>
        </main>
    );
}

export { ProductListing };
