import React from 'react'
import '../assets/css/aboutUs-sec.css'
import firstImg from '../assets/imgs/img-1.jpg'
import secondImg from '../assets/imgs/img-3.jpg'
import thirdImg from '../assets/imgs/img-4.jpg'

function AboutUsSection() {
  return (
      <>
      <section class="about-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="gallery-photos">
                <div class="first-img">
                  <img src={firstImg} alt="" />
                </div>
                <div class="second-img">
                  <img src={secondImg} alt="" />
                </div>
                <div class="third-img">
                  <img src={thirdImg} alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="about-header-text">
                <h4>About Company</h4>
                <p>Sollicitudin Vestibulum Vulputate Ipsum</p>
              </div>
              <div class="about-content-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat autem quisquam cumque, dolorum consequatur earum
                  expedita, necessitatibus ipsam perspiciatis excepturi delectus
                  beatae at voluptatum doloribus incidunt quas quae porro
                  soluta.
                </p>
              </div>
              <div class="about-list">
                <ul>
                  <li class="d-flex">
                    <i class="flaticon-worker"></i>
                    <div class="list-text">
                      <h5>Safety First Always</h5>
                      <p>
                        Duis aute irure dolor in reprehenderit involupate velit
                        esse cilum dolore
                      </p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <i class="flaticon-tour-guide"></i>
                    <div class="list-text">
                      <h5>Safety First Always</h5>
                      <p>
                        Duis aute irure dolor in reprehenderit involupate velit
                        esse cilum dolore
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <button class="btn primary-btn">Discover More</button>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default AboutUsSection