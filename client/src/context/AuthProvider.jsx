import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: null,
  isLoading: true,
  saveUser: () => {},
  user: {},
  logout: () => {},
  reloadPage: () => {},
});

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);

  function reloadPage() {
    setReload(!reload);
  }

  function logout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  async function checkAuth() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
    } else {
      const res = await fetch(`${BACKEND_URL}/api/v1/auth/verifyToken`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      const { data, error } = await res.json();
      if (error) {
        setIsAuthenticated(false);
      } else {
        setUser(data);
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    checkAuth();
  }, [reload]);

  const saveUser = (token, user) => {
    setUser(user);
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, saveUser, user, logout, isLoading, reloadPage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
