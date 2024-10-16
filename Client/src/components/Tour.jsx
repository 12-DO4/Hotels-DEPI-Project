import React, { useEffect, createContext } from "react";
import Header from "../layout/Header";
import Breadcrumb from "../layout/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchTravels } from "../APIs/travelsApi";
import Card from "../layout/Card";
import "../assets/css/tours-sec.css";
import "../assets/css/tours-page.css";
import PageNums from "../layout/PageNums";
import Footer from "../layout/Footer";
import BtnTop from "../layout/BtnTop";

export const travelsData = createContext();

function Tour() {
  const travels = useSelector((state) => state.travelsData.travels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTravels());
    console.log(travels);
  }, []);

  return (
    <>
      <Header />

      <main>
        <Breadcrumb pageName={"Tour"} />

        <section className="tours page p-rel pt-5">
          <div className="container mt-5">
            <div className="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
              {travels.map((travel, index) => (
                <travelsData.Provider value={[travel, index]} key={index}>
                  <Card />
                </travelsData.Provider>
              ))}
            </div>
          </div>
        </section>

        <PageNums />
      </main>

      <Footer />

      <BtnTop />
    </>
  );
}

export default Tour;
