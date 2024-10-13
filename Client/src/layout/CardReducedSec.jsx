import React, { useContext } from "react";
import "../assets/css/card.css";
import { destsData } from "../components/DestSec";

function CardReduced() {
  const dest = useContext(destsData);
  return (
    <div className="col" key={dest[1]}>
      <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
        <div className="card-img-holder p-rel">
          <div className="img-part">
            <img
              src={"/assets/imgs/" + dest[0].img}
              className="card-img-top"
              alt={"destinations image " + dest[0].id}
            />
          </div>
          <div className="card-body card-body-abs p-3">
            <h5 className="card-title">
              <a href="#">{dest[0].continent}</a>
            </h5>
            <span className="dests-num prm-clr">{dest[0].tours} Tours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReduced;
