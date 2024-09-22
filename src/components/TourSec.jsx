import React, { useEffect, createContext } from "react";
import anim1_tour from "../assets/imgs/animation-sunGlass.png";
import anim2_tour from "../assets/imgs/animation-bag.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchTravels } from "../APIs/travelsAPI";
import CardSec from "../layout/CardSec";
import "../assets/css/tours-sec.css";

export const travelsData = createContext();

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
            <img src={anim1_tour} alt="animation 3" />
          </div>
          <div className="col-md-8 main-heading text-center">
            <span>Featured Tours</span>
            <h3 className="h1 m-0 mt-3">Tours Packages</h3>
          </div>
          <div className="d-none d-md-block col-md-2 moving-img-holder text-center">
            <img src={anim2_tour} alt="animation 4" />
          </div>
        </div>

        <div className="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
          {travels
            .map((travel, index) => (
              <travelsData.Provider value={[travel, index]} key={index}>
                <CardSec />
              </travelsData.Provider>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </section>
  );
}

export default TourSec;
