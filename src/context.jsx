import React, { useContext }  from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value="rijul">{children}</AppContext.Provider>;
};

const GlobalProvider = () => {
    return useContext(AppProvider);
};

export { AppContext, AppProvider, GlobalProvider };