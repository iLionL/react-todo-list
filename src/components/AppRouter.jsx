import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import { routers } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {/* {routers.map((router, index) => (
        <Route key={index}
          element={router.element}
          path={router.path}
          exact={router.exact}
        />
      ))} */}
      <Route path="/about" element={<About />}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route exact path="/posts/:id" element={<PostIdPage />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
      <Route path="*" element={<Navigate to ="/posts" />}/>
    </Routes>
  );
};

export default AppRouter;
