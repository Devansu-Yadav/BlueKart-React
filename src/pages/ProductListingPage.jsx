import { useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { SideBar } from "../components/SideBar/SideBar";
import { useSidebar } from "../common/context/SidebarContext";
import { usePriceFilterSideBar } from "../common/context/PriceFilterSideBarContext";
import { ProductListing } from "../components/ProductList/ProductList";
import "../styles/ProductListingPage.css";

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