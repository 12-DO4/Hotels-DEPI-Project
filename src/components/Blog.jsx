import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../APIs/postsAPI";
import Breadcrumb from "../layout/Breadcrumb";
import CardPost from "../layout/CardPost";
import "../assets/css/tours-sec.css";
import "../assets/css/blog-sec.css";
import PageNums from "../layout/PageNums";

export const postsData = createContext();

function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Breadcrumb pageName={"Blog"} />

      <section class="blog p-rel pt-5">
        <div class="container mt-5">
          <div class="row cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 px-3 px-md-0">
            {posts.map((post, index) => (
              <postsData.Provider value={[post, index]}>
                <CardPost />
              </postsData.Provider>
            ))}
          </div>
        </div>
      </section>
      
      <PageNums />
    </>
  )
}

export default Blog