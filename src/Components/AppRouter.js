import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Home from "./Home";
import Category from "./Category";
import Products from "./Products";
import Login from "./Login";
import PrivateComponent from "./PrivateComponent";
import NavBar from "./NavBar";

export default function AppRouter() {
  return (
    <div>
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
  )
}
