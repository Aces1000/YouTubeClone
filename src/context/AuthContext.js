import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const state = useState(false);
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
