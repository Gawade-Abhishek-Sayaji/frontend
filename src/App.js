import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Products from "./Components/Products";
import Login from "./Components/Login";
import PrivateComponent from "./Components/PrivateComponent";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App" style={{ display: "contents" }}>
        <div style={{ display: "contents" }}>
        <NavBar />
        <div style={{ display: "inline-block", marginLeft: "0px" }}>
          <SideBar />
        </div>
        <div style={{ display: "inline-block" }}>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/products" element={<Products />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
