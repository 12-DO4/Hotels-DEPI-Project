import './assets/css/flaticon_travel-and-tour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/change-defaults.css';
import Header from './layout/Header';
import './assets/css/main-common.css';
import Tour from './components/Tour';
import Footer from './layout/Footer';
import BtnTop from './layout/BtnTop';
import TourDetails from './components/TourDetails';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Home />
      </main>
      
      <Footer />

      <BtnTop />
    </>
  );
}

export default App;
