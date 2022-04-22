import { useEffect } from "react";
import { useSidebar } from "common/context";
import { NavBar, SideBar, Footer, CartList } from "components";
import "styles/CartPage.css";

const CartPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering Cart Page comp
    useEffect(() => {
        document.title = "BlueKart - CartPage";
    }, []);

    return (
        <div>
            <NavBar linkActive="cart" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <CartList />
            <Footer />
        </div>
    );
}

export { CartPage };