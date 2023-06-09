import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from './components/Register';
import App from './App';
import axios from "axios"

axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'no-cors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render
(
  <RouterProvider router={router} />
);
