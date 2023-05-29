/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'SignOut Successfully Done!',
                    'Success!',
                    'success'
                );

            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
    }

    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/shop/pizza">Our Shop</Link></li>
        {
            user
                ?
                <>
                    <li><span onClick={handleLogOut} className="bg-warning rounded-xl font-bold py-0 my-auto btn-sm">Logout</span></li>
                </>
                :
                <li><Link to="/login">Log In</Link></li>
        }
    </>

    return (
        <>

            <div className="navbar max-w-6xl mx-auto fixed z-20 bg-black text-white bg-opacity-60">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu space-y-2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-gray-900 rounded-box w-52">
                            {navMenu}
                        </ul>

                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food House</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu space-x-2 menu-horizontal px-1">
                            {navMenu}
                        </ul>
                    </div>

                    <Link to="/dashboard">
                        <label className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaShoppingCart className="text-2xl font-normal"></FaShoppingCart>
                                <span className="badge badge-sm indicator-item bg-red-600 border-none text-white">{cart?.length || "0"}</span>
                            </div>
                        </label>
                    </Link>

                    {
                        user
                        &&
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user && user.photoURL} />
                            </div>
                        </label>
                    }
                </div>

            </div>

        </>
    );
};

export default Navbar;