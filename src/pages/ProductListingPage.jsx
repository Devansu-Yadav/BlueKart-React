import { useEffect } from "react";
import { useSidebar, usePriceFilterSideBar } from "common/context";
import { NavBar, Footer, SideBar, ProductListing } from "components";
import "styles/ProductListingPage.css";

const ProductListingPage = () => {
    const { displaySideBar } = useSidebar();
    const { displayPriceFilterSideBar } = usePriceFilterSideBar();

    // Updating title on rendering ProductList Page comp
    useEffect(() => {
        document.title = "BlueKart - ProductList";
    }, []);

    return (
        <div>
            <NavBar linkActive="productList" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""} ${displayPriceFilterSideBar ? "overlay-priceFilterSideBar-show": "" }`}></div>
            <SideBar />
            <ProductListing />
            <Footer />
        </div>
    );
}

export { ProductListingPage };
