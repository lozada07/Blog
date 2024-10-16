import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectRouters from "./ProtectRouters";
import {
  Home,
  CreatePosts,
  DetailPost,
  Contact,
  MyPosts,
  PageNotFound,
} from "../pages";
import UpdatePost from "../pages/UpdatePosts";

const IndexRouters = () => {
  return (
    <Routes>
      <Route path="/" id="home" element={<Home />} />
      <Route path="/post/:id" id="create-post" element={<DetailPost />} />
      <Route path="/contact" id="contact" element={<Contact />} />
      //ProtectRouters
      <Route element={<ProtectRouters />}>
        <Route path="/post" id="create-post" element={<CreatePosts />} />
        <Route path="/MyPosts" id="contact" element={<MyPosts />} />

        <Route path="/postEdit/:id" id="update-post" element={<UpdatePost />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default IndexRouters;
