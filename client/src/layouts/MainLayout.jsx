import React from "react";
import { Navbar } from "../components/Navbar";
import IndexRouters from "../routes/IndexRouters";
import AuthModal from "../components/AuthModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <AuthModal />
      <ToastContainer autoClose={2000} />
      <div className="container mx-auto  md:px-16 my-32 ">
        <IndexRouters />
      </div>
      <Footer  />
    </>
  );
};

export default MainLayout;
