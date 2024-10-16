import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../APIs/postsAPI";
import CardPostSec from "../layout/CardPostSec";
import "../assets/css/blog-sec.css";
import anim_blog from "../assets/imgs/animation-ticket.png";

export const postsData = createContext();

function BlogSec() {
  const posts = useSelector((state) => state.postsData.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section className="blog p-rel py-5" id="blog">
      <div className="container my-5">
        <div className="row justify-content-center align-items-center mb-5">
          <div className="d-none d-xl-block col-md-3 moving-img-holder text-center">
            <img src={anim_blog} alt="animation 5" />
          </div>
          <div className="col-xl-6 main-heading text-center">
            <span>Our Resent Blog</span>
            <h3 className="h1 m-0 mt-3">
              Amazing news & blog for every update
            </h3>
          </div>
        </div>
        <div className="cards row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
          {posts
            .map((post, index) => (
              <postsData.Provider value={[post, index]} key={index}>
                <CardPostSec />
              </postsData.Provider>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </section>
  );
}

export default BlogSec;
