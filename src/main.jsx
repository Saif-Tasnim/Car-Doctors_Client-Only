import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import LogIn from './Pages/LogIn/Login/LogIn';
import Register from './Pages/LogIn/Register/Register';
import AuthProvider from './providers/AuthProvider';
import CheckOut from './Pages/CheckOut/CheckOut';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import MyServiceList from './Pages/MyServiceList/MyServiceList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "checkout/:id",
        element: <PrivateRoutes> <CheckOut></CheckOut>         </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://car-doctors-server-six.vercel.app/services/${params.id}`)
      },
      {
        path: 'myServiceList',
        element: <PrivateRoutes><MyServiceList></MyServiceList></PrivateRoutes>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
