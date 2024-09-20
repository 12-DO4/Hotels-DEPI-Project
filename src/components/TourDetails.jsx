import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTravelDetails } from "../APIs/travelsApi";
import img from '../assets/imgs/discover-1.jpg';
import  Breadcrumb  from "../layout/Breadcrumb";
import PageNums from "../layout/PageNums";


function TourDetails() {
  const [adultsCounter, setAdultsCounter] = useState(1);
  const [kidsCounter, setKidsCounter] = useState(1);
  const [childrenCounter, setChildrenCounter] = useState(1);
  const dispatch = useDispatch();
  const currentTravel = useSelector((state) => state.travelsData.travel);
  console.log(currentTravel)
  const params = useParams();
  //   const [price, setPrice] = useState(currentTravel.price);
  useEffect(() => {
    dispatch(fetchTravelDetails(params.id));
  }, []);
  return (
    <>
      <Breadcrumb pageName={ currentTravel.title } />
      
      <section className="tours-details my-5 pt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="tour-description">
                <div className="row tour-location-review">
                  <div className="col-md-6 tour-location-details">
                    <a href="https://maps.app.goo.gl/Wy2i47R1k1XuRmXh8" className="location d-flex align-items-center">
                      <i className="flaticon-maps-and-flags me-1 sec-clr"></i>
                      <span>traford Park Lexington, 40507</span>
                    </a>
                  </div>
                  <div className="col-md-6 review d-flex justify-content-md-end align-items-center">
                    <i className="flaticon-star prm-clr me-1"></i>
                    <span className="prm-clr me-1">4.5</span>
                    <span>(1.5k review)</span>
                  </div>
                </div>
                <h2 className="h1 tour-title text-truncate col-8 col-md-10 my-4" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Discovery island kayak Tour">{ currentTravel.title }</h2>
                <div className="tour-info">
                  <ul className="nav navbar justify-content-start">
                    <li className="nav-item d-flex align-items-start me-5 mb-3 mb-sm-0">
                      <i className="flaticon-dollar-currency-symbol mt-1 me-2 sec-clr"></i>
                      <div>
                        <div className="d-flex flex-column">
                          <span className="fw-bold text-secondary">From</span>
                          <span>${currentTravel.price}</span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item d-flex align-items-start me-5 mb-3 mb-sm-0">
                      <i className="flaticon-clock mt-1 me-2 sec-clr"></i>
                      <div>
                        <div className="d-flex flex-column">
                          <span className="fw-bold text-secondary">Duration</span>
                          <span>{currentTravel.duration}</span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item d-flex align-items-start me-5 mb-3 mb-sm-0">
                      <i className="flaticon-journey mt-1 me-2 sec-clr"></i>
                      <div>
                        <div className="d-flex flex-column">
                          <span className="fw-bold text-secondary">Tour Type</span>
                          <span>{currentTravel.duration}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-image rounded-4 overflow-hidden mt-5 mb-4">
                  <img src={ img } className="img-fluid" alt="Discovery island kayak" />
                </div>
                <div className="tour-overview mb-5">
                  <h4 className="fw-bolder">Tour Overview</h4>
                  <p>{currentTravel.description}</p>
                </div>
                <div className="tour-amenities mb-5">
                  <h4 className="fw-bolder mb-4">Tour Amenities</h4>
                  <ul className="nav d-flex border border-1 border-dashed border-success rounded-4 p-4">
                    <li className="d-flex align-items-center me-4 my-1">
                      <i className="flaticon-star me-2 prm-clr"></i>
                      <span className="fw-bold">4.9 Accommondation</span>
                    </li>
                    <li className="d-flex align-items-center me-4 my-1">
                      <i className="fa-solid fa-plane-departure me-2 prm-clr"></i>
                      <span className="fw-bold">4.9 Airport</span>
                    </li>
                    <li className="d-flex align-items-center me-4 my-1">
                      <i className="fas fa-wifi me-2 prm-clr"></i>
                      <span className="fw-bold">wi-fi</span>
                    </li>
                    <li className="d-flex align-items-center me-4 my-1">
                      <i className="fas fa-concierge-bell me-2 prm-clr"></i>
                      <span className="fw-bold">4.9 Dinner & Snacks.</span>
                    </li>
                    <li className="d-flex align-items-center me-4 my-1">
                      <i className="fas fa-cogs me-2 prm-clr"></i>
                      <span className="fw-bold">Additional Service</span>
                    </li>
                    <li className="d-flex align-items-center me-4 my-1">
                      <i className="fa-solid fa-shield me-2 prm-clr"></i>
                      <span className="fw-bold">Insurance</span>
                    </li>
                    <li className="d-flex align-items-center my-1">
                      <i className="fas fa-taxi me-2 prm-clr"></i>
                      <span className="fw-bold">Transport</span>
                    </li>
                  </ul>
                </div>
                <div className="tour-location">
                  <h4 className="fw-bolder">Location</h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03600690706!2d-74.3093210634129!3d40.69753997411182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1726655130213!5m2!1sen!2sbd" className="w-100" height="400" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="card mb-3 overflow-hidden border-0">
                <div className="card-header sec-bg text-white text-center border-0">
                  <h4 className="my-2">Package Details</h4>
                </div>
                <div className="card-body px-5 py-4 sec-bg-subtle">
                  <div className="package-details-form">
                    <form action="" method="post">
                      <div className="row g-3 align-items-center tour-date justify-content-between mb-3">
                        <div className="col-auto">
                          <label htmlFor="date" className="col-form-label fs-5 fw-bold">Date</label>
                        </div>
                        <div className="col">
                          <input type="date" id="date" className="form-control" placeholder="Select a Date" />
                        </div>
                      </div>
                      <div className="row g-3 align-items-center tour-time justify-content-between mb-3">
                        <div className="col-auto">
                          <label htmlFor="time" className="col-form-label fs-5 fw-bold">Time</label>
                        </div>
                        <div className="col">
                          <select className="form-select" aria-label="Default select example">
                            <option defaultChecked className="fw-bold">Default sorting</option>
                            <option defaultValue="1">Low to High</option>
                            <option defaultValue="2">High to Low</option>
                            <option defaultValue="3">New Added</option>
                            <option defaultValue="3">On Sale</option>
                          </select>
                        </div>
                      </div>
                      <hr className="border border-success border-1" />
                      <div className="row g-3 align-items-center tour-tickets justify-content-between mb-3">
                        <div className="col-12">
                          <label className="col-form-label fs-5 fw-bold">Tickets</label>
                        </div>
                        <div className="col-12">
                          <div className="tickets">
                            <div className="row g-3 align-items-center tour-time justify-content-between mb-3 age adults">
                              <div className="col-auto">
                                <label htmlFor="adults" className="col-form-label">
                                  <small>
                                    Adults
                                    <i className="fa-solid fa-circle-info text-secondary"data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="(18+years)"></i>
                                  </small>
                                </label>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex quantity align-items-center justify-content-center g-3">
                                  <button className="btn btn-secondary decrease p-1 fw-bolder" onClick={(e) => {e.preventDefault();if(adultsCounter > 0)setAdultsCounter(adultsCounter - 1);console.log(adultsCounter)}}>-</button>
                                  <input type="number" id="adults" className="form-control-color text-center mx-1 amount" value={adultsCounter} />
                                  <button className="btn btn-secondary increase p-1 fw-bolder" onClick={(e) => {e.preventDefault();setAdultsCounter(adultsCounter + 1);}}>+</button>
                                </div>
                              </div>
                            </div>
                            <div className="row g-3 align-items-center tour-time justify-content-between mb-3 age kids">
                              <div className="col-auto">
                                <label htmlFor="kids" className="col-form-label">
                                  <small>
                                    Kids
                                    <i className="fa-solid fa-circle-info text-secondary"data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="(13years)"></i>
                                  </small>
                                </label>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex quantity align-items-center justify-content-center g-3">
                                  <button className="btn btn-secondary decrease p-1 fw-bolder" onClick={(e) => {e.preventDefault();if(kidsCounter > 0)setKidsCounter(kidsCounter - 1);}}>-</button>
                                  <input type="number" id="kids" className="form-control-color text-center mx-1 amount" value={kidsCounter} />
                                  <button className="btn btn-secondary increase p-1 fw-bolder" onClick={(e) => {e.preventDefault();setKidsCounter(kidsCounter + 1);}}>+</button>
                                </div>
                              </div>
                            </div>
                            <div className="row g-3 align-items-center tour-time justify-content-between mb-3 age children">
                              <div className="col-auto">
                                <label htmlFor="children" className="col-form-label">
                                  <small>
                                    Children
                                    <i className="fa-solid fa-circle-info text-secondary"data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="(5+years)"></i>
                                  </small>
                                </label>
                              </div>
                              <div className="col-auto">
                                <div className="d-flex quantity align-items-center justify-content-center g-3">
                                  <button className="btn btn-secondary decrease p-1 fw-bolder" onClick={(e) => {e.preventDefault();if(childrenCounter > 0)setChildrenCounter(childrenCounter - 1);}}>-</button>
                                  <input type="number" id="children" className="form-control-color text-center mx-1 amount" value={ childrenCounter } />
                                  <button className="btn btn-secondary increase p-1 fw-bolder" onClick={(e) => {e.preventDefault();setChildrenCounter(childrenCounter + 1);}}>+</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="border border-success border-1" />
                      <div className="row g-3 align-items-center tour-services justify-content-between mb-3">
                        <div className="col-12">
                          <label className="col-form-label fs-5 fw-bold">Additional Service</label>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" name="services[]" type="checkbox" defaultValue="guide" id="guide" />
                            <label className="form-check-label d-block" htmlFor="guide">
                              <div className="row justify-content-between">
                                <div className="col-auto">Additional Guide</div>
                                <div className="col-auto">$420</div>
                              </div>
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" name="services[]" type="checkbox" defaultValue="internet" id="internet" defaultChecked />
                            <label className="form-check-label d-block" htmlFor="internet">
                              <div className="row justify-content-between">
                                <div className="col-auto">Internet</div>
                                <div className="col-auto">$420</div>
                              </div>
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" name="services[]" type="checkbox" defaultValue="photography" id="photography" />
                            <label className="form-check-label d-block" htmlFor="photography">
                              <div className="row justify-content-between">
                                <div className="col-auto">photography</div>
                                <div className="col-auto">$420</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr className="border border-success border-1" />
                      <div className="row g-3 align-items-center tour-cost mb-4">
                        <div className="col-auto fs-5 fw-bold">
                          <span>Total Cost: </span>
                          <span className="sec-clr">${ currentTravel.price }</span>
                          <span> / per person</span>
                        </div>
                      </div>
                      <div className="row g-3 align-items-center tour-submit">
                        <div className="col">
                          <button type="submit" className="btn btn-secondary p-3 w-100">Proceed To Book</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card mb-3 overflow-hidden border-0">
                <div className="card-header sec-bg text-white text-center border-0">
                  <h4 className="my-2">Tour Information</h4>
                </div>
                <div className="card-body px-5 py-4 sec-bg-subtle">
                  <div className="tour-info">
                    <ul className="p-0 m-0 nav flex-column">
                      <li className="list-item d-flex align-items-center mb-3">
                        <i className="fas fa-users fa-2x sec-clr me-4"></i>
                        <div className="d-flex flex-column">
                          <small className="text-secondary">Max Guests</small>
                          <span className="fw-bold">5</span>
                        </div>
                      </li>
                      <li className="list-item d-flex align-items-center mb-3">
                        <i className="fas fa-users fa-2x sec-clr me-4"></i>
                        <div className="d-flex flex-column">
                          <small className="text-secondary">Min Age</small>
                          <span className="fw-bold">12+</span>
                        </div>
                      </li>
                      <li className="list-item d-flex align-items-center mb-3">
                        <i className="fa-solid fa-plane-departure fa-2x sec-clr me-4"></i>
                        <div className="d-flex flex-column">
                          <small className="text-secondary">Tour Location</small>
                          <span className="fw-bold">America</span>
                        </div>
                      </li>
                      <li className="list-item d-flex align-items-center">
                        <i className="fas fa-globe fa-2x sec-clr me-4"></i>
                        <div className="d-flex flex-column">
                          <small className="text-secondary">Language Support</small>
                          <span className="fw-bold">Global</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageNums />
    </>
  );
}

export default TourDetails;