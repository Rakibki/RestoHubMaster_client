import { createBrowserRouter } from "react-router-dom";
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
import Update_food from "../pages/update_food/Update_food";
import MyBookTable from "../pages/myBookTable/MyBookTable";
import Subscribers from "../pages/home/subscribers";
import ViewCard from "../pages/viewCard/ViewCard";
import DashboardLayout from "../layout/DashboardLayout";
import All_food_items from "../pages/bashboard/adminDashboard/all_food_items/All_food_items";
import Customer from "../pages/bashboard/adminDashboard/customar/Customer";
import useAxiosLocal from "../hooks/useAxiosLocal";
import PaymentHistory from "../pages/bashboard/userDashboard/paymentHistrory/PaymentHistory";
import Oders from "../pages/bashboard/adminDashboard/all_oders/Oders";
import Profile from "../components/profile/Profile";
import OurMenu from "../pages/ourMenu/OurMenu";
import Wishlist from "../pages/bashboard/userDashboard/wishlist/Wishlist";
import UserHome from "../pages/bashboard/userDashboard/userHome/UserHome";
import AdminHome from "../pages/bashboard/adminDashboard/adminHome/AdminHome";
import DevliveryManHome from "../pages/bashboard/devliveryManDashboard/devliveryManHome/DevliveryManHome";
import MyDeliveryList from "../pages/bashboard/devliveryManDashboard/myDeliveryList/MyDeliveryList";
import AllTableBook from "../pages/bashboard/adminDashboard/allTableBook/AllTableBook";
import MyReview from "../pages/bashboard/devliveryManDashboard/MyReview/MyReview";
import ContactUs from "../pages/contactUs/ContactUs";

const axiosLocal = useAxiosLocal();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allFood",
        element: <All_food />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/food_details/:id",
        element: <FoodDetails />,
        loader: async ({ params }) => {
          const res = await axiosLocal(`/product_details/${params.id}`);
          return res?.data;
        },
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "myCard",
        element: <ViewCard />,
      },
      {
        path: "my_oder_food",
        element: <My_oder_food />,
      },
      {
        path: "add_food",
        element: (
          <PrivateRoute>
            <Add_food />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "MyBookTable",
        element: <MyBookTable />,
      },
      {
        path: "MyBookTable",
        element: <MyBookTable />,
      },
      {
        path: "customers",
        element: <Customer />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "subscribers",
        element: <Subscribers />,
      },
      {
        path: "all-Oders",
        element: <Oders />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "myReview",
        element: <MyReview />,
      },
      {
        path: "allTablebook",
        element: <AllTableBook />
      },
      {
        path: "myDeliveryList",
        element: <MyDeliveryList />,
      },
      {
        path: "deviverManHome",
        element: <DevliveryManHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "all_foods",
        element: <All_food_items />,
      },
      {
        path: "my_added_food",
        element: (
          <PrivateRoute>
            {" "}
            <My_added_food />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <Update_food />,
        loader: ({ params }) =>
          fetch(
            `https://server-omega-ten-11.vercel.app/product_details/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
