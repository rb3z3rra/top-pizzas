import React, { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { userLogged, loading, loginUser, logoutUser, getUser } = useAuth();

  if (loading) {
    // se loading ainda não false fica carregando
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider value={{ userLogged, loginUser, logoutUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
