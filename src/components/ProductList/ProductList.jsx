import "./ProductList.css";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ProductListCard } from "../Card/ProductListCard";

const ProductListing = () => {
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
                    <ProductListCard productData={{ 
                        rating: "4.8", 
                        image: "https://bluekart.netlify.app/assets/images/products/laptop.jpg",
                        productName: "Surface Pro 8",
                        price: "₹1,00,000",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.5", 
                        image: "https://bluekart.netlify.app/assets/images/products/smartphone.jpg",
                        productName: "Samsung Galaxy M32",
                        price: "₹30,999",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.2", 
                        image: "https://bluekart.netlify.app/assets/images/products/tablet.jpg",
                        productName: "Samsung Tablet",
                        price: "₹6,999",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.6", 
                        image: "https://bluekart.netlify.app/assets/images/products/fashion-men.jpg",
                        productName: "Mens Sherwani",
                        price: "₹9,999",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.6", 
                        image: "https://bluekart.netlify.app/assets/images/products/fashion-women.jpg",
                        productName: "Women's T-Shirt",
                        price: "₹1,599",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.1", 
                        image: "https://bluekart.netlify.app/assets/images/products/fashion-3.jpg",
                        productName: "Men's jacket",
                        price: "₹1,599",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.0", 
                        image: "https://bluekart.netlify.app/assets/images/products/Sports-1.jpg",
                        productName: "Nike Sports Shoes",
                        price: "₹5,099",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.5", 
                        image: "https://bluekart.netlify.app/assets/images/products/Sports-2.jpg",
                        productName: "HRX Men's Sports Wear",
                        price: "₹2,199",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.6", 
                        image: "https://bluekart.netlify.app/assets/images/products/Sports-3.jpg",
                        productName: "Men's Sports T-Shirt",
                        price: "₹2,199",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.6", 
                        image: "https://bluekart.netlify.app/assets/images/products/accessories-1.jpg",
                        productName: "Boat Wireless Headphones",
                        price: "₹3,299",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.0", 
                        image: "https://bluekart.netlify.app/assets/images/products/accessories-2.jpg",
                        productName: "SmartWatch",
                        price: "₹2,299",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>

                    <ProductListCard productData={{ 
                        rating: "4.3", 
                        image: "https://bluekart.netlify.app/assets/images/products/accessories-3.jpg",
                        productName: "Phillips Men's Trimmer",
                        price: "₹2,599",
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio"
                    }} className="zoom"/>
                </div>
            </div>
        </main>
    );
}

export { ProductListing };