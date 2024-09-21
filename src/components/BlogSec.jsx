import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../APIs/postsAPI";
import CardPost from "../layout/CardPost";
import "../assets/css/tours-sec.css";
import "../assets/css/blog-sec.css";

export const postsData = createContext();

function BlogSec() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section class="blog p-rel py-5" id="blog">
      <div class="container my-5">
        <div class="row justify-content-center align-items-center mb-5">
          <div class="d-none d-xl-block col-md-3 moving-img-holder text-center">
            <img src="./assets/imgs/animation-ticket.png" alt="" />
          </div>
          <div class="col-xl-6 main-heading text-center">
            <span>Our Resent Blog</span>
            <h3 class="h1 m-0 mt-3">Amazing news & blog for every update</h3>
          </div>
        </div>
        <div class="cards row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
          {posts.map((post, index) => (
            <postsData.Provider value={[post, index]}>
              <CardPost />
            </postsData.Provider>
          )).slice(0, 3)}
        </div>
      </div>
    </section>
  )
}

export default BlogSec