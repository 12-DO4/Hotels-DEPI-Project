import React, { useContext } from "react";
import "../assets/css/card.css";
import { recentPostsData } from "../components/BlogDetails";
import { Link } from "react-router-dom";

function MiniPost() {
  let recentPost = useContext(recentPostsData);
  return (
    <>
      <div className="post-preview" key={recentPost[1]}>
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="post-mini-img-holder">
              <img
                src={"/assets/imgs/" + recentPost[0].imgMini}
                className="img-fluid"
                alt={"mini post image " + recentPost[0].id}
              />
            </div>
          </div>
          <div className="col">
            <div className="post-preview-details">
              <div className="post-preview-date d-flex align-items-center">
                <i className="flaticon-calendar text-secondary me-2"></i>
                <span className="sec-clr">{recentPost[0].date}</span>
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
