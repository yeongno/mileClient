import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import auth from "../hoc/auth";
import AdminPage from "./views/AdminPage/AdminPage";
import PostManagement from "./views/AdminPage/PostManagement";
import UserManagement from "./views/AdminPage/UserManagement";
import LoginPage from "./views/Athentication/LoginPage";
import RegisterPage from "./views/Athentication/RegisterPage";
import CommunityPage from "./views/Community/CommunityPage";
import WritePost from "./views/Community/WritePost";
import Header from "./views/Header/Header";
import LandingPage from "./views/LandingPage";
import MenuBar from "./views/MenuBar/MenuBar";
import NavBar from "./views/navBar/NavBar";

function App() {
  // const isAuth = window.localStorage.getItem("name");
  const isAuth = useSelector((state) => state.user.isAuth);
  const LandingPage1 = auth(LandingPage, true);

  return (
    <BrowserRouter>
      {isAuth && <Header />}
      <NavBar />
      <MenuBar />
      <Routes>
        {isAuth && (
          <Route path="/adminPage" element={<AdminPage />}>
            <Route
              path="/adminPage/userManagement"
              element={<UserManagement />}
            />
            <Route
              path="/adminPage/postManagement"
              element={<PostManagement />}
            />
          </Route>
        )}

        <Route path="/" element={<LandingPage1 />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/writePost" element={<WritePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
