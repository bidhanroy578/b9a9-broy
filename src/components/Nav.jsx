import { Link, NavLink } from "react-router";

const Nav = () => {
    const sublinks = <ul className=" z-50">
        <li><a href="/#featured">Buy</a></li>
        <li><a href="/#featured">Rent</a></li>
        <li><a href="/#featured">Just Sold</a></li>
        <li><a href="/#featured">Latest Listings</a></li>
    </ul>
    const mainLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
            <details>
                <summary>Properties ▼</summary>
                {sublinks}
            </details>
        </li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink>🔍 Search</NavLink></li>
    </>
    return (
        <>
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {mainLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl">🏡 Luxury Estates</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {mainLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Nav;