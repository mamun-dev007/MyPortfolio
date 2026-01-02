import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children: [
      { index: true,
         element: <Home></Home> 
        },
      { path: "/navbar",
         element: <Navbar></Navbar>
        },



    

      
 
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
