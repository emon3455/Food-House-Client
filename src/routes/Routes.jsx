/* eslint-disable no-unused-vars */
import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/ourMenu/menu/Menu";
import OurShop from "../pages/ourShop/shop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashboard/myCart/MyCart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItem from "../pages/dashboard/additems/AddItem";
import AdminRoute from "../privateRoute/AdminRoute";
import ManageItems from "../pages/dashboard/manageItem/ManageItems";
import Payment from "../pages/dashboard/payment/Payment";
import UserHome from "../pages/dashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import AddReview from "../pages/dashboard/addReview/AddReview";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/shop/:category",
          element: <OurShop></OurShop>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: "userHome",
          element: <UserHome></UserHome>
        },
        {
          path: "myCart",
          element: <MyCart></MyCart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "review",
          element: <AddReview></AddReview>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        
        // admin routes
        {
          path: "adminHome",
          element: <AdminRoute> <AdminHome></AdminHome> </AdminRoute>
        },
        {
          path: "allUsers",
          element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
        },
        {
          path: "addItem",
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
]);