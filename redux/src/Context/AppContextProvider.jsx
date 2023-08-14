import React, { useState } from "react";


export const AppContext = React.createContext();

function AppContextProvider({ children }) {


    const token = localStorage.getItem('token');

  return (
    <AppContext.Provider value={{ token }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;