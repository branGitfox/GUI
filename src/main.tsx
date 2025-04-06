import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:''
            }
        ]

    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={routes}/>
  </StrictMode>,
)
