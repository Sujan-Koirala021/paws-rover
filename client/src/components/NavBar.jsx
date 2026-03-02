import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import appLogo from '../assets/images/app-logo.png';


export default function NavBar() {
    const [isDropDownOpen, setDropDown] = useState(false);

    const handleClick = () => {
        console.log("Handled click");
        setDropDown(!isDropDownOpen);
    };

    return (
        <nav className='bg-slate-300 shadow-lg py-4 px-6'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link to="/">

                    <img src={appLogo} alt="app logo" className='w-12 h-12 mr-3' />
                    </Link>

                    <div className='text-2xl font-bold mr-7 text-gray-900'>PawRover</div>
                    <div className='hidden md:flex space-x-6'>
                        <Link to="find-pet-sitter" className='text-gray-700 hover:text-gray-900'>Find pet sitter</Link>
                        <Link to="find-house-sit" className='text-gray-700 hover:text-gray-900'>Find house sit</Link>
                    </div>
                </div>
                <div className='hidden lg:flex space-x-6 items-center'>
                <Link to="faq" className='text-gray-700 hover:text-gray-900'>FAQ</Link>

                    <Link to="about" className='text-gray-700 hover:text-gray-900'>About</Link>
                    <Link to="how-it-works" className='text-gray-700 hover:text-gray-900'>How it works</Link>
                    <Link to="contact" className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded'>Contact Us</Link>
                </div>
                <button
                    id="menu-button"
                    className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700"
                    aria-label="Menu"
                    aria-expanded={isDropDownOpen}
                    onClick={handleClick}
                >
                    {isDropDownOpen ? (
                        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Close</title>
                            <path d="M10 8.586L16.95 1.636a1 1 0 011.414 1.414L11.414 10l6.95 6.95a1 1 0 01-1.414 1.414L10 11.414l-6.95 6.95a1 1 0 01-1.414-1.414L8.586 10 1.636 3.05A1 1 0 013.05 1.636L10 8.586z" />
                        </svg>
                    ) : (
                        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    )}
                </button>
            </div>
            {isDropDownOpen && (
                <div className="lg:hidden mt-2 flex flex-col space-y-4">
                    <Link to="find-pet-sitter" className='text-gray-700 hover:text-gray-900 p-2'>Find pet sitter</Link>
                    <Link to="find-house-sit" className='text-gray-700 hover:text-gray-900 p-2'>Find house sit</Link>
                    <Link to="about" className='text-gray-700 hover:text-gray-900 p-2'>About</Link>
                    <Link to="how-it-works" className='text-gray-700 hover:text-gray-900 p-2'>How it Works</Link>
                    <Link to="contact" className='text-gray-700 hover:text-gray-900 p-2'>Contact Us</Link>
                </div>
            )}
        </nav>
    );
}
