import React from 'react'
import "../assets/css/about-page.css"
import about_img1 from "../assets/imgs/about-1.jpg"
import about_img2 from "../assets/imgs/about-2.jpg"
import about_img3 from "../assets/imgs/about-3.jpg"
import about_img4 from "../assets/imgs/inn-chooseus.jpg"
import about_img5 from "../assets/imgs/inn-rocket.png"
import about_icon1 from "../assets/imgs/about-i-1.png"
import about_icon2 from "../assets/imgs/about-i-2.png"
import about_icon3 from "../assets/imgs/about-i-3.png"
import about_icon4 from "../assets/imgs/about-i-4.png"

function About() {
  return (
    <>
      <div className="about-us-section">
        <div className="about-us-boxtitle">
          <h3>About US</h3>
        </div>
      </div>
      <div className="about-us-boxbtn">
        <button className="about-us-button">Home // About Us</button>
      </div>
      <div className="second-section">
        <div className="left">
          <span className="imgone"><img src={ about_img1 } /></span>
          <span className="imgtwo"><img src={ about_img2 } /></span>
          <span className="imgthree"><img src={ about_img3 } /></span>
        </div>
        <div className="right">
          <span className="orange">About Us</span>
            <h2 className="h2-title">Sollicitudin Vestibulum Vulputate Ipsum.
            </h2>
            <p className="p-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <div className="stats">
              <div className="stat">
                  <h4>25 +</h4>
                  <p>Our Explorers</p>
              </div>
              <div className="stat">
                  <h4>300 +</h4>
                  <p>Destinations</p>
              </div>
              <div className="stat">
                  <h4>25 +</h4>
                  <p>Years experience</p>
              </div>

          </div>
          <div className="btn-box"><button className="button">
            Discover More
          </button></div>
        </div>
      </div>  
      <div className="third-section">
        <div className="content-third">
        <h3 className="third-section-title">Ready to travel with real adventure and enjoy natural</h3>
        <p className="third-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button className="third-btn">Start Booking</button>
      </div>
      <div className="circle-link">
        <a href="https://www.youtube.com" target="_blank"></a>
        <img className="greenimg" src="images/greenicon.png" />
    </div>
    <div className="image-container">
      <img src={about_img5} alt="Travel Image" />
    </div>
      </div>
      <div className="forth-section">
        <div className="left-forth">
          <span className="whatwedo">What We Do</span>
          <h3 className="forth-title">We Arrange the Best Tour <br />
            Ever Possible.</h3>
            <p className="p-forth">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="hline">
            <div className="kart">
              <img className="iconone" src={about_icon1} />
              <h2 className="h-row">Amazing Tour Plans</h2>
              <p className="p-row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</p>
            </div>
            <div className="kart">
              <img className="icontwo" src={about_icon2} />
              <h2 className="h-row">Easy Booking Options</h2>
              <p className="p-row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</p>
            </div>
          </div>
          <div className="hline">
            <div className="kart">
              <img className="iconthree" src={about_icon3} />
              <h2 className="h-row">Best Travel Guide</h2>
              <p className="p-row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</p>
            </div>
            <div className="kart">
              <img className="iconfour" src={about_icon4} />
              <h2 className="h-row">World Insurance Included</h2>
              <p className="p-row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</p>
            </div>
          </div>

        </div>
        <div className="right-forth">
          <img className="forth-img" src={ about_img4 } />
        </div>
      </div>
    </>
  )
}

export default About