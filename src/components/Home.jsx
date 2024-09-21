import React from 'react';
import Hero from "./Hero";
import DestSec from "./DestSec";
import AboutSec from "./AboutSec";
import TourSec from './TourSec';
import BlogSec from './BlogSec';

function Home() {
  return (
    <>
      <Hero />
      <DestSec />
      <AboutSec />
      <TourSec />
      <BlogSec />
    </>
  )
}

export default Home