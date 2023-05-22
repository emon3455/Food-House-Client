import { Outlet } from "react-router-dom";
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;