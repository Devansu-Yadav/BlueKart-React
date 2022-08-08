import { useEffect } from "react";
import { useSidebar } from "common/context";
import { NavBar, SideBar, Footer, WishList } from "components";
import "styles/WishListPage.css";

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
