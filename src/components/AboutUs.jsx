import React from "react";
import "../assets/css/style.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import "../assets/css/flaticon_travel-and-tour.css";
import "../assets/css/change-defaults.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Importing images
import imgOne from "../assets/imgs/img1.jpg";
import imgTwo from "../assets/imgs/img2.jpg";
import imgThree from "../assets/imgs/img3.jpg";
import greenIcon from "../assets/imgs/greenicon.png";
import innRocket from "../assets/imgs/inn-rocket.png";
import iconOne from "../assets/imgs/iconone.png";
import iconTwo from "../assets/imgs/icontwo.png";
import iconThree from "../assets/imgs/iconthree.png";
import iconFour from "../assets/imgs/iconfour.png";
import chooseUs from "../assets/imgs/inn-chooseus1.jpg";

function Aboutus() {
  return (
    <div>
      {/* About Us Section */}
      <div className="about-us-section">
        <div className="about-us-boxtitle">
          <h3>About US</h3>
        </div>
      </div>

      <div className="about-us-boxbtn">
        <button className="about-us-button">Home // About Us</button>
      </div>

      {/* Second Section */}
      <div className="second-section">
        <div className="left">
          <span className="imgone">
            <img src={imgOne} alt="Image 1" />
          </span>
          <span className="imgtwo">
            <img src={imgTwo} alt="Image 2" />
          </span>
          <span className="imgthree">
            <img src={imgThree} alt="Image 3" />
          </span>
        </div>

        <div className="right">
          <span className="orange">About Us</span>
          <h2 className="h2-title">Sollicitudin Vestibulum Vulputate Ipsum.</h2>
          <p className="p-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
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

          <div className="btn-box">
            <button className="button">Discover More</button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="third-section">
        <div className="content-third">
          <h3 className="third-section-title">
            Ready to travel with real adventure and enjoy natural
          </h3>
          <p className="third-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className="third-btn">Start Booking</button>
        </div>

        <div className="circle-link">
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img className="greenimg" src={greenIcon} alt="Green Icon" />
          </a>
        </div>

        <div className="image-container">
          <img src={innRocket} alt="Travel Image" />
        </div>
      </div>

      {/* Fourth Section */}
      <div className="forth-section">
        <div className="left-forth">
          <span className="whatwedo">What We Do</span>
          <h3 className="forth-title">
            We Arrange the Best Tour <br />
            Ever Possible.
          </h3>
          <p className="p-forth">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hline">
            <div className="kart">
              <img className="iconone" src={iconOne} alt="Icon One" />
              <h2 className="h-row">Amazing Tour Plans</h2>
              <p className="p-row">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do..
              </p>
            </div>
            <div className="kart">
              <img className="icontwo" src={iconTwo} alt="Icon Two" />
              <h2 className="h-row">Easy Booking Options</h2>
              <p className="p-row">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do..
              </p>
            </div>
          </div>

          <div className="hline">
            <div className="kart">
              <img className="iconthree" src={iconThree} alt="Icon Three" />
              <h2 className="h-row">Best Travel Guide</h2>
              <p className="p-row">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do..
              </p>
            </div>
            <div className="kart">
              <img className="iconfour" src={iconFour} alt="Icon Four" />
              <h2 className="h-row">World Insurance Included</h2>
              <p className="p-row">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do..
              </p>
            </div>
          </div>
        </div>

        <div className="right-forth">
          <img className="forth-img" src={chooseUs} alt="Fourth Section" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
