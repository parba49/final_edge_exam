import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,

    children=[
      {
        path: "/",
        loader:()=>fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings"),
        element: <></>,
      }
    ]
  },
  

  ]
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  
  
  <App></App>
  </StrictMode>,
)
