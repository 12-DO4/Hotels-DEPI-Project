import React from 'react'
import CardReduced from "../layout/CardReduced"
import ballon_img_path from "../assets/imgs/animation-ballon.png"
import star_img_path from "../assets/imgs/animation-star.png"

export default function destSec() {
  return (
    <section class="destinations p-rel py-5" id="dest">
      <div class="container my-5">
        <div class="row align-items-center justify-content-center mb-5">
          <div class="d-none d-md-block col-md-3 moving-img-holder text-center">
            <img src={ ballon_img_path } alt="" />
          </div>
          <div class="col-md-6 main-heading text-center">
            <span>Top Destinations</span>
            <h3 class="h1 m-0 mt-3">Explore the Beautiful Places Around the World</h3>
          </div>
          <div class="d-none d-md-block col-md-3 moving-img-holder text-center">
            <img src={ star_img_path } alt="" />
          </div>
        </div>
        <div class="row cards row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 px-3 px-md-0">
          <CardReduced />
        </div>
      </div>
    </section>
  )
}
