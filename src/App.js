import "./assets/css/flaticon_travel-and-tour.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/change-defaults.css";
import Header from "./layout/Header";
import "./assets/css/main-common.css";
import Tour from "./components/Tour";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./layout/Footer";
import TourDetails from "./components/TourDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        <Tour />
      </main>
      <Footer />
    </>
  );
}

export default App;
