import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostPreview } from "../APIs/postsAPI";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BtnTop from "../layout/BtnTop";
import post_img from "../assets/imgs/post-1.jpg";
import post1_mini_img from "../assets/imgs/post-mini-1.jpg"
import post2_mini_img from "../assets/imgs/post-mini-2.jpg"
import post3_mini_img from "../assets/imgs/post-mini-3.jpg"
import Breadcrumb from "../layout/Breadcrumb";
import PageNums from "../layout/PageNums";

function BlogDetails() {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.postsData.post);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchPostPreview(params.id));
  }, []);
  return (
    <>
      <Header />

      <main>
        <Breadcrumb pageName={currentPost.title} />

        <section className="blog-details py-5 my-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7">
                <div className="post">
                  <div className="post-img rounded-3 overflow-hidden">
                    <img src={post_img} alt="blog post details" />
                  </div>
                  <div className="post-details">
                    <div className="post-info my-4">
                      <ul className="nav navbar justify-content-lg-start">
                        <li className="list-item d-flex align-items-center me-4">
                          <i className="flaticon-calendar sec-clr me-2"></i>
                          <span>{currentPost.date}</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <i className="flaticon-chat sec-clr me-2"></i>
                          <span>Comments ({currentPost.comments})</span>
                        </li>
                      </ul>
                    </div>
                    <div className="post-content">
                      <div className="post-title mb-4">
                        <h3 className="h1 fw-bolder">{currentPost.title}</h3>
                      </div>
                      <div className="post-body text-secondary">
                        <p>{currentPost.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 pt-5 pt-lg-0">
                <div className="recent-posts">
                  <h4 className="mb-4">Recent posts:</h4>
                  <div className="posts-preview">
                    <div className="post-preview">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="post-mini-img-holder">
                            <img
                              src={post1_mini_img}
                              className="img-fluid"
                              alt="post1 mini img"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="post-preview-details">
                            <div className="post-preview-date d-flex align-items-center">
                              <i className="flaticon-calendar text-secondary me-2"></i>
                              <span className="sec-clr">02 Jan 2024</span>
                            </div>
                            <div className="post-preview-title">
                              <a href="#">
                                <h6 className="text-uppercase fw-light mt-3">
                                  Things to see and do when visiting Japan
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="post-preview">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="post-mini-img-holder">
                            <img
                              src={post2_mini_img}
                              className="img-fluid"
                              alt="post1 mini img"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="post-preview-details">
                            <div className="post-preview-date d-flex align-items-center">
                              <i className="flaticon-calendar text-secondary me-2"></i>
                              <span className="sec-clr">02 Jan 2024</span>
                            </div>
                            <div className="post-preview-title">
                              <a href="#">
                                <h6 className="text-uppercase fw-light mt-3">
                                  A place where start new life with adventure
                                  travel
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="post-preview">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <div className="post-mini-img-holder">
                            <img
                              src={post3_mini_img}
                              className="img-fluid"
                              alt="post1 mini img"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="post-preview-details">
                            <div className="post-preview-date d-flex align-items-center">
                              <i className="flaticon-calendar text-secondary me-2"></i>
                              <span className="sec-clr">02 Jan 2024</span>
                            </div>
                            <div className="post-preview-title">
                              <a href="#">
                                <h6 className="text-uppercase fw-light mt-3">
                                  The Vibrant Harbor City Down Under
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageNums />
      </main>

      <Footer />

      <BtnTop />
    </>
  );
}

export default BlogDetails;
