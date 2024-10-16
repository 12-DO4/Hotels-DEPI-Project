import React, { useContext } from "react";
import "../assets/css/card.css";
import { travelsData } from "../components/TourSec";
import { Link } from "react-router-dom";

function CardSec() {
  let travel = useContext(travelsData);
  console.log(travel);
  return (
    <div className="col" key={travel[0]._id}>
      <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
        <div className="card-img-holder p-rel">
          <div className="img-part">
            <img
              src={`${process.env.REACT_APP_API_URL}/${travel[0].coverImg}`}
              className="card-img-top"
              alt={"tour image " + travel[0]._id}
            />
          </div>
          <div className="overlay d-none"></div>
          <div className="badges">
            <span className="off-p-10-badge d-inline-block text-white sec-bg p-2">
              10% off
            </span>
          </div>
          <div className="actions">
            <button className="btn border-0 py-1 px-2 me-2">
              <i className="flaticon-like"></i>
            </button>
            <button className="btn border-0 py-1 px-2">
              <i className="flaticon-camera"></i>
            </button>
          </div>
        </div>
        <div className="card-body p-3">
          <a
            href={travel[0].location}
            className="location d-flex align-items-center"
          >
            <i className="flaticon-maps-and-flags me-1 sec-clr"></i>
            <span>
              {travel[0].location + ", " + travel[0].location}
            </span>
          </a>
          <h3 className="card-title mt-2 mb-3">
            <Link to={"/travel/" + travel[0]._id}>{travel[0].name}</Link>
          </h3>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center review-price">
            <div className="price d-flex align-items-center">
              <i className="flaticon-coin sec-clr me-1"></i>
              <span>
                From
                <ins className="text-decoration-none prm-clr">
                {" $" + travel[0].discount}
                </ins>{" "}
                <del>{"$" + travel[0].price}</del>
              </span>
            </div>
            <div className="review d-flex align-items-center">
              <i className="flaticon-star prm-clr me-1"></i>
              {/* <span className="prm-clr me-1">{travel[0].rating.rate}</span> */}
              {/* <span>
                {"("}
                {travel[0].rating.review >= 1000
                  ? travel[0].rating.review / 1000 + "k"
                  : travel[0].rating.review}
                {" review)"}
              </span> */}
            </div>
          </div>
          <hr />
          <div className="row time align-items-center">
            <div className="col-6 text-start">
              <ul className="nav">
                <li className="nav-item d-flex align-items-center duration-left me-2">
                  <i className="flaticon-clock sec-clr me-1"></i>
                  <span>{travel[0].duration}</span>
                </li>
                <li className="nav-item d-flex align-items-center people-reserved">
                  <i className="flaticon-user-1 sec-clr me-1"></i>
                  <span>{parseInt(travel[0].maxGuest) - parseInt(travel[0].reservations)}</span>
                </li>
              </ul>
            </div>
            <div className="col-6 text-end">
              <Link
                className="btn btn-secondary"
                to={"/travel/" + travel[0]._id}
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSec;
