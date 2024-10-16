import React from 'react'
import '../assets/css/footer.css'
import tree_left_path from "../assets/imgs/tree-left.png"
import tree_right_path from "../assets/imgs/tree-right.png"
import logo_path from "../assets/imgs/logo.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <div className="footer-content">
      <div className="left-bg-img-holder"><img src={ tree_left_path } alt="left tree" /></div>
      <div className="right-bg-img-holder"><img src={ tree_right_path } alt="right tree" /></div>
      
      <div className="container pt-5">
        <div className="row my-5 py-5">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part pe-4 mb-5">
              <div className="footer-logo">
                <Link to={'/'}><img src={ logo_path } alt="Travello Logo" /></Link>
              </div>
              <p className="my-4 pe-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
              <ul className="footer-social-menu nav">
                <li>
                  <Link className="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" to={'/'} target="_blank">
                    <i className="flaticon-facebook-app-symbol"></i>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" to={'/'} target="_blank">
                    <i className="flaticon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" to={'/'} target="_blank">
                    <i className="flaticon-skype"></i>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link border rounded-circle d-flex justify-content-center align-items-center" to={'/'} target="_blank">
                    <i className="flaticon-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part p-0 ps-md-5 mb-5">
              <h3 className="h5 mb-3">Company:</h3>
              <ul className="navbar-nav">
                <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">About us</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">Blog update</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">Our services</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">Testimonial</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part p-0 ps-lg-5 mb-5">
              <h3 className="h5 mb-3">Quick Links:</h3>
              <ul className="navbar-nav">
                <li className="nav-item"><Link to={'/'} className="nav-link">Privacy & policy</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">Terms & conditions</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">FAQ</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">Hydropower Plants</Link></li>
                <li className="nav-item"><Link to={'/'} className="nav-link">Customer support</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part ps-0 ps-md-5 ps-lg-0 ps-xl-5 mb-5">
              <h3 className="h5 mb-4">Subscribe Newsletter:</h3>
              <form id="regForm" className="row g-3">
                <div className="email-input-field col-8 col-md-6 col-md-12">
                  <input type="email" className="form-control p-3" id="email" name="email" placeholder="Enter your Email:" />
                </div>
                <div clasfs="submit-btn-holder col-8 col-md-6 col-md-12">
                  <button className="btn btn-secondary p-3" type="submit">Subscribe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="copyrights-area d-flex align-items-between rounded-top py-4">
          <div className="container">
            <div className="row px-4">
              <div className="col-lg-6 text-center text-lg-start">
                <p className="m-0 px-2">Copyright &copy; 2024 <Link to={'/'}>Travello</Link> All Right Reserved</p>
              </div>
              <div className="col-lg-6 d-none d-lg-block text-end">
                <p className="m-0">Privacy & Policy || Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer