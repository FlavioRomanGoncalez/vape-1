// STYLE
import "./App.css";

// COMPONENTS
import Main from "./pages/Main";
import ListPage from "./pages/List";
import MenuPage from "./pages/Menu";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import AuthenticationPage from "./pages/Authentication";

// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/client" element={<ListPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
