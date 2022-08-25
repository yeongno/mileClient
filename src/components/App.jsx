import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

  return (
    <BrowserRouter>
      {isAuth && <Header />}
      <NavBar />
      <Routes>
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
        <Route path="/" element={<LandingPage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
