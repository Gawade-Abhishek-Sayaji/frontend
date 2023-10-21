import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import HomeLogo from '../Assets/HomeLogo.png'
import CategoryLogo from '../Assets/CategoryLogo.png'
import ProductsLogo from '../Assets/ProductsLogo.png'


export default function SideBar () {
    const user=JSON.parse(localStorage.getItem('user'))
  return (
    <div>
         <div className="container-fluid" style={{ display: "content" }}>
          <div className="row">
            <div className="col-md-3" style={{ width: "0%" }}>
              <div
                className="sidebar"
                style={{
                  backgroundColor: "#F4F4F4",
                  height: "100%",
                  width: "448px",
                  height: "1117px",
                  
                }}
              >
                <BrowserRouter>
                  <ul
                    className="navbar-nav me-auto mb-2 mb-lg-0"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "0px",
                      textAlign: "center",
                    }}
                  >
                    <li className="nav-item">
                      <Link className="nav-link active" to="/home">
                        <img
                          src={HomeLogo}
                          alt="HomeLogo"
                          style={{
                            marginRight: "20px",
                            width: "30px",
                            height: "30px",
                            top: "269px",
                            left: "30px",
                          }}
                        />
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/category">
                        <img
                          src={CategoryLogo}
                          alt="HomeLogo"
                          style={{
                            marginRight: "20px",
                            width: "30px",
                            height: "30px",
                            top: "269px",
                            left: "30px",
                          }}
                        />
                        Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/products">
                        <img
                          src={ProductsLogo}
                          alt="HomeLogo"
                          style={{
                            marginRight: "20px",
                            width: "30px",
                            height: "30px",
                            top: "269px",
                            left: "30px",
                          }}
                        />
                        Products
                      </Link>
                    </li>
                  </ul>
                </BrowserRouter>
              </div>
            </div>
            <div className="col-md-9" style={{ width: "100%" }}></div>
          </div>
        </div>
    </div>
  )
}
