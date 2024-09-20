import React, { useContext } from "react";
import "../assets/css/card.css";
import { travelData } from "../components/Tour";
import { Link } from "react-router-dom";

function Card() {
  const travel = useContext(travelData);
  console.log("the key ", travel[1], "of travel ", travel);
  return (
    <div className="col">
      <div className="card rounded-4 overflow-hidden border-0 shadow-lg" key={travel[1]}>
        <div className="card-img-holder p-rel">
          <div className="img-part">
            <img src={"/assets/imgs/" + travel[0].imgSrc} className="card-img-top" alt="tours image" />
          </div>
          <div className="badges">
            <span className="off-p-10-badge d-inline-block text-white sec-bg p-2">10% off</span>
            <span className="featured-badge d-inline-block text-white prm-bg p-2">featured</span>
          </div>
          <div className="actions">
            <button className="btn border-0 py-1 px-2 mb-2">
              <i className="flaticon-like"></i>
            </button>
            <button className="btn border-0 py-1 px-2 mb-2">
              <i className="flaticon-camera"></i>
            </button>
            <button className="btn border-0 py-1 px-2">
              <i className="flaticon-tickets"></i>
            </button>
          </div>
          <div className="card-body card-body-abs p-3">
            <a href="https://maps.app.goo.gl/Wy2i47R1k1XuRmXh8" className="location d-flex align-items-center">
              <i className="flaticon-maps-and-flags me-1 sec-clr"></i>
              <span>traford Park Lexington, 40507</span>
            </a>
            <h3 className="card-title mt-2 mb-3">
              <Link to={`/tourDetails/${travel[0].id}`}>{travel[0].title}</Link>
            </h3>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center review-price">
              <div className="price d-flex align-items-center">
                <i className="flaticon-coin sec-clr me-1"></i>
                <span>
                  From
                  <ins className="text-decoration-none prm-clr">$116.10</ins>
                  <del>$116.10</del>
                </span>
              </div>
              <div className="review d-flex align-items-center">
                <i className="flaticon-star prm-clr me-1"></i>
                <span className="prm-clr me-1">4.5</span>
                <span>(1.5k review)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
