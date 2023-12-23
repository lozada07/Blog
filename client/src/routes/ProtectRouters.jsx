import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthModal } from "../hooks";
import { useAuth } from "../context/AuthProvider";




const ProtectRouters = () => {
  const { onOpenLoginModal } = useAuthModal();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    onOpenLoginModal();
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectRouters;
