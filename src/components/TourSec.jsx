import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTravels } from "../APIs/travelsApi";
import CardSec from "../layout/CardSec";
import "../assets/css/tours-sec.css";
import tour_img1 from "../assets/imgs/animation-sunGlass.png"
import tour_img2 from "../assets/imgs/animation-bag.png"

export const travelData = createContext();

function TourSec() {
  const travels = useSelector((state) => state.travelsData.travels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTravels());
  }, []);

  return (
    <section className="tours p-rel py-5" id="tours">
      <div className="container my-5">
        <div className="row align-items-center justify-content-center mb-5">
          <div className="d-none d-md-block col-md-2 moving-img-holder text-center">
            <img src={ tour_img1 } alt="animation 3" />
          </div>
          <div className="col-md-8 main-heading text-center">
            <span>Featured Tours</span>
            <h3 className="h1 m-0 mt-3">Tours Packages</h3>
          </div>
          <div className="d-none d-md-block col-md-2 moving-img-holder text-center">
            <img src={ tour_img2 } alt="animation 4" />
          </div>
        </div>

        <div className="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
          {travels.map((travel, index) => (
            <travelData.Provider value={[travel, index]} key={index}>
              <CardSec />
            </travelData.Provider>
          )).slice(0, 3)}
        </div>
      </div>
    </section>
  )
}

export default TourSec