import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTravels } from "../APIs/travelsApi";
import Card from "../layout/Card";
import "../assets/css/tours-sec.css";

export const travelData = createContext();

function TourSec() {
  const travels = useSelector((state) => state.travelsData.travels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTravels());
  }, []);

  return (
    <section class="tours p-rel py-5" id="tours">
      <div class="container my-5">
        <div class="row align-items-center justify-content-center mb-5">
          <div class="d-none d-md-block col-md-2 moving-img-holder text-center">
            <img src="./assets/imgs/animation-sunGlass.png" alt="" />
          </div>
          <div class="col-md-8 main-heading text-center">
            <span>Featured Tours</span>
            <h3 class="h1 m-0 mt-3">Tours Packages</h3>
          </div>
          <div class="d-none d-md-block col-md-2 moving-img-holder text-center">
            <img src="./assets/imgs/animation-bag.png" alt="" />
          </div>
        </div>

        <div class="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
          {travels.map((travel, index) => (
            <travelData.Provider value={[travel, index]}>
              <Card />
            </travelData.Provider>
          )).slice(0, 3)}
        </div>
      </div>
    </section>
  )
}

export default TourSec