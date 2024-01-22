// Navbar.js

import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



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
                    <Link to="/" className='text-white'>Home</Link>
                    <Link to="/about" className='text-white'>About</Link>
                    <Link to="/projects" className='text-white'>Projects</Link>
                    <Link to="/skills" className='text-white'>Skills</Link>
                    <Link to="/contact" className='text-white'>Contac Me</Link>
                </div>
                <div className="hidden md:flex space-x-4 ">
                    <FaGithub
                        className="cursor-pointer text-gray-800 hover:text-gray-600"
                        size={24}
                        onClick={() => openLink('https://github.com/your-username')}
                    />
                    <FaLinkedin
                        className="cursor-pointer text-blue-600 hover:text-blue-400"
                        size={24}
                        onClick={() => openLink('https://www.linkedin.com/in/your-username')}
                    />
                    <FaTwitter
                        className="cursor-pointer text-blue-400 hover:text-blue-300"
                        size={24}
                        onClick={() => openLink('https://twitter.com/your-username')}
                    />
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
                    <Link to="/" className='text-white block mb-2'>Home</Link>
                    <Link to="/about" className='text- block mb-2'>About</Link>
                    <Link to="/projects" className='text-white block mb-2'>Projects</Link>
                    <Link to="/skills" className='text-white block mb-2'>Skills</Link>
                    <Link to="/contact" className='text-white block mb-2'>Contac Me</Link>

                        <div className="flex items-center space-x-4">
                            <FaGithub
                                className="cursor-pointer text-gray-800 hover:text-gray-600"
                                size={24}
                                onClick={() => openLink('https://github.com/your-username')}
                            />
                            <FaLinkedin
                                className="cursor-pointer text-blue-600 hover:text-blue-400"
                                size={24}
                                onClick={() => openLink('https://www.linkedin.com/in/your-username')}
                            />
                            <FaTwitter
                                className="cursor-pointer text-blue-400 hover:text-blue-300"
                                size={24}
                                onClick={() => openLink('https://twitter.com/your-username')}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
