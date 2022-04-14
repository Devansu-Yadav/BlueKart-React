import "./ProductList.css";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProductListCard } from "../Card/ProductListCard";
import { useProductPriceFilter } from "../../common/context/ProductPriceFilterContext";
import { useParams } from "react-router-dom";
import { fetchCategoryLabel } from "../../common/helpers/productDataFilter";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useEffect } from "react";

const ProductListing = () => {
    const { filteredProductData, categoryFilterDispatch, clearProductFilters } = useProductPriceFilter();
    const { categoryName } = useParams();

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
            </div>
        </main>
    );
}

export { ProductListing };