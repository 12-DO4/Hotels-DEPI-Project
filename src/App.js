import './assets/css/flaticon_travel-and-tour.css';
import './assets/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/change-defaults.css';
import Header from './layout/Header';
import './assets/css/main-common.css';
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import Footer from './layout/Footer';
import BtnTop from './layout/BtnTop';

function App() {
  return (
    <>
      <Header />

      <main>
        <Provider store={Store}>
          <RouterProvider router={router} />
        </Provider>
      </main>
      
      <Footer />

      <BtnTop />
    </>
  );
}

export default App;
