import React, { useContext } from "react";
import "../assets/css/card.css";
import { toursData } from "../components/Dest";

function CardReduced() {
  const tour = useContext(toursData);
  return (
    <div className="col" key={tour[1]}>
      <div className="card border-0">
        <div className="card-img-holder p-rel rounded-4 overflow-hidden">
          <div className="img-part">
            <img
              src={"./assets/imgs/" + tour[0].img}
              className="card-img-top"
              alt={"blog image " + tour[0].id}
            />
          </div>
        </div>
      </div>
      <h3 className="h4 mt-3">
        <a href="#">{tour[0].title}</a>
      </h3>
      <small className="sec-clr fw-bold">{tour[0].type}</small>
    </div>
  );
}

export default CardReduced;
