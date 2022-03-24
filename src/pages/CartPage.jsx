import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";
import { Footer } from "../components/Footer/Footer";
import { useSidebar } from "../common/context/SidebarContext";
import { CartList } from "../components/Cart/CartList";
import "../styles/CartPage.css";

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