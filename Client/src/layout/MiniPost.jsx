import React, { useContext } from "react";
import "../assets/css/card.css";
import { recentPostsData } from "../components/BlogDetails";
import { Link } from "react-router-dom";

function MiniPost() {
  let recentPost = useContext(recentPostsData);
  const isoDate = recentPost[0].date;
  const date = new Date(isoDate);
  
  // Options for formatting the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  // Convert to the desired format
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <>
      <div className="post-preview" key={recentPost[0]._id}>
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="post-mini-img-holder">
              <img
                src={`${process.env.REACT_APP_API_URL}/${recentPost[0].Img}`}
                className="img-fluid"
                alt={"mini post image " + recentPost[0].id}
              />
            </div>
          </div>
          <div className="col">
            <div className="post-preview-details">
              <div className="post-preview-date d-flex align-items-center">
                <i className="flaticon-calendar text-secondary me-2"></i>
                <span className="sec-clr">{formattedDate}</span>
              </div>
              <div className="post-preview-title">
                <Link to={"/postPreview/" + recentPost[0].id}>
                  <h6 className="text-uppercase fw-light mt-3">
                    {recentPost[0].title}
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default MiniPost;
