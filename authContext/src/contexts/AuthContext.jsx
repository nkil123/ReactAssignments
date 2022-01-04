import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("");

  // const handleLogin =()=>{

  // }
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
