import React, { useEffect, createContext } from "react";
import Header from "../layout/Header";
import Breadcrumb from "../layout/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPosts, fetchPostPreview } from "../APIs/postsAPI";
import MiniPost from "../layout/MiniPost";
import PageNums from "../layout/PageNums";
import Footer from "../layout/Footer";
import BtnTop from "../layout/BtnTop";

export const recentPostsData = createContext();

function BlogDetails() {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.postsData.posts);
  const currentPost = useSelector((state) => state.postsData.post);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostPreview(params.id));
  }, [params.id]);
  const isoDate = currentPost.date;
  const date = new Date(isoDate);
  
  // Options for formatting the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  // Convert to the desired format
  const formattedDate = date.toLocaleDateString('en-US', options);

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
                    <img src={`${process.env.REACT_APP_API_URL}/${currentPost.Img}`} alt="blog post details" />
                  </div>
                  <div className="post-details">
                    <div className="post-info my-4">
                      <ul className="nav navbar justify-content-lg-start">
                        <li className="list-item d-flex align-items-center me-4">
                          <i className="flaticon-calendar sec-clr me-2"></i>
                          <span>{formattedDate}</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <i className="flaticon-chat sec-clr me-2"></i>
                          <span>
                            Comments {"(" + currentPost.comments + ")"}
                          </span>
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
                    {recentPosts
                      .map((post, index) => (
                        <recentPostsData.Provider
                          value={[post, index]}
                          key={index}
                        >
                          <MiniPost />
                        </recentPostsData.Provider>
                      ))
                      .slice(0, 3)}
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
