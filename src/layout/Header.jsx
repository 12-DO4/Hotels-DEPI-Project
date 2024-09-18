import React from 'react'
import '../assets/css/header.css'
import logo_path from "../assets/imgs/logo.png"
import egypt_flag_path from "../assets/imgs/Egypt-Flag-icon.png"
import spanish_flag_path from "../assets/imgs/Spain-Flag-icon.png"
import usa_flag_path from "../assets/imgs/USA-Flag-icon.png"

function Header() {
  return (
    <>
      <header class="top-header d-none d-sm-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-8 col-lg-6 col-md-6 col-sm-6">
              <div class="top-header-left">
                <ul class="nav">
                  <li class="d-none d-xl-flex align-items-center">
                    <i class="flaticon-phone-call"></i>
                    <a href="tel:000967-237-96" class="nav-link d-flex align-items-center text-white p-0">
                      (000) 967-237-96
                    </a>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="flaticon-email"></i>
                    <a href="mailto:touresinfo@gmail.com" class="nav-link text-white p-0">
                      touresinfo@gmail.com
                    </a>
                  </li>
                  <li class="d-none d-xl-flex align-items-center">
                    <i class="flaticon-pin"></i>
                    <a href="https://www.google.com/maps" class="nav-link text-white p-0" target="_blank">
                      290 Grand AvenueMaitland, FL 32751
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 d-none d-sm-block">
              <div class="top-header-right">
                <div class="d-flex justify-content-end align-items-center">
                  <ul class="preferences-menu nav">
                    <li class="dropdown p-0 d-none d-xl-flex">
                      <a class="nav-link active dropdown-toggle p-0" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        $ USD
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">$ USD</a></li>
                        <li><a class="dropdown-item" href="#">£ EGP</a></li>
                        <li><a class="dropdown-item" href="#">€ EUR</a></li>
                      </ul>
                    </li>
                    <li class="dropdown language p-0 d-none d-md-flex">
                      <a class="nav-link active dropdown-toggle p-0" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        <img src={usa_flag_path} class="me-1" alt />
                        English
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            <img src={usa_flag_path} class="me-1" alt />
                            English
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <img src={egypt_flag_path} class="me-1" alt />
                            Arabic
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <img src={spanish_flag_path} class="me-1" alt />
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="header-social-menu nav">
                    <li class="p-0">
                      <a class="nav-link p-0 me-2" href="#" target="_blank">
                        <i class="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li class="p-0">
                      <a class="nav-link p-0 me-2" href="#" target="_blank">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li class="p-0">
                      <a class="nav-link p-0 me-2" href="#" target="_blank">
                        <i class="flaticon-skype"></i>
                      </a>
                    </li>
                    <li class="p-0">
                      <a class="nav-link p-0" href="#" target="_blank">
                        <i class="flaticon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <header class="bottom-header sticky-top bg-white py-2 shadow">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-6 col-md-6 col-6">
              <div class="header-logo">
                <a href="index.html">
                  <img class="img-fluid" src={ logo_path } alt="Travello Logo" />
                </a>
              </div>
            </div>
            <div class="col-xl-7 d-none d-xl-flex justify-content-center">
              <div class="main-menu text-center">
                <nav class="main-nav">
                  <ul class="main-list nav">
                    <li class="dropdown py-3 me-4">
                      <a class="nav-link active dropdown-toggle ps-2 pe-4" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Home
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#dest">Top Destinations</a></li>
                        <li><a class="dropdown-item" href="#about">About Us</a></li>
                        <li><a class="dropdown-item" href="#tours">Tours</a></li>
                        <li><a class="dropdown-item" href="#review">Review</a></li>
                        <li><a class="dropdown-item" href="#blog">Blog</a></li>
                      </ul>
                    </li>
                    <li class="dropdown py-3 me-4">
                      <a class="nav-link active dropdown-toggle ps-2 pe-4" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Tours
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="tour-grid.html">Tour</a></li>
                        <li><a class="dropdown-item" href="#">Tour Singe</a></li>
                      </ul>
                    </li>
                    <li class="dropdown py-3 me-4">
                      <a class="nav-link active dropdown-toggle ps-2 pe-4" href="#" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Pages
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">About</a></li>
                        <li><a class="dropdown-item" href="#">Event Grid</a></li>
                        <li><a class="dropdown-item" href="#">Event List</a></li>
                        <li><a class="dropdown-item" href="#">Event Details</a></li>
                        <li><a class="dropdown-item" href="#">Prtfolio</a></li>
                        <li><a class="dropdown-item" href="#">Gallery</a></li>
                        <li><a class="dropdown-item" href="#">Team</a></li>
                        <li><a class="dropdown-item" href="#">Team Details</a></li>
                        <li><a class="dropdown-item" href="#">Testimonial</a></li>
                        <li><a class="dropdown-item" href="#">Shop</a></li>
                        <li><a class="dropdown-item" href="#">Shop Details</a></li>
                        <li><a class="dropdown-item" href="#">Cart</a></li>
                        <li><a class="dropdown-item" href="#">Checkout</a></li>
                        <li><a class="dropdown-item" href="#">Sign In</a></li>
                        <li><a class="dropdown-item" href="#">Sign Up</a></li>
                        <li><a class="dropdown-item" href="#">Error</a></li>
                      </ul>
                    </li>
                    <li class="py-3 me-4">
                      <a class="nav-link px-2" href="#">Destination</a>
                    </li>
                    <li class="py-3 me-4">
                      <a class="nav-link px-2" href="#">Blog</a>
                    </li>
                    <li class="py-3">
                      <a class="nav-link px-2" href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-6">
              <div class="bottom-header-right d-flex justify-content-end align-items-center">
                <div class="search-icon-holder me-4 me-xl-4">
                  <button class="btn p-2"><i class="flaticon-search-interface-symbol"></i></button>
                </div>
                <div class="shop-icon-holder me-4 me-xl-4 d-none d-md-block">
                  <a href="#" class="btn border rounded-circle px-2 py-1"><i class="flaticon-bag"></i></a>
                </div>
                <div class="contact-btn-holder me-4 me-xl-0 d-none d-md-block">
                  <a href="#" class="btn btn-secondary p-3">Contact Us</a>
                </div>
                <div class="menu-toggler-btn-holder d-xl-none">
                  <button class="btn btn-secondary p-3">
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