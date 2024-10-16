import React from 'react'
import '../assets/css/about-sec.css'
import firstImg from '../assets/imgs/about-1.jpg'
import secondImg from '../assets/imgs/about-2.jpg'
import thirdImg from '../assets/imgs/about-3.jpg'
import { Link } from 'react-router-dom'

function AboutSec() {
  return (
      <>
        <section className="about py-5 d-flex align-items-center" id="about">
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="row gallery">
                  <div className="col-12 img-holder text-center">
                    <img src={ firstImg } className="rounded-4 img-fluid" alt="image 1" />
                  </div>
                  <div className="col-6 img-holder text-end d-none d-lg-block pe-0">
                    <img src={ secondImg } className="border border-white border-5 rounded-4 img-fluid" alt="image 2" />
                  </div>
                  <div className="col-6 img-holder text-start d-none d-lg-block ps-0">
                    <img src={ thirdImg } className="rounded-4 img-fluid" alt="image 3" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text">
                  <div className="main-heading">
                    <span>About Company</span>
                    <h3 className="m-0 mt-3 fs-1 ">Sollicitudin Vestibulum Vulputate Ipsum</h3>
                  </div>
                  <p className="about-details my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat autem quisquam cumque, dolorum consequatur earumexpedita, necessitatibus ipsam perspiciatis excepturi delectusbeatae at voluptatum doloribus incidunt quas quae porrosoluta.</p>
                  <ul className="about-menu nav">
                    <li className="nav-item mb-4">
                      <div className="row me-2 align-items-center">
                        <div className="col-3 col-sm-2 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="flaticon-worker p-3 rounded-circle"></i>
                        </div>
                        <div className="col-9 col-sm-8">
                          <h5 className="mb-2">Safety First Always</h5>
                          <p className="m-0">Duis aute irure dolor in reprehenderit involupate velitesse cilum dolore</p>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item mb-5">
                      <div className="row me-2 align-items-center">
                        <div className="col-3 col-sm-2 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="flaticon-tour-guide p-3 rounded-circle"></i>
                        </div>
                        <div className="col-9 col-sm-8">
                          <h5 className="mb-2">Safety First Always</h5>
                          <p className="m-0">Duis aute irure dolor in reprehenderit involupate velitesse cilum dolore</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Link to={'/about'} className="btn btn-secondary py-3 px-4">Discover More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default AboutSec