import React from "react";
import ballon_img_path from "../assets/imgs/animation-ballon.png";
import star_img_path from "../assets/imgs/animation-star.png";
import dest1 from "../assets/imgs/dest-1.jpg";
import dest2 from "../assets/imgs/dest-2.jpg";
import dest3 from "../assets/imgs/dest-3.jpg";
import dest4 from "../assets/imgs/dest-4.jpg";

export default function destSec() {
  return (
    <section className="destinations p-rel py-5" id="dest">
      <div className="container my-5">
        <div className="row align-items-center justify-content-center mb-5">
          <div className="d-none d-md-block col-md-3 moving-img-holder text-center">
            <img src={ballon_img_path} alt="animation 1" />
          </div>
          <div className="col-md-6 main-heading text-center">
            <span>Top Destinations</span>
            <h3 className="h1 m-0 mt-3">
              Explore the Beautiful Places Around the World
            </h3>
          </div>
          <div className="d-none d-md-block col-md-3 moving-img-holder text-center">
            <img src={star_img_path} alt="animation 2" />
          </div>
        </div>
        <div className="row cards row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 px-3 px-md-0">
          <div className="col">
            <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
              <div className="card-img-holder p-rel">
                <div className="img-part">
                  <img
                    src={dest1}
                    className="card-img-top"
                    alt="destinations image"
                  />
                </div>
                <div className="card-body card-body-abs p-3">
                  <h5 className="card-title">
                    <a href="#">Europe</a>
                  </h5>
                  <span className="tours-num prm-clr">15 Tours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none d-md-block">
              <div className="card-img-holder p-rel">
                <div className="img-part">
                  <img
                    src={dest2}
                    className="card-img-top"
                    alt="destinations image"
                  />
                </div>
                <div className="card-body card-body-abs p-3">
                  <h5 className="card-title">
                    <a href="#">North America</a>
                  </h5>
                  <span className="tours-num prm-clr">13 Tours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none d-lg-block">
              <div className="card-img-holder p-rel">
                <div className="img-part">
                  <img
                    src={dest3}
                    className="card-img-top"
                    alt="destinations image"
                  />
                </div>
                <div className="card-body card-body-abs p-3">
                  <h5 className="card-title">
                    <a href="#">South Africa</a>
                  </h5>
                  <span className="tours-num prm-clr">12 Tours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none d-xl-block">
              <div className="card-img-holder p-rel">
                <div className="img-part">
                  <img
                    src={dest4}
                    className="card-img-top"
                    alt="destinations image"
                  />
                </div>
                <div className="card-body card-body-abs p-3">
                  <h5 className="card-title">
                    <a href="#">Costa Rica</a>
                  </h5>
                  <span className="tours-num prm-clr">25 Tours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none">
              <div className="card-img-holder p-rel">
                <div className="img-part">
                  <img
                    src={dest1}
                    className="card-img-top"
                    alt="destinations image"
                  />
                </div>
                <div className="card-body card-body-abs p-3">
                  <h5 className="card-title">
                    <a href="#">Europe</a>
                  </h5>
                  <span className="tours-num prm-clr">15 Tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
