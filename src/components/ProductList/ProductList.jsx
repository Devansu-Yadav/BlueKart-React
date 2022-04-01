import "./ProductList.css";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProductListCard } from "../Card/ProductListCard";
import { useProductPriceFilter } from "../../common/context/ProductPriceFilterContext";
import { useParams } from "react-router-dom";
import { fetchCategoryLabel } from "../../common/helpers/productDataFilter";
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
                <div className="searchbar searchbar-in-products-list flex-row-container">
                    <input className="input-search input-primary" type="text" placeholder="Search for products, brands and more" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon space-M" />
                </div>

                <div className="product-cards product-grid-3-column">
                    { filteredProductData.map(product => {
                        return <ProductListCard productData={{
                            rating: product.rating,
                            image: product.image,
                            productName: product.productName,
                            price: product.price,
                            description: product.description
                        }} key={product._id} className="zoom" />
                    })}
                </div>
            </div>
        </main>
    );
}

export { ProductListing };