import { Link } from "react-router-dom";

const Navbar = () => {

    const navMenu = <>
        <li><Link>Home</Link></li>
        <li><Link>Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
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