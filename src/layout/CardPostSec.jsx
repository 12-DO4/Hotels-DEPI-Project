import React, { useContext } from "react";
import "../assets/css/card.css";
import { postsData } from "../components/BlogSec";
import { Link } from "react-router-dom";

function CardPost() {
  let post = useContext(postsData);
  return (
    <div className="col" key={post[1]}>
      <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
        <div className="card-img-holder p-rel">
          <div className="img-part">
            <img
              src={"/assets/imgs/" + post[0].imgSec}
              className="card-img-top"
              alt={"blog image " + post[0].id}
            />
          </div>
          <div className="badges">
            <span className="adv-badge d-inline-block text-white prm-bg p-2">
              Adventure
            </span>
          </div>
        </div>
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-3 date-comments">
            <div className="date d-flex align-items-center me-3">
              <i className="flaticon-calendar sec-clr me-1"></i>
              <span>{post[0].date}</span>
            </div>
            <div className="comments d-flex align-items-center">
              <i className="flaticon-chat sec-clr me-1"></i>
              <span>{post[0].comments}</span>
            </div>
          </div>
          <h3 className="card-title">
            <Link to={"/postPreview/" + post[0].id}>{post[0].title}</Link>
          </h3>
          <Link
            to={"/postPreview/" + post[0].id}
            className="btn btn-secondary mt-3"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
