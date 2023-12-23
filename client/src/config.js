export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getToken = () => {
  return localStorage.getItem("token");
};
