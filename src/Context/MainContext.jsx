import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null);

  return (
    <AppContext.Provider
      value={{
        userdata,
        setuserdata,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

