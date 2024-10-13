import React, { useEffect, createContext } from "react";
import anim1_dest from "../assets/imgs/animation-ballon.png";
import anim2_dest from "../assets/imgs/animation-star.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchDests } from "../APIs/destsAPI";
import CardReducedSec from "../layout/CardReducedSec";

export const destsData = createContext();

function DestSec() {
  const dispatch = useDispatch();
  const dests = useSelector((state) => state.destsData.dests);

  useEffect(() => {
    dispatch(fetchDests());
  }, []);

  return (
    <section className="destinations p-rel py-5" id="dest">
      <div className="container my-5">
        <div className="row align-items-center justify-content-center mb-5">
          <div className="d-none d-md-block col-md-3 moving-img-holder text-center">
            <img src={anim1_dest} alt="animation 1" />
          </div>
          <div className="col-md-6 main-heading text-center">
            <span>Top Destinations</span>
            <h3 className="h1 m-0 mt-3">
              Explore the Beautiful Places Around the World
            </h3>
          </div>
          <div className="d-none d-md-block col-md-3 moving-img-holder text-center">
            <img src={anim2_dest} alt="animation 2" />
          </div>
        </div>
        <div className="row cards row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 px-3 px-md-0">
          {dests.map((dest, index) => (
            <destsData.Provider value={[dest, index]} key={index}>
              <CardReducedSec />
            </destsData.Provider>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestSec;