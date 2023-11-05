import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import All_food from "../pages/all_food/All_food";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import FoodDetails from "../pages/food_details/FoodDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/allFood",
          element: <All_food />,
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/food_details/:id",
          element: <FoodDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/product_details/${params.id}`)
        }
      ],
    },
  ]);

  export default router