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
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado de carga
  const [reload, setReload] = useState(true); // Nuevo estado de carga

  function reloadPage() {
    // console.log("hola")
    setReload(!reload);
  }

  function logout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    console.log(user);
  }

  async function checkAuth() {
    setIsLoading(true); // Inicia la carga
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
    } else {
      const res = await fetch(`${BACKEND_URL}/api/v1/auth/verifyToken`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      const { data, error } = await res.json();
      if (error) {
        setIsAuthenticated(false);
      } else {
        console.log(data);
        setUser(data);
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false); // Finaliza la carga
  }

  useEffect(() => {
    checkAuth();
  }, [reload]);

  const saveUser = (token, user) => {
    setUser(user);
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  // Pasa isLoading al contexto
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, saveUser, user, logout, isLoading, reloadPage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
