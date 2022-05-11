import { useEffect } from "react";
import { useSidebar } from "common/context";
import { NavBar, Footer, SideBar, SingleProductCard } from "components";
import "styles/ProductPage.css";

const ProductPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Product Page comp
    useEffect(() => {
        document.title = "BlueKart - Product";
    }, []);

    return (
        <div>
            <NavBar linkActive="productList" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <SingleProductCard />
            <Footer />
        </div>
    );
}

export { ProductPage };
