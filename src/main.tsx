import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/Home.tsx";
import ComponentsList from "./components/ComponentsList.tsx";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/components',
                element: <ComponentsList/>
            }
        ]

    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={routes}/>
  </StrictMode>,
)
