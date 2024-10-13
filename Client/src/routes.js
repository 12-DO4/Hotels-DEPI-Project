import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Dest from './components/Dest';
import Contact from './components/Contact';
import About from './components/About';
import Tour from './components/Tour';
import TourDetails from "./components/TourDetails";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Err404 from './layout/Err404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Err404 />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Err404 />
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <Err404 />
  },
  {
    path: '/dest',
    element: <Dest />,
    errorElement: <Err404 />
  },
  {
    path: '/tours',
    element: <Tour />,
    errorElement: <Err404 />
  },
  {
    path: '/tourDetails/:id',
    element: <TourDetails />,
    errorElement: <Err404 />
  },
  {
    path: '/posts',
    element: <Blog />,
    errorElement: <Err404 />
  },
  {
    path: '/postPreview/:id',
    element: <BlogDetails />,
    errorElement: <Err404 />
  },
  {
    path: '*',
    element: <Err404 />
  }
])