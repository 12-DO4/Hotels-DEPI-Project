import React from 'react'
import post1_mini_img from "../assets/imgs/post-mini-1.jpg"
import post2_mini_img from "../assets/imgs/post-mini-2.jpg"
import post3_mini_img from "../assets/imgs/post-mini-3.jpg"

function MiniPost() {
  return (
    <>
      <div className="post-preview">
        <div className="row align-items-center">
          <div className="col-4">
            <div className="post-mini-img-holder">
              <img src={ post1_mini_img } className="img-fluid" alt="post1 mini img" />
            </div>
          </div>
          <div className="col-8">
            <div className="post-preview-details">
              <div className="post-preview-date d-flex align-items-center">
                <i className="flaticon-calendar text-secondary me-2"></i>
                <span className="sec-clr">02 Jan 2024</span>
              </div>
              <div className="post-preview-title">
                <a href="#">
                  <h6 className="text-uppercase fw-light mt-3">Things to see and do when visiting Japan</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="post-preview">
        <div className="row align-items-center">
          <div className="col-4">
            <div className="post-mini-img-holder">
              <img src={ post2_mini_img } className="img-fluid" alt="post1 mini img" />
            </div>
          </div>
          <div className="col-8">
            <div className="post-preview-details">
              <div className="post-preview-date d-flex align-items-center">
                <i className="flaticon-calendar text-secondary me-2"></i>
                <span className="sec-clr">02 Jan 2024</span>
              </div>
              <div className="post-preview-title">
                <a href="#">
                  <h6 className="text-uppercase fw-light mt-3">A place where start new life with adventure travel</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="post-preview">
        <div className="row align-items-center">
          <div className="col-4">
            <div className="post-mini-img-holder">
              <img src={ post3_mini_img } className="img-fluid" alt="post1 mini img" />
            </div>
          </div>
          <div className="col-8">
            <div className="post-preview-details">
              <div className="post-preview-date d-flex align-items-center">
                <i className="flaticon-calendar text-secondary me-2"></i>
                <span className="sec-clr">02 Jan 2024</span>
              </div>
              <div className="post-preview-title">
                <a href="#">
                  <h6 className="text-uppercase fw-light mt-3">The Vibrant Harbor City Down Under</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniPost