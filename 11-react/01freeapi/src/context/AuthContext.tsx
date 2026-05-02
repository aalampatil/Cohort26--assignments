import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthContextProvider = ({ children }: any) => {

  const [user, setUser] = useState<string | null>()
  const [authStatus, setAuthStatus] = useState(false)

  const register = async (payload: any) => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(payload), // ✅ FIX
        }
      );

      const data = await response.json();
      setUser(data);
      setAuthStatus(true); // ✅ mark logged in
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (payload: any) => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(payload), // ✅ FIX
        }
      );

      const data = await response.json();
      setUser(data);
      setAuthStatus(true); // ✅ mark logged in
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await fetch("https://api.freeapi.app/api/v1/users/logout", {
        method: "POST",
        headers: { accept: "application/json" },
      });

      setUser(null);
      setAuthStatus(false); // ✅ logout state
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    user,
    authStatus,
    setAuthStatus,
    setUser,
    register,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}