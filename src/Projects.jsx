import React from 'react'
import EduVerse from './assets/EduVerse.png'
import blog from './assets/blog.jpg'
import paper from './assets/paper.png'
import food from './assets/food.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Projects() {

    return (
        <div className='bg-gradient-to-r from-[#3b3030] to-[#5b4444] bg-[#3E3232] h-auto p-5'>
            <div>
                <h1 className=' text-white text-5xl text-center p-3 my-5'>Projects</h1>
            </div>
            <div class="grid grid-cols-2 gap-0">
                <div className='max-w-md my-10 mx-auto bg-white rounded-md overflow-hidden shadow-lg'>
                    <img className='rounded-sm border-[#7E6363] border-4 mx-auto w-60 h-28' src={EduVerse} alt='' />
                    <div className='flex justify-center'>
                    <p className=' w-48 my-3 text-center '>It is a private repo. You can contact me to show our product.</p>
                    </div>
                    <div className='flex justify-center mb-2'>
                    <FaGithub
                        className="cursor-pointer text-gray-800 hover:text-gray-600"
                        size={24}
                        onClick={() => openLink('https://github.com/Ebdollah')}
                        />
                        </div>
                </div>
                <div className='max-w-md my-10 mx-auto bg-white rounded-md overflow-hidden shadow-lg'>
                    <img className='rounded-sm border-[#7E6363] border-4 mx-auto w-60 h-28' src={blog} alt='' />
                    <div className='flex justify-center'>
                    <p className=' w-48 my-3 text-center '>It is a private repo. You can contact me to show our product.</p>
                    </div>
                    <div className='flex justify-center mb-2'>
                    <FaGithub
                        className="cursor-pointer text-gray-800 hover:text-gray-600"
                        size={24}
                        onClick={() => openLink('https://github.com/Ebdollah')}
                        />
                        </div>
                </div>
                <div className='max-w-md my-10 mx-auto bg-white rounded-md overflow-hidden shadow-lg'>
                    <img className='rounded-sm border-[#7E6363] border-4 mx-auto w-60 h-28' src={paper} alt='' />
                    <div className='flex justify-center'>
                    <p className=' w-48 my-3 text-center '>It is a private repo. You can contact me to show our product.</p>
                    </div>
                    <div className='flex justify-center mb-2'>
                    <FaGithub
                        className="cursor-pointer text-gray-800 hover:text-gray-600"
                        size={24}
                        onClick={() => openLink('https://github.com/Ebdollah')}
                        />
                        </div>
                </div>
                <div className='max-w-md my-10 mx-auto bg-white rounded-md overflow-hidden shadow-lg'>
                    <img className='rounded-sm border-[#7E6363] border-4 mx-auto w-60 h-28' src={food} alt='' />
                    <div className='flex justify-center'>
                    <p className=' w-48 my-3 text-center '>It is a private repo. You can contact me to show our product.</p>
                    </div>
                    <div className='flex justify-center mb-2'>
                    <FaGithub
                        className="cursor-pointer text-gray-800 hover:text-gray-600"
                        size={24}
                        onClick={() => openLink('https://github.com/Ebdollah')}
                        />
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects