import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/change-defaults.css';
import './assets/css/flaticon_travel-and-tour.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Tour from './components/Tour';

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
