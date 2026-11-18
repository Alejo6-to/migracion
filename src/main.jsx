import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './routes/routeApp'
import "./index.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={createBrowserRouter(router)}/>
    <Footer/>
  </StrictMode>,
)
