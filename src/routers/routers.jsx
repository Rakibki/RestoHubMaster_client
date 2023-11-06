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
import Checkout from "../pages/checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Add_food from "../pages/Add_food/Add_food";
import My_added_food from "../pages/my_added_food/My_added_food";
import My_oder_food from "../pages/my_oder_food/My_oder_food";

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
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute> <Checkout /> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product_details/${params.id}`)
        },
        {
          path: "/add_food",
          element: <PrivateRoute><Add_food /></PrivateRoute>
        },
        {
          path: "my_added_food",
          element: <My_added_food />
        },
        {
          path: "my_oder_food",
          element: <My_oder_food />
        }
      ],
    },
  ]);

  export default router