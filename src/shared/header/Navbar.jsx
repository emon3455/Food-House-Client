/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire(
                'SignOut Successfully Done!',
                'Success!',
                'success'
            );
                    
    }).catch ((error) => {
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
            <li><button onClick={handleLogOut} className="btn btn-primary">Log Out</button></li>
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
                    <ul tabIndex={0} className="menu space-y-2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Food House</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu space-x-2 menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
        </div>

    </>
);
};

export default Navbar;