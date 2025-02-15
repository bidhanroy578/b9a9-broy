import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/Authcontext";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
    const { user, loading , logout } = useContext(AuthContext)
    const [shown , setShown] = useState(false)

    const handleLogout = () => {
        logout()
        .then(alert('logged out successfull'))
        .catch(err => alert(err.message))
    }

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
                <summary>Properties </summary>
                {sublinks}
            </details>
        </li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><a>🔍 Search</a></li>
    </>
    if (loading) { return <div className="h-[12vh]"></div> }
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
                    {
                        user ?
                            <div>
                                <CgProfile onClick={()=>setShown(!shown) } className="active text-2xl hover:scale-105 active:scale-95 transition relative"></CgProfile>
                                <div className={`${shown ? '' : 'hidden'} absolute top-14 right-0 p-5 space-y-3 z-50 text-end backdrop-blur-xs rounded-md shadow-2xl`} >
                                    <p>{user.displayName || 'Mr.'}</p>
                                    <p>{user.email || 'example@email.com'}</p>
                                    <button onClick={handleLogout} className="btn btn-md">Log Out</button>
                                </div>
                            </div>
                            :
                            <NavLink to={'/login'} className="btn">Log In</NavLink>
                    }
                </div>
            </div>
        </>
    );
};

export default Nav;