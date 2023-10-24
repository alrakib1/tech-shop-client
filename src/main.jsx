import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AddProduct from "./pages/AddProduct.jsx";
import AppleProducts from "./pages/AppleProducts.jsx";
import DellProducts from "./pages/DellProducts.jsx";
import Details from "./pages/Details.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import GoogleProducts from "./pages/GoogleProducts.jsx";
import Home from "./pages/Home.jsx";
import HpProducts from "./pages/HpProducts.jsx";
import LogIn from "./pages/LogIn.jsx";
import MyCart from "./pages/MyCart.jsx";
import NokiaProduct from "./pages/NokiaProduct.jsx";
import Register from "./pages/Register.jsx";
import SamsungProducts from "./pages/SamsungProducts.jsx";
import Update from "./pages/Update.jsx";
import PrivateRoute from "./private/PrivateRoute.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/mycart"
          ),
      },
      {
        path: "/google",
        element: <GoogleProducts></GoogleProducts>,
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add"
          ),
      },
      {
        path: "/apple",
        element: <AppleProducts></AppleProducts>,
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add"
          ),
      },
      {
        path: "/dell",
        element: <DellProducts></DellProducts>,
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add"
          ),
      },
      {
        path: "/hp",
        element: <HpProducts></HpProducts>,
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add"
          ),
      },
      {
        path: "/samsung",
        element: <SamsungProducts></SamsungProducts>,
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add"
          ),
      },
      {
        path: "/nokia",
        element: <NokiaProduct></NokiaProduct>,
        loader: () =>
          fetch(
            "https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add"
          ),
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-shop-server-alrakib1-rakibs-projects-5f41d311.vercel.app/add/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
