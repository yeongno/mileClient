import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./views/Athentication/LoginPage";
import RegisterPage from "./views/Athentication/RegisterPage";
import Header from "./views/Header/Header";
import LandingPage from "./views/LandingPage";
import NavBar from "./views/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
