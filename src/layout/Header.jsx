import React from 'react'
import '../assets/css/header.css'
import logo_path from "../assets/imgs/logo.png"
import flag_egypt_path from "../assets/imgs/flag-egypt.png"
import flag_spanish_path from "../assets/imgs/flag-spain.png"
import flag_usa_path from "../assets/imgs/flag-usa.png"
import { Link } from 'react-router-dom'

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
                      <Link className="nav-link active dropdown-toggle p-0" to={'/'} data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        $ USD
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={'/'}>$ USD</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>£ EGP</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>€ EUR</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown language p-0 d-none d-md-flex">
                      <Link className="nav-link active dropdown-toggle p-0" to={'/'} data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        <img src={ flag_usa_path } className="me-1" alt="USA Flag" />
                        English
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={'/'}>
                            <img src={ flag_usa_path } className="me-1" alt = "USA Flag" />
                            English
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={'/'}>
                            <img src={ flag_egypt_path } className="me-1" alt = "Egypt Flag" />
                            Arabic
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={'/'}>
                            <img src={ flag_spanish_path } className="me-1" alt="Spain Flag" />
                            Spanish
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="header-social-menu nav">
                    <li className="p-0">
                      <Link className="nav-link p-0 me-2" to={'/'} target="_blank">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </Link>
                    </li>
                    <li className="p-0">
                      <Link className="nav-link p-0 me-2" to={'/'} target="_blank">
                        <i className="flaticon-twitter"></i>
                      </Link>
                    </li>
                    <li className="p-0">
                      <Link className="nav-link p-0 me-2" to={'/'} target="_blank">
                        <i className="flaticon-skype"></i>
                      </Link>
                    </li>
                    <li className="p-0">
                      <Link className="nav-link p-0" to={'/'} target="_blank">
                        <i className="flaticon-linkedin"></i>
                      </Link>
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
                <Link to={'/'}>
                  <img className="img-fluid" src={ logo_path } alt="Travello Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-7 d-none d-xl-flex justify-content-center">
              <div className="main-menu text-center">
                <nav className="main-nav">
                  <ul className="main-list nav">
                    <li className="dropdown py-3 me-4">
                      <Link className="nav-link active dropdown-toggle ps-2 pe-4" to={'/'} data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Home
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={'/#dest'}>Top Destinations</Link></li>
                        <li><Link className="dropdown-item" to={'/#about'}>About Us</Link></li>
                        <li><Link className="dropdown-item" to={'/#tours'}>Tours</Link></li>
                        <li><Link className="dropdown-item" to={'/#review'}>Review</Link></li>
                        <li><Link className="dropdown-item" to={'/#blog'}>Blog</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown py-3 me-4">
                      <Link className="nav-link active dropdown-toggle ps-2 pe-4" to={'/tours'} data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Tours
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={'/tours'}>Tour</Link></li>
                        <li><Link className="dropdown-item" to={'/tours'}>Tour Singe</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown py-3 me-4">
                      <Link className="nav-link active dropdown-toggle ps-2 pe-4" to={'/'} data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                        Pages
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={'/about'}>About</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Event Grid</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Event List</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Event Details</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Portfolio</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Gallery</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Team</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Team Details</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Testimonial</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Shop</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Shop Details</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Cart</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Checkout</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Sign In</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Sign Up</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Error</Link></li>
                      </ul>
                    </li>
                    <li className="py-3 me-4">
                      <Link className="nav-link px-2" to={'/'}>Destination</Link>
                    </li>
                    <li className="py-3 me-4">
                      <Link className="nav-link px-2" to={'/posts'}>Blog</Link>
                    </li>
                    <li className="py-3">
                      <Link className="nav-link px-2" to={'/'}>Contact</Link>
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
                  <Link to={'/'} className="btn border rounded-circle px-2 py-1"><i className="flaticon-bag"></i></Link>
                </div>
                <div className="contact-btn-holder me-4 me-xl-0 d-none d-md-block">
                  <Link to={'/'} className="btn btn-secondary p-3">Contact Us</Link>
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