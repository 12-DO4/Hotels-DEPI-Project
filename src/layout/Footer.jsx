import React from 'react'
import '../assets/css/footer.css'
import left_tree_path from "../assets/imgs/left-tree.png"
import right_tree_path from "../assets/imgs/right-tree.png"
import logo_path from "../assets/imgs/logo.png"

function Footer() {
  return (
    <footer>
    <div class="footer-content">
      <div class="left-bg-img-holder"><img src={left_tree_path} alt /></div>
      <div class="right-bg-img-holder"><img src={right_tree_path} alt /></div>
      
      <div class="container pt-5">
        <div class="row my-5 py-5">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="footer-content-part pe-4 mb-5">
              <div class="footer-logo">
                <a href="#"><img src={logo_path} alt="Travello Logo" /></a>
              </div>
              <p class="my-4 pe-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
              <ul class="footer-social-menu nav">
                <li>
                  <a class="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i class="flaticon-facebook-app-symbol"></i>
                  </a>
                </li>
                <li>
                  <a class="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i class="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="nav-link me-2 border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i class="flaticon-skype"></i>
                  </a>
                </li>
                <li>
                  <a class="nav-link border rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank">
                    <i class="flaticon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="footer-content-part p-0 ps-md-5 mb-5">
              <h3 class="h5 mb-3">Company:</h3>
              <ul class="navbar-nav">
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About us</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Blog update</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Our services</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Testimonial</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="footer-content-part p-0 ps-lg-5 mb-5">
              <h3 class="h5 mb-3">Quick Links:</h3>
              <ul class="navbar-nav">
                <li class="nav-item"><a href="#" class="nav-link">Privacy & policy</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Terms & conditions</a></li>
                <li class="nav-item"><a href="#" class="nav-link">FAQ</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Hydropower Plants</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Customer support</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="footer-content-part ps-0 ps-md-5 ps-lg-0 ps-xl-5 mb-5">
              <h3 class="h5 mb-4">Subscribe Newsletter:</h3>
              <form id="regForm" class="row g-3">
                <div class="email-input-field col-8 col-md-6 col-md-12">
                  <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email:" />
                </div>
                <div clasfs="submit-btn-holder col-8 col-md-6 col-md-12">
                  <button class="btn btn-secondary" type="submit">Subscribe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div class="copyrights-area d-flex align-items-between rounded-top py-4">
          <div class="container">
            <div class="row px-4">
              <div class="col-lg-6 text-center text-lg-start">
                <p class="m-0 px-2">Copyright &copy; 2024 <a href="#">Travello</a> All Right Reserved</p>
              </div>
              <div class="col-lg-6 d-none d-lg-block text-end">
                <p class="m-0">Privacy & Policy || Terms & Conditions</p>
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