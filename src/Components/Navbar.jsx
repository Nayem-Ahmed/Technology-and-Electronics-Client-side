import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png';
import { IoIosArrowDown } from "react-icons/io";
import useAuth from '../Hook/useAuth';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <nav className="navbar z-50 relative shadow-md">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img className='max-w-44' src={logo} alt="Logo" /></Link>
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><Link className='hover:text-blue-500' to="/" onClick={closeMenu}>HOME</Link></li>
                    <li><Link className='hover:text-blue-500' to="/addproducts" onClick={closeMenu}>ADD PRODUCTS</Link></li>
                    <li><Link className='hover:text-blue-500' to="/mycart" onClick={closeMenu}>MY CART</Link></li>
                    <li className='flex hover:text-blue-500'><Link className='hover:text-blue-500' onClick={closeMenu}>PAGES</Link><IoIosArrowDown className='relative mt-1'></IoIosArrowDown>
                        {/* DropdownMenu */}
                        <ul className='dropdown-menu'>
                            <li><Link className='hover:text-blue-500' to='/' onClick={closeMenu}>FAQ</Link></li>
                            <li><Link className='hover:text-blue-500' to='/' onClick={closeMenu}>404 Error Page</Link></li>
                            <li><Link className='hover:text-blue-500' to='/' onClick={closeMenu}>Login</Link></li>
                            <li><Link className='hover:text-blue-500' to='/' onClick={closeMenu}>Register</Link></li>
                            <li><Link className='hover:text-blue-500' to='/' onClick={closeMenu}>Terms And Conditions</Link></li>
                        </ul>
                    </li>
                    <li><Link className='hover:text-blue-500' to="/blog" onClick={closeMenu}>BLOG</Link></li>
                    <li><Link className='hover:text-blue-500' to="/contactus" onClick={closeMenu}>CONTACT US</Link></li>
                    {
                        user?.email ?
                            <div className='flex items-center gap-2'>
                                <img className='rounded-full w-8' src={user?.photoURL} alt="" />
                                <span>{user?.displayName}</span>
                                <Link>
                                    <button onClick={logOut} className="bg-blue-500 hover:bg-blue-700 px-4 py-2 font-semibold text-white">Logout</button>
                                </Link>

                            </div>

                            :
                            <Link onClick={logOut} to='/login'><button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 font-semibold text-white" type="button" onClick={closeMenu}>LOGIN</button></Link>
                    }

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;