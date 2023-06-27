import { FaHome, FaShoppingCart, FaWallet, FaCommentAlt, FaUsers, FaPlus, FaMoneyCheckAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import useCarts from "../hooks/useCarts";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCarts();

    // const isAdmin = false;
    // TODO: we will make it dynamically
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-orange-300 px-2">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu bg-orange-300">
                    <div className="mt-5 px-5">
                        <h2 className="text-xl lg:text-4xl font-bold">Food House</h2>
                        <p className="text-lg lg:text-2xl font-semibold">Restaurant</p>
                    </div>
                    <ul className="p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isAdmin
                                ?
                                <>
                                    <li><NavLink to="/dashboard/adminHome"> <FaHome></FaHome> Admin Home </NavLink></li>
                                    <li><NavLink to="/dashboard/addItem"> <FaPlus></FaPlus> Add Item </NavLink></li>
                                    <li><NavLink to="/dashboard/manageItems"> <HiAdjustmentsHorizontal></HiAdjustmentsHorizontal> Manage Items</NavLink></li>
                                    <li><NavLink to="/dashboard/allUsers"> <FaUsers></FaUsers> All Users </NavLink></li>
                                </>
                                :

                                <>
                                    <li><NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home </NavLink></li>
                                    <li><NavLink to="/dashboard/payment"> <FaMoneyCheckAlt></FaMoneyCheckAlt> Payment</NavLink></li>
                                    <li><NavLink to="/dashboard/paymentHistory"> <FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/myCart">
                                            <div className="indicator">
                                                <FaShoppingCart className="text-2xl font-normal"></FaShoppingCart>
                                                <span className="badge badge-sm indicator-item bg-red-600 border-none text-white">{cart?.length || "0"}</span>
                                            </div>
                                            My Cart
                                        </NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/review"> <FaCommentAlt></FaCommentAlt> Add Review </NavLink></li>
                                </>
                        }

                        <div className="divider"> </div>

                        <li><NavLink to="/"> <FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/menu"> <GrMenu></GrMenu>  Menu</NavLink></li>
                        <li><NavLink to="/shop/pizza"> <BsFillBagFill></BsFillBagFill> Shop</NavLink></li>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;