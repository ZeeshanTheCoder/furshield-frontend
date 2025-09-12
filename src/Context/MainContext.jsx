import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Initialize userdata from localStorage if it exists
  const [userdata, setuserdata] = useState(() => {
    const storedData = localStorage.getItem('userdata');
    return storedData ? JSON.parse(storedData) : null;
  });

  // Update localStorage whenever userdata changes
  useEffect(() => {
    if (userdata) {
      localStorage.setItem('userdata', JSON.stringify(userdata));
    } else {
      localStorage.removeItem('userdata');
    }
  }, [userdata]);

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