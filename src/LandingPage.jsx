import React from 'react'
import Image from './assets/Image.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function LandingPage() {
    const openLink = (url) => {
        window.open(url, '_blank');
      };
    return (
        <div className='bg-gradient-to-r from-[#5b4444] to-[#3b3030] bg-[#3E3232] h-[90vh]'>
            <div className='p-7'>
                <img className='rounded-full border-[#7E6363] border-4 mx-auto w-44 h-44' src={Image} alt='' />
            </div>
            <div className=''>
                <h1 className=' text-white text-5xl text-center p-3'>Hi, I'm Abdullah</h1>
                <div className=' shadow-md rounded-2xl mx-20 p-3'>
                    <p className=' text-white text-1xl text-center p-3 mx-24'>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own. I'm proud to have collaborated with some awesome companies. I value simple content structure, clean design patterns, and thoughtful interactions. I like to code things from scratch.
                    </p>
                </div>
            </div>
            <div>
                <div className="flex justify-center p-4 space-x-4 ">
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
        </div>
    )
}

export default LandingPage