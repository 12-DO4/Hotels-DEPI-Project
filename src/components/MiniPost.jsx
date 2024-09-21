import React from 'react'
import post1_mini_img from "../assets/imgs/post-mini-1.jpg"
import post2_mini_img from "../assets/imgs/post-mini-2.jpg"
import post3_mini_img from "../assets/imgs/post-mini-3.jpg"

function MiniPost() {
  return (
    <>
      <div class="post-preview">
        <div class="row align-items-center">
          <div class="col-4">
            <div class="post-mini-img-holder">
              <img src={ post1_mini_img } class="img-fluid" alt="post1 mini img" />
            </div>
          </div>
          <div class="col-8">
            <div class="post-preview-details">
              <div class="post-preview-date d-flex align-items-center">
                <i class="flaticon-calendar text-secondary me-2"></i>
                <span class="sec-clr">02 Jan 2024</span>
              </div>
              <div class="post-preview-title">
                <a href="#">
                  <h6 class="text-uppercase fw-light mt-3">Things to see and do when visiting Japan</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="post-preview">
        <div class="row align-items-center">
          <div class="col-4">
            <div class="post-mini-img-holder">
              <img src={ post2_mini_img } class="img-fluid" alt="post1 mini img" />
            </div>
          </div>
          <div class="col-8">
            <div class="post-preview-details">
              <div class="post-preview-date d-flex align-items-center">
                <i class="flaticon-calendar text-secondary me-2"></i>
                <span class="sec-clr">02 Jan 2024</span>
              </div>
              <div class="post-preview-title">
                <a href="#">
                  <h6 class="text-uppercase fw-light mt-3">A place where start new life with adventure travel</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="post-preview">
        <div class="row align-items-center">
          <div class="col-4">
            <div class="post-mini-img-holder">
              <img src={ post3_mini_img } class="img-fluid" alt="post1 mini img" />
            </div>
          </div>
          <div class="col-8">
            <div class="post-preview-details">
              <div class="post-preview-date d-flex align-items-center">
                <i class="flaticon-calendar text-secondary me-2"></i>
                <span class="sec-clr">02 Jan 2024</span>
              </div>
              <div class="post-preview-title">
                <a href="#">
                  <h6 class="text-uppercase fw-light mt-3">The Vibrant Harbor City Down Under</h6>
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