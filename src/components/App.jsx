import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import auth from "../hoc/auth";
import AdminPage from "./views/AdminPage/AdminPage";
import PostManagement from "./views/AdminPage/PostManagement";
import UserManagement from "./views/AdminPage/UserManagement";
import LoginPage from "./views/Athentication/LoginPage";
import RegisterPage from "./views/Athentication/RegisterPage";
import Header from "./views/Header/Header";
import LandingPage from "./views/LandingPage";
import NavBar from "./views/navBar/NavBar";

function App() {
  const isAuth = window.localStorage.getItem("name");
  const AdminPage1 = auth(AdminPage, true);
  const LandingPage1 = auth(LandingPage, true);

  return (
    <BrowserRouter>
      {isAuth && <Header />}
      <NavBar />
      <Routes>
        <Route path="/adminPage" element={<AdminPage1 />}>
          <Route
            path="/adminPage/userManagement"
            element={<UserManagement />}
          />
          <Route
            path="/adminPage/postManagement"
            element={<PostManagement />}
          />
        </Route>
        <Route path="/" element={<LandingPage1 />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
