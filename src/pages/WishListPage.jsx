import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";
import { Footer } from "../components/Footer/Footer";
import { WishList } from "../components/WishList/WishList";
import { useSidebar } from "../common/context/SidebarContext";
import "../styles/WishListPage.css";

const WishListPage = () => {
    const { displaySideBar } = useSidebar();

    // Updating title on rendering WishList Page comp
    useEffect(() => {
        document.title = "BlueKart - WishList";
    }, []);

    return (
        <div>
            <NavBar linkActive="wishList" />
            <div className={`overlay-bg ${displaySideBar ? "overlay-show": ""}`}></div>
            <SideBar />
            <WishList />
            <Footer />
        </div>
    );
}

export { WishListPage };