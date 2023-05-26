import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/ourMenu/menu/Menu";
import OurShop from "../pages/ourShop/shop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
          element: <PrivateRoute><Menu></Menu></PrivateRoute>
        },
        {
          path: "/shop/:category",
          element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
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
]);