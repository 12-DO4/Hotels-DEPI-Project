import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import BtnTop from "../layout/BtnTop";
import Hero from "./Hero";
import DestSec from "./DestSec";
import AboutSec from "./AboutSec";
import TourSec from "./TourSec";
import BlogSec from "./BlogSec";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <DestSec />
        <AboutSec />
        <TourSec />
        <BlogSec />
      </main>

      <Footer />

      <BtnTop />
    </>
  );
}

export default Home;
