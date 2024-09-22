import React, { useContext } from "react";
import "../assets/css/card.css";
import { travelsData } from "../components/Tour";
import { Link } from "react-router-dom";

function Card() {
  let travel = useContext(travelsData);
  return (
    <div className="col" key={travel[1]}>
      <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
        <div className="card-img-holder p-rel">
          <div className="img-part">
            <img
              src={"/assets/imgs/" + travel[0].imgPage}
              className="card-img-top"
              alt={"tour image " + travel[0].id}
            />
          </div>
          <div className="badges">
            <span className="off-p-10-badge d-inline-block text-white sec-bg p-2">
              10% off
            </span>
            <span className="featured-badge d-inline-block text-white prm-bg p-2">
              featured
            </span>
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
            <a
              href={travel[0].location.link}
              className="location d-flex align-items-center"
            >
              <i className="flaticon-maps-and-flags me-1 sec-clr"></i>
              <span>
                {travel[0].location.place + ", " + travel[0].location.zip}
              </span>
            </a>
            <h3 className="card-title mt-2 mb-3">
              <Link to={"/tourDetails/" + travel[0].id}>{travel[0].title}</Link>
            </h3>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center review-price">
              <div className="price d-flex align-items-center">
                <i className="flaticon-coin sec-clr me-1"></i>
                <span>
                  From
                  <ins className="text-decoration-none prm-clr">
                  {" $" + (1 - travel[0].price.discount / 100) *
                    travel[0].price.current}
                  </ins>{" "}
                  <del>{" $" + travel[0].price["current"]}</del>
                </span>
              </div>
              <div className="review d-flex align-items-center">
                <i className="flaticon-star prm-clr me-1"></i>
                <span className="prm-clr me-1">{travel[0].rating.rate}</span>
                <span>
                  {"("}
                  {travel[0].rating.review >= 1000
                    ? travel[0].rating.review / 1000 + "k"
                    : travel[0].rating.review}
                  {" review)"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
