import { useState, useContext, createContext, useEffect } from "react";

const PriceFilterSideBarContext = createContext({ displayPriceFilterSideBar: false, handlePriceFilterSideBar: () => {} });
const usePriceFilterSideBar = () => useContext(PriceFilterSideBarContext);

const PriceFilterSideBarProvider = ({ children }) => {
    const [displayPriceFilterSideBar, setDisplayPriceFilterSideBar] = useState(false);

    const handlePriceFilterSideBar = () => {
        displayPriceFilterSideBar ? setDisplayPriceFilterSideBar(false): setDisplayPriceFilterSideBar(true);
    }

    return (
        <PriceFilterSideBarContext.Provider value={{ displayPriceFilterSideBar, handlePriceFilterSideBar }}>
            {children}
        </PriceFilterSideBarContext.Provider>
    );
}

export { usePriceFilterSideBar, PriceFilterSideBarProvider };