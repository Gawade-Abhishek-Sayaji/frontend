import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../Assets/logo.png";
import vector from "../Assets/Vector.png";
import { BrowserRouter, Link } from "react-router-dom";


export default function () {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#662671",
            width: 1728,
            height: 118,
            width: "100%",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            width="80"
            height="70"
            className="d-inline-block align-text-top"
            style={{ width: 296, height: 45.96, top: 36, left: 30 }}
          />
          <span>
            <BrowserRouter>
              <Link className="nav-link active" to="/logout">
                <img
                  src={vector}
                  alt="Vector"
                  style={{ width: 50, height: 50, top: 31, left: 1621 }}
                />
              </Link>
            </BrowserRouter>
          </span>
        </div>
       
      </nav>
    </div>
  );
}
