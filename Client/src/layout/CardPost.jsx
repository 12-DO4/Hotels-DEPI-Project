import React, { useContext } from "react";
import "../assets/css/card.css";
import { postsData } from "../components/Blog";
import { Link } from "react-router-dom";

function CardPost() {
  let post = useContext(postsData);
  const isoDate = post[0].date;
const date = new Date(isoDate);

// Options for formatting the date
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Convert to the desired format
const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <div className="col" key={post[0]._id}>
      <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
        <div className="card-img-holder p-rel">
          <div className="img-part">
            <img
              src={`${process.env.REACT_APP_API_URL}/${post[0].Img}`}
              className="card-img-top"
              alt={"blog image " + post[0]._id}
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
              <span>{formattedDate}</span>
            </div>
            <div className="comments d-flex align-items-center">
              <i className="flaticon-chat sec-clr me-1"></i>
              <span>{post[0].comments}</span>
            </div>
          </div>
          <h3 className="card-title">
            <Link to={"/postPreview/" + post[0]._id}>{post[0].title}</Link>
          </h3>
          <Link
            to={"/postPreview/" + post[0]._id}
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
