import React, { createContext, useEffect } from "react";
import Header from "../layout/Header";
import Breadcrumb from "../layout/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchTours } from "../APIs/destsAPI";
import CardReduced from "../layout/CardReduced";
import PageNums from "../layout/PageNums";
import Footer from "../layout/Footer";
import BtnTop from "../layout/BtnTop";

export const toursData = createContext();

function Dest() {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.destsData.tours);

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  return (
    <>
      <Header />
      <Breadcrumb pageName={"Destinations"} />
      <main>
        <section className="blog p-rel my-5 pt-5">
          <div className="container mt-5">
            <div className="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 px-3 px-md-0">
              {tours.map((tour, index) => (
                <toursData.Provider value={[tour, index]} key={index}>
                  <CardReduced />
                </toursData.Provider>
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

export default Dest;
