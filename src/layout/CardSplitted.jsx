import React from 'react'
import '../assets/css/card.css'

function CardSplitted() {
  return (
    <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
      <div className="card-img-holder p-rel">
        <div className="img-part">
          <img src="./assets/imgs/tours-3.jpg" className="card-img-top" alt="tours image" />
        </div>
        <div className="overlay d-none"></div>
        <div className="badges">
          <span className="off-p-10-badge d-inline-block text-white sec-bg p-2">10% off</span>
        </div>
        <div className="actions">
          <button className="btn border-0 py-1 px-2">
            <i className="flaticon-like"></i>
          </button>
          <button className="btn border-0 py-1 px-2">
            <i className="flaticon-camera"></i>
          </button>
        </div>
      </div>
      <div className="card-body p-3">
        <a href="https://maps.app.goo.gl/Wy2i47R1k1XuRmXh8" className="location d-flex align-items-center">
          <i className="flaticon-maps-and-flags me-1 sec-clr"></i>
          <span>traford Park Lexington, 40507</span>
        </a>
        <h3 className="card-title mt-2 mb-3">
          <a href="#">Museum of Modern Art</a>
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
        <hr />
        <div className="row time align-items-center">
          <div className="col-6 text-start">
            <ul className="nav">
              <li className="nav-item d-flex align-items-center duration-left me-2">
                <i className="flaticon-clock sec-clr me-1"></i>
                <span>6 Days</span>
              </li>
              <li className="nav-item d-flex align-items-center people-reserved">
                <i className="flaticon-user-1 sec-clr me-1"></i>
                <span>15</span>
              </li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-secondary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSplitted