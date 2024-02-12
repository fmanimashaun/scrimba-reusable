import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/index.css';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import CounterPage from './pages/CounterPage'
import ToggleableFormPage from './pages/ToggleableFormPage'
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/counter',
        element: <CounterPage />,
      },
      {
        path: '/toggle-form',
        element: <ToggleableFormPage />,
      },
    ]
  }
], {
  basename: '/scrimba-reusable'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
