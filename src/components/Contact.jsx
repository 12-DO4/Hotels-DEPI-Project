import React from "react";
import Header from '../layout/Header'
import Breadcrumb from "../layout/Breadcrumb";
import Footer from '../layout/Footer'
import BtnTop from '../layout/BtnTop'

function Contact() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb pageName={"Contact Us"} />
        <section className="contact py-5 my-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <form action="" method="post">
                  <div className="row g-3 mb-4">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name:"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name:"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-4">
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email:"
                        aria-label="Email"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone:"
                        aria-label="Phone"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject:"
                        aria-label="Subject"
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control mb-4"
                    placeholder="Write A Message...."
                    style={{ height: "100px" }}
                  ></textarea>
                  <button type="submit" className="btn btn-secondary py-3 px-4">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="col-lg-5 pt-5 pt-lg-0">
                <div className="card border-0 sec-bg p-3 p-lg-5">
                  <ul className="nav m-0 p-0 d-flex flex-column">
                    <li className="list-item d-flex align-items-start mb-3">
                      <i className="flaticon-clock d-flex rounded-circle p-3 bg-white sec-clr fs-2 me-4"></i>
                      <div className="contact-info sec-clr d-flex flex-column">
                        <span className="info-title text-white text-decoration-underline fw-light mb-1">
                          Hours:
                        </span>
                        <span className="info-details text-white">
                          <span className="opening-hours">
                            Monday - Friday: 8 AM - 5:30 PM
                          </span>
                          <br />
                          <span className="closing-hours">
                            Saturday - Sunday: Closed
                          </span>
                        </span>
                      </div>
                    </li>
                    <li className="list-item d-flex align-items-start mb-3">
                      <i className="flaticon-phone-call d-flex rounded-circle p-3 bg-white sec-clr fs-2 me-4"></i>
                      <div className="contact-info sec-clr d-flex flex-column">
                        <span className="info-title text-white text-decoration-underline fw-light mb-1">
                          Call Us:
                        </span>
                        <span className="info-details text-white">
                          <a href="tel:+0009873267" className="text-white">(+000) 987-3267</a>
                          <br />
                          <a href="tel:+88568956238" className="text-white">+88 568 956 238</a>
                        </span>
                      </div>
                    </li>
                    <li className="list-item d-flex align-items-start">
                      <i className="flaticon-pin d-flex rounded-circle p-3 bg-white sec-clr fs-2 me-4"></i>
                      <div className="contact-info sec-clr d-flex flex-column">
                        <span className="info-title text-white text-decoration-underline fw-light mb-1">
                          Location:
                        </span>
                        <span className="info-details text-white">
                          <a href="https://maps.app.goo.gl/DWfEzciQYb27HMyn7" className="text-white">
                            242 Carlyle RdZebulon, North Carolina(NC), 27597
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361667778!2d-74.30934281004734!3d40.69753994660521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1726937764602!5m2!1sen!2sbd"
                className="w-100"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BtnTop />
    </>
  );
}

export default Contact;
