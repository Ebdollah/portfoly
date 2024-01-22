// Navbar.js

import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openLink = (url) => {
        window.open(url, '_blank');
      };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#2c2a2a] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-white text-lg font-bold">profiley</span>
                </div>
                {/* //hidden: This class is used to hide the element by default. In this case, on screens smaller than the medium breakpoint (md), the entire div and its children will be hidden.
//md:flex: This class ensures that the div and its children will be displayed as a flex on screens equal to or larger than the medium breakpoint.  */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white">
                        Home
                    </a>
                    <a href="#" className="text-white">
                        Contact
                    </a>
                    <a href="#" className="text-white">
                        About
                    </a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white">
                        Signin
                    </a>
                    <a href="#" className="text-white">
                        Logout
                    </a>
                </div>
                {/* //This class ensures that the div and its children will be hidden on screens equal to or larger than the medium breakpoint. */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        <BsList className="h-6 w-6" />

                    </button>
                </div>
                {/* //This class ensures that the div and its children will be hidden on screens equal to or larger than the medium breakpoint.
//So it will only be visible on screens smaller than the medium breakpoint. */}
                {isOpen && (
                    <div className="md:hidden absolute top-14 left-0 right-0 bg-gray-700 p-4">
                        <a href="#" className="text-white block mb-2">
                            Home
                        </a>
                        <a href="#" className="text-white block mb-2">
                            Contact
                        </a>
                        <a href="#" className="text-white block mb-2">
                            About
                        </a>
                        <div className="flex items-center space-x-4">
                            <button className="text-white">Login</button>
                            <button className="text-white">Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
