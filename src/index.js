import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Components
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Hotel from './pages/Hotel';
import Prices from './pages/Prices';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';

/* Llamar a router-dom */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Index />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <h1>Error</h1> 
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/booking",
    element: <Booking />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/hotel",
    element: <Hotel />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/prices",
    element: <Prices />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/why-us",
    element: <WhyUs />,
    errorElement: <h1>Error</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
