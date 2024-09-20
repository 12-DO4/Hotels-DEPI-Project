import React, { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTravels } from "../APIs/travelsApi";
import Card from "../layout/Card";
import "../assets/css/tours-sec.css";
import "../assets/css/tours-page.css";
import  Breadcrumb  from "../layout/Breadcrumb";

export const travelData = createContext();

function Tour() {
  const travels = useSelector((state) => state.travelsData.travels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTravels());
  }, []);
  console.log(travels);

  return (
    <>
      <Breadcrumb breadCrumbName={"Tour"} />
      <section className="tours p-rel pt-5">
        <div className="container mt-5">
          <div className="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
            {travels.map((travel, index) => (
              <travelData.Provider value={[travel, index]}>
                <Card />
              </travelData.Provider>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tour;
