import './assets/css/flaticon_travel-and-tour.css';
import './assets/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/change-defaults.css';
import './assets/css/main-common.css';
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { RouterProvider } from "react-router-dom";
import { router } from './routes';

function App() {
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
