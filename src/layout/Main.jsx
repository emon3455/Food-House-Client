import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";

const Main = () => {

    const location = useLocation();
    const hideNavbarFooter = location?.pathname.includes("login");

    return (
        <div>
            {hideNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;