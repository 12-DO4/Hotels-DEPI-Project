import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BtnTop from "./BtnTop";

function Err404() {
  return (
    <>
      <Header />

      <main>
        <div className="container py-5 text-center">
          <div className="badge badge-danger bg-danger fs-1">
            Error 404 Not Found
          </div>
        </div>
      </main>

      <Footer />

      <BtnTop />
    </>
  );
}

export default Err404;
