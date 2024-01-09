import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const navigationHandler = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <MenuContext.Provider value={{ showSidebar, navigationHandler }}>
            {children}
        </MenuContext.Provider>
    )
}


export const useMenu = () => {
    return useContext(MenuContext)
}