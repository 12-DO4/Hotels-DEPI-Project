import React, { useEffect, useState } from "react";
import "../assets/css/tours-details.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTravelDetails } from "../APIs/travelsApi";
import img from '../assets/imgs/Discovery-Islands.jpeg'
import  Breadcrumb  from "../layout/Breadcrumb";


function TourDetails() {
  const [adultsCounter, setAdultsCounter] = useState(1);
  const [kidsCcounter, setKidsCounter] = useState(1);
  const [childrenCcounter, setChildrensCounter] = useState(1);
  const dispatch = useDispatch();
  const currentTravel = useSelector((state) => state.travelsData.travel);
  const params = useParams();
  //   const [price, setPrice] = useState(currentTravel.price);
  useEffect(() => {
    dispatch(fetchTravelDetails(params.id));
  }, []);
  return (
    <>
      <Breadcrumb breadCrumbName={currentTravel.title} />
      <section class="tours-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="tour-description">
                <div class="tour-location">
                  <p>
                    <i class="fas fa-map-marker-alt"></i>traford Park
                    Lexington,40507
                  </p>
                </div>
                <div class="tour-title">
                  <h2>{currentTravel.title}</h2>
                </div>
                <div class="tour-info">
                  <ul>
                    <li>
                      <i class="flaticon-dollar-currency-symbol"></i>
                      <div class="list-text">
                        <p>From</p>
                        <span>${currentTravel.price}</span>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-clock"></i>
                      <div class="list-text">
                        <p>Duration</p>
                        <span>{currentTravel.duration}</span>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-journey"></i>
                      <div class="list-text">
                        <p>Tour Type</p>
                        <span>{currentTravel.duration}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="tour-image">
                  <img src={img} alt="" />
                </div>
                <div class="tour-overview">
                  <h4>Tour Overview</h4>
                  <p>{currentTravel.description}</p>
                </div>
                <div class="tour-amenities">
                  <h4>Tour Amenities</h4>
                  <ul>
                    <li>
                      <i class="flaticon-travel"></i>Airport
                    </li>
                    <li>
                      <i class="fas fa-wifi"></i>Wi-Fi
                    </li>
                    <li>
                      <i class="fas fa-concierge-bell"></i>Dinner & Snacks
                    </li>
                    <li>
                      <i class="fas fa-cogs"></i>Additional Service
                    </li>
                    <li>
                      <i class="flaticon-verified"></i>Insurance
                    </li>
                    <li>
                      <i class="fas fa-taxi"></i>Transport
                    </li>
                  </ul>
                </div>
                <div class="location">
                  <h4>Location</h4>
                  <iframe
                    title="location"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                        &q=Space+Needle,Seattle+WA"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 tour-details-right">
              <div class="package-details">
                <div class="package-details-title">
                  <h3>Package Details</h3>
                </div>
                <div class="package-details-form">
                  <form action="">
                    <div class="tour-date-time">
                      <div class="date">
                        <label for="date">Date</label>
                        <input
                          placeholder="Select a Date"
                          type="date"
                          name="date"
                        />
                      </div>
                      <div class="time">
                        <label for="time">Time</label>
                        <select name="time" id="time">
                          <option value="Default sorting">
                            Default sorting
                          </option>
                          <option value="Default sorting">
                            Default sorting
                          </option>
                          <option value="Default sorting">
                            Default sorting
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="tickets">
                      <h5>Tickets</h5>
                      <div class="ages">
                        <p>Adults (18+years)</p>
                        <div class="quantity">
                          <button
                            class="add"
                            onClick={(e) => {
                              e.preventDefault();
                              setAdultsCounter(adultsCounter - 1);
                            }}
                          >
                            -
                          </button>
                          <span class="amount">{adultsCounter}</span>
                          <button
                            class="add"
                            onClick={(e) => {
                              e.preventDefault();
                              setAdultsCounter(adultsCounter + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div class="ages">
                        <p>Kids (13years)</p>
                        <div class="quantity">
                          <button
                            class="add"
                            onClick={(e) => {
                              e.preventDefault();
                              setKidsCounter(kidsCcounter - 1);
                            }}
                          >
                            -
                          </button>
                          <span class="amount">{kidsCcounter}</span>
                          <button
                            class="add"
                            onClick={(e) => {
                              e.preventDefault();
                              setKidsCounter(kidsCcounter + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div class="ages">
                        <p>Children (5+years)</p>
                        <div class="quantity">
                          <button
                            class="add"
                            onClick={(e) => {
                              e.preventDefault();
                              setChildrensCounter(childrenCcounter - 1);
                            }}
                          >
                            -
                          </button>
                          <span class="amount">{childrenCcounter}</span>
                          <button
                            class="add"
                            onClick={(e) => {
                              e.preventDefault();
                              setChildrensCounter(childrenCcounter + 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="tour-additional-service">
                      <h6>Additional Service</h6>
                      <div class="service-option">
                        <input
                          name="additional-service"
                          type="checkbox"
                          id="additional-service"
                        />
                        <label for="additional-service">
                          Additional Guide<span>$420</span>
                        </label>
                      </div>
                      <div class="service-option">
                        <input
                          name="additional-service"
                          type="checkbox"
                          id="additional-service"
                        />
                        <label for="additional-service">
                          Internet<span>$420</span>
                        </label>
                      </div>
                      <div class="service-option">
                        <input
                          name="additional-service"
                          type="checkbox"
                          id="additional-service"
                        />
                        <label for="additional-service">
                          photography <span>$420</span>
                        </label>
                      </div>
                    </div>
                    <div class="tour-cost">
                      <p>
                        Total Cost: <span class="price">${currentTravel.price}</span> /
                        perperson
                      </p>
                    </div>
                    <button className="submit" type="submit">
                      Proceed To Book
                    </button>
                  </form>
                </div>
              </div>
              <div class="tour-information">
                <div class="tour-information-title">
                  <h3>Tour Information</h3>
                </div>
                <ul>
                  <li>
                    <i class="fas fa-users"></i>
                    <div class="list-text">
                      <p>Max Guests</p>
                      <span>Date</span>
                    </div>
                  </li>
                  <li>
                    <i class="fas fa-users"></i>
                    <div class="list-text">
                      <p>Min Age</p>
                      <span>12+</span>
                    </div>
                  </li>
                  <li>
                    <i class="fas fa-plane-departure"></i>
                    <div class="list-text">
                      <p>Tour Location</p>
                      <span>America</span>
                    </div>
                  </li>
                  <li>
                    <i class="fas fa-globe"></i>
                    <div class="list-text">
                      <p>language Support</p>
                      <span>Global</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TourDetails;
