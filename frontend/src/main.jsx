import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import App from './App.jsx'
import Login from './components/Login'
import EmployeeTable from './features/employeeTable'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
      path:"/employee",
      element:<EmployeeTable></EmployeeTable>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)