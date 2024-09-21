import React from 'react'
import '../assets/css/header.css'
import logo_path from "../assets/imgs/logo.png"
import flag_egypt_path from "../assets/imgs/flag-egypt.png"
import flag_spanish_path from "../assets/imgs/flag-spain.png"
import flag_usa_path from "../assets/imgs/flag-usa.png"

function Header() {
  return (
    <>
      <header className="top-header d-none d-sm-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6 col-md-6 col-sm-6">
              <div className="top-header-left">
                <ul className="nav">
                  <li className="d-none d-xl-flex align-items-center">
                    <i className="flaticon-phone-call"></i>
                    <a href="tel:000967-237-96" className="nav-link d-flex align-items-center text-white p-0">
                      (000) 967-237-96
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="flaticon-email"></i>
                    <a href="mailto:touresinfo@gmail.com" className="nav-link text-white p-0">
                      touresinfo@gmail.com
                    </a>
                  </li>
                  <li className="d-none d-xl-flex align-items-center">
                    <i className="flaticon-pin"></i>
                    <a href="https://www.google.com/maps" className="nav-link text-white p-0" target="_blank">
                      290 Grand AvenueMaitland, FL 32751
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 d-none d-sm-block">
              <div className="top-header-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ul className="preferences-menu nav">
                    <li className="dropdown p-0 d-none d-xl-flex">
                      <a className="nav-link active dropdown-toggle p-0" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        $ USD
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">$ USD</a></li>
                        <li><a className="dropdown-item" href="#">£ EGP</a></li>
                        <li><a className="dropdown-item" href="#">€ EUR</a></li>
                      </ul>
                    </li>
                    <li className="dropdown language p-0 d-none d-md-flex">
                      <a className="nav-link active dropdown-toggle p-0" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        <img src={ flag_usa_path } className="me-1" alt="USA Flag" />
                        English
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src={ flag_usa_path } className="me-1" alt = "USA Flag" />
                            English
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src={ flag_egypt_path } className="me-1" alt = "Egypt Flag" />
                            Arabic
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src={ flag_spanish_path } className="me-1" alt="Spain Flag" />
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="header-social-menu nav">
                    <li className="p-0">
                      <a className="nav-link p-0 me-2" href="#" target="_blank">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li className="p-0">
                      <a className="nav-link p-0 me-2" href="#" target="_blank">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li className="p-0">
                      <a className="nav-link p-0 me-2" href="#" target="_blank">
                        <i className="flaticon-skype"></i>
                      </a>
                    </li>
                    <li className="p-0">
                      <a className="nav-link p-0" href="#" target="_blank">
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <header className="bottom-header sticky-top bg-white py-2 shadow">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-6">
              <div className="header-logo">
                <a href="#">
                  <img className="img-fluid" src={ logo_path } alt="Travello Logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-7 d-none d-xl-flex justify-content-center">
              <div className="main-menu text-center">
                <nav className="main-nav">
                  <ul className="main-list nav">
                    <li className="dropdown py-3 me-4">
                      <a className="nav-link active dropdown-toggle ps-2 pe-4" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Top Destinations</a></li>
                        <li><a className="dropdown-item" href="#">About Us</a></li>
                        <li><a className="dropdown-item" href="#">Tours</a></li>
                        <li><a className="dropdown-item" href="#">Review</a></li>
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                      </ul>
                    </li>
                    <li className="dropdown py-3 me-4">
                      <a className="nav-link active dropdown-toggle ps-2 pe-4" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Tours
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="tour-grid.html">Tour</a></li>
                        <li><a className="dropdown-item" href="#">Tour Singe</a></li>
                      </ul>
                    </li>
                    <li className="dropdown py-3 me-4">
                      <a className="nav-link active dropdown-toggle ps-2 pe-4" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Event Grid</a></li>
                        <li><a className="dropdown-item" href="#">Event List</a></li>
                        <li><a className="dropdown-item" href="#">Event Details</a></li>
                        <li><a className="dropdown-item" href="#">Prtfolio</a></li>
                        <li><a className="dropdown-item" href="#">Gallery</a></li>
                        <li><a className="dropdown-item" href="#">Team</a></li>
                        <li><a className="dropdown-item" href="#">Team Details</a></li>
                        <li><a className="dropdown-item" href="#">Testimonial</a></li>
                        <li><a className="dropdown-item" href="#">Shop</a></li>
                        <li><a className="dropdown-item" href="#">Shop Details</a></li>
                        <li><a className="dropdown-item" href="#">Cart</a></li>
                        <li><a className="dropdown-item" href="#">Checkout</a></li>
                        <li><a className="dropdown-item" href="#">Sign In</a></li>
                        <li><a className="dropdown-item" href="#">Sign Up</a></li>
                        <li><a className="dropdown-item" href="#">Error</a></li>
                      </ul>
                    </li>
                    <li className="py-3 me-4">
                      <a className="nav-link px-2" href="#">Destination</a>
                    </li>
                    <li className="py-3 me-4">
                      <a className="nav-link px-2" href="#">Blog</a>
                    </li>
                    <li className="py-3">
                      <a className="nav-link px-2" href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-6">
              <div className="bottom-header-right d-flex justify-content-end align-items-center">
                <div className="search-icon-holder me-4 me-xl-4">
                  <button className="btn p-2"><i className="flaticon-search-interface-symbol"></i></button>
                </div>
                <div className="shop-icon-holder me-4 me-xl-4 d-none d-md-block">
                  <a href="#" className="btn border rounded-circle px-2 py-1"><i className="flaticon-bag"></i></a>
                </div>
                <div className="contact-btn-holder me-4 me-xl-0 d-none d-md-block">
                  <a href="#" className="btn btn-secondary p-3">Contact Us</a>
                </div>
                <div className="menu-toggler-btn-holder d-xl-none">
                  <button className="btn btn-secondary p-3">
                    <i></i>
                    <i></i>
                    <i></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header