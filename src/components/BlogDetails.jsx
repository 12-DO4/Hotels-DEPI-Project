import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostPreview } from "../APIs/postsAPI";
import img from '../assets/imgs/post-1.jpg';
import Breadcrumb from "../layout/Breadcrumb";
import MiniPost from "./MiniPost";
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
      <Breadcrumb pageName={ currentPost.title } />

      <section className="blog-details py-5 my-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="post">
                <div className="post-img rounded-3 overflow-hidden">
                  <img src={ img } alt="blog post details" />
                </div>
                <div className="post-details">
                  <div className="post-info my-4">
                    <ul className="nav navbar justify-content-lg-start">
                      <li className="list-item d-flex align-items-center me-4">
                        <i className="flaticon-calendar sec-clr me-2"></i>
                        <span>{ currentPost.date }</span>
                      </li>
                      <li className="list-item d-flex align-items-center">
                        <i className="flaticon-chat sec-clr me-2"></i>
                        <span>Comments ({ (currentPost.comments) })</span>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content">
                    <div className="post-title mb-4">
                      <h3 className="h1 fw-bolder">{ currentPost.title }</h3>
                    </div>
                    <div className="post-body text-secondary">
                      <p>{ currentPost.description }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="recent-posts">
                <h4 className="mb-4">Recent posts:</h4>
                <div className="posts-preview">
                  <MiniPost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageNums />
    </>
      
  )
}

export default BlogDetails