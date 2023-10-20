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
import PrivateRoute from './private/PrivateRoute.jsx';
import AddToCart from './pages/AddToCart.jsx';
import MyCart from './pages/MyCart.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute>
          <AddToCart></AddToCart>
        </PrivateRoute>
      },
      {
        path: '/mycart',
        element : <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>

      }
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
