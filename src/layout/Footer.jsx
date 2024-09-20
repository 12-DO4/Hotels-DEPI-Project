import React from 'react'
import '../assets/css/footer.css'
import tree_left_path from "../assets/imgs/tree-left.png"
import tree_right_path from "../assets/imgs/tree-right.png"
import logo_path from "../assets/imgs/logo.png"

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
                <a href="#"><img src={ logo_path } alt="Travello Logo" /></a>
              </div>
              <p className="my-4 pe-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
              <ul className="footer-social-menu nav">
                <li>
                  <a className="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i className="flaticon-skype"></i>
                  </a>
                </li>
                <li>
                  <a className="nav-link border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part p-0 ps-md-5 mb-5">
              <h3 className="h5 mb-3">Company:</h3>
              <ul className="navbar-nav">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About us</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Blog update</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Our services</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Testimonial</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part p-0 ps-lg-5 mb-5">
              <h3 className="h5 mb-3">Quick Links:</h3>
              <ul className="navbar-nav">
                <li className="nav-item"><a href="#" className="nav-link">Privacy & policy</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Terms & conditions</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQ</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Hydropower Plants</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Customer support</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-content-part ps-0 ps-md-5 ps-lg-0 ps-xl-5 mb-5">
              <h3 className="h5 mb-4">Subscribe Newsletter:</h3>
              <form id="regForm" className="row g-3">
                <div className="email-input-field col-8 col-md-6 col-md-12">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter your Email:" />
                </div>
                <div clasfs="submit-btn-holder col-8 col-md-6 col-md-12">
                  <button className="btn btn-secondary" type="submit">Subscribe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="copyrights-area d-flex align-items-between rounded-top py-4">
          <div className="container">
            <div className="row px-4">
              <div className="col-lg-6 text-center text-lg-start">
                <p className="m-0 px-2">Copyright &copy; 2024 <a href="#">Travello</a> All Right Reserved</p>
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