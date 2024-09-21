import React from 'react'
import dest1 from '../assets/imgs/dest-1.jpg'
import dest2 from '../assets/imgs/dest-2.jpg'
import dest3 from '../assets/imgs/dest-3.jpg'
import dest4 from '../assets/imgs/dest-4.jpg'

function CardReduced() {
  return (
    <>
      <div className="col">
        <div className="card rounded-4 overflow-hidden border-0 shadow-lg">
          <div className="card-img-holder p-rel">
            <div className="img-part">
              <img src={ dest1 } className="card-img-top" alt="destinations image" />
            </div>
            <div className="card-body card-body-abs p-3">
              <h5 className="card-title"><a href="#">Europe</a></h5>
              <span className="tours-num prm-clr">15 Tours</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none d-md-block">
          <div className="card-img-holder p-rel">
            <div className="img-part">
              <img src={ dest2 } className="card-img-top" alt="destinations image" />
            </div>
            <div className="card-body card-body-abs p-3">
              <h5 className="card-title"><a href="#">North America</a></h5>
              <span className="tours-num prm-clr">13 Tours</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none d-lg-block">
          <div className="card-img-holder p-rel">
            <div className="img-part">
              <img src={ dest3 } className="card-img-top" alt="destinations image" />
            </div>
            <div className="card-body card-body-abs p-3">
              <h5 className="card-title"><a href="#">South Africa</a></h5>
              <span className="tours-num prm-clr">12 Tours</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none d-xl-block">
          <div className="card-img-holder p-rel">
            <div className="img-part">
              <img src={ dest4 } className="card-img-top" alt="destinations image" />
            </div>
            <div className="card-body card-body-abs p-3">
              <h5 className="card-title"><a href="#">Costa Rica</a></h5>
              <span className="tours-num prm-clr">25 Tours</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-4 overflow-hidden border-0 shadow-lg d-none">
          <div className="card-img-holder p-rel">
            <div className="img-part">
              <img src={ dest1 } className="card-img-top" alt="destinations image" />
            </div>
            <div className="card-body card-body-abs p-3">
              <h5 className="card-title"><a href="#">Europe</a></h5>
              <span className="tours-num prm-clr">15 Tours</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardReduced