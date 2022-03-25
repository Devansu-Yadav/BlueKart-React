import { useState, useContext, createContext, useEffect } from "react";

const SidebarContext = createContext({ displaySideBar: false, setDisplaySideBar: () => { } });
const useSidebar = () => useContext(SidebarContext);

const SideBarProvider = ({ children }) => {
    const [displaySideBar, setDisplaySideBar] = useState(false);

    useEffect(() => {
        if (displaySideBar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [displaySideBar]);

    return (
        <SidebarContext.Provider value={{ displaySideBar, setDisplaySideBar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export { useSidebar, SideBarProvider };