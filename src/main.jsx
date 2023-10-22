import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import LogIn from './pages/LogIn.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import MyCart from './pages/MyCart.jsx';
import PrivateRoute from './private/PrivateRoute.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AddProduct from './pages/AddProduct.jsx';
import GoogleProducts from './pages/GoogleProducts.jsx';
import AppleProducts from './pages/AppleProducts.jsx';
import Details from './pages/Details.jsx';
import DellProducts from './pages/DellProducts.jsx';
import HpProducts from './pages/HpProducts.jsx';
import SamsungProducts from './pages/SamsungProducts.jsx';
import NokiaProduct from './pages/NokiaProduct.jsx';
import Update from './pages/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/add',
        element :<PrivateRoute> 
            <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path : '/mycart',
        element : <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader : ()=> fetch('http://localhost:5000/mycart')
      },
      {
        path: '/google',
        element : <GoogleProducts></GoogleProducts>,
        loader : ()=> fetch('http://localhost:5000/add')
      },
      {
        path: '/apple',
        element : <AppleProducts></AppleProducts>,
        loader : ()=> fetch('http://localhost:5000/add')
      },
      {
        path: '/dell',
        element : <DellProducts></DellProducts>,
        loader : ()=> fetch('http://localhost:5000/add')
      },
      {
        path: '/hp',
        element : <HpProducts></HpProducts>,
        loader : ()=> fetch('http://localhost:5000/add')
      },
      {
        path: '/samsung',
        element : <SamsungProducts></SamsungProducts>,
        loader : ()=> fetch('http://localhost:5000/add')
      },
      {
        path: '/nokia',
        element : <NokiaProduct></NokiaProduct>,
        loader : ()=> fetch('http://localhost:5000/add')
      },
      
      {
        path: '/details/:id',
        element : <PrivateRoute><Details></Details></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/add/${params.id}`)
      },
      {
        path: '/update/:id',
        element : <PrivateRoute><Update></Update></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/add/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
