import React from "react";
import Header from '../layout/Header'
import Breadcrumb from "../layout/Breadcrumb";
import '../assets/css/about-sec.css'
import Footer from '../layout/Footer'
import BtnTop from '../layout/BtnTop'
import about_img1 from "../assets/imgs/about-1.jpg";
import about_img2 from "../assets/imgs/about-2.jpg";
import about_img3 from "../assets/imgs/about-3.jpg";
import about_img4 from "../assets/imgs/inn-chooseus.jpg";
import about_video_banner from "../assets/imgs/about-video-bg.jpg";
import about_img5 from "../assets/imgs/inn-rocket.png";
import about_icon1 from "../assets/imgs/about-i-1.png";
import about_icon2 from "../assets/imgs/about-i-2.png";
import about_icon3 from "../assets/imgs/about-i-3.png";
import about_icon4 from "../assets/imgs/about-i-4.png";
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <Header />

      <main>
        <Breadcrumb pageName={"About Us"} />

        <section className="about py-5 d-flex align-items-center">
          <div className="container my-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="row gallery">
                  <div className="col-12 img-holder text-center">
                    <img src={ about_img1 } className="rounded-4 img-fluid" alt="image 1" />
                  </div>
                  <div className="col-6 img-holder text-end d-none d-lg-block pe-0">
                    <img src={ about_img2 } className="border border-white border-5 rounded-4 img-fluid" alt="image 2" />
                  </div>
                  <div className="col-6 img-holder text-start d-none d-lg-block ps-0">
                    <img src={ about_img3 } className="rounded-4 img-fluid" alt="image 3" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text">
                  <div className="main-heading">
                    <span>About Company</span>
                    <h3 className="m-0 mt-3 fs-1">Sollicitudin Vestibulum Vulputate Ipsum</h3>
                  </div>
                  <p className="about-details my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat autem quisquam cumque, dolorum consequatur earumexpedita, necessitatibus ipsam perspiciatis excepturi delectusbeatae at voluptatum doloribus incidunt quas quae porrosoluta.</p>
                  <div className="numbers mb-4">
                    <div className="row">
                      <div className="col-md-4 border-0 border-end border-dashed">
                        <span className="fw-bolder fs-3">25+</span>
                        <br />
                        <span>Our Explorers</span>
                      </div>
                      <div className="col-md-4 border-0 border-end border-dashed">
                        <span className="fw-bolder fs-3">300+</span>
                        <br />
                        <span>Destinations</span>
                      </div>
                      <div className="col-md-4 border-0 border-end border-dashed">
                        <span className="fw-bolder fs-3">25+</span>
                        <br />
                        <span>Years experience</span>
                      </div>
                    </div>
                  </div>
                  <Link to={'/about'} className="btn btn-secondary py-3 px-4">Discover More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-previewer position-relative py-5" style={{ color: 'white', background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${about_video_banner}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-6">
                <h3 className="m-0 my-3 fs-1">
                  Ready to travel with real adventure and enjoy natural
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </p>
                <Link to={'/tours'} className="btn btn-secondary py-3 px-4">Start Booking</Link>
              </div>
              <div className="mt-5 mt-lg-0 col-lg-4 col-xl-3 d-flex align-items-center justify-content-center">
                <a href="https://youtu.be/8mSG40o-iJ0?si=6y9-2HDX0HCB8_aZ" target="_blank" className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                  <i className="fa-solid fa-play sec-clr"></i>
                </a>
              </div>
            </div>
            <div className="image-holder position-absolute bottom-0 end-0 d-none d-xl-block">
              <img src={about_img5} alt="Travel Image" />
            </div>
          </div>
        </section>

        <section className="py-5 d-flex align-items-center">
          <div className="container my-5">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="about-text">
                  <div className="main-heading">
                    <span>What We Do</span>
                    <h3 className="m-0 mt-3 fs-1">We Arrange the Best Tour Ever Possible.</h3>
                  </div>
                  <p className="about-details my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="features mb-4">
                    <div className="row">
                      <div className="col-md-6 my-3">
                        <div className="feat-icon mb-2">
                          <img src={ about_icon1 } alt="feature icon 1" style={{ width: "50px", height: "50px" }} />
                        </div>
                        <span className="fw-bolder">Amazing Tour Plans</span><br />
                        <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</small>
                      </div>
                      <div className="col-md-6 my-3">
                        <div className="feat-icon mb-2">
                          <img src={ about_icon2 } alt="feature icon 2" style={{ width: "50px", height: "50px" }} />
                        </div>
                        <span className="fw-bolder">Easy Booking Options</span><br />
                        <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</small>
                      </div>
                      <div className="col-md-6 my-3">
                        <div className="feat-icon mb-2">
                          <img src={ about_icon3 } alt="feature icon 3" style={{ width: "50px", height: "50px" }} />
                        </div>
                        <span className="fw-bolder">Best Travel Guide</span><br />
                        <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</small>
                      </div>
                      <div className="col-md-6 my-3">
                        <div className="feat-icon mb-2">
                          <img src={ about_icon4 } alt="feature icon 4" style={{ width: "50px", height: "50px" }} />
                        </div>
                        <span className="fw-bolder">World Insurance Included</span><br />
                        <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-lg-0">
                <div className="img-holder d-flex justify-content-center">
                  <img src={ about_img4 } alt="service image" className="img-fluid rounded-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BtnTop />
    </>
  );
}

export default About;
