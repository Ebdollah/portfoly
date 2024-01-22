import React from 'react'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNode,
    FaPython,
    // FaFlutter, // Added for Flutter
    FaCogs, // Added for Algorithms
    FaGit,
    FaDatabase,
    FaChartBar, // Added for Data Science
    
} from 'react-icons/fa';


function Skills() {
    return (
        <div className='bg-gradient-to-r from-[#5b4444] to-[#3b3030] bg-[#3E3232] h-[60vh]'>
            <div>
                <h1 className=' text-white text-5xl text-center p-7'>Skills</h1>
            </div>
            <div className='grid grid-cols-4 gap-1 shadow-md rounded-2xl mx-20 p-3'>

                <div className='mx-auto my-3'><FaJs     size={40} title="JavaScript" />   </div>
                <div className='mx-auto my-3'><FaReact  size={40} title="React.js" />     </div>
                <div className='mx-auto my-3'><FaNode   size={40} title="Node.js" />      </div>
                <div className='mx-auto my-3'><FaPython size={40} title="Python" />       </div>
                <div className='mx-auto my-3'><FaChartBar size={40} title="Flutter" />    </div>   
                <div className='mx-auto my-3'><FaGit    size={40} title="Git" />          </div>    
                <div className='mx-auto my-3'><FaDatabase size={32} title="Database" />   </div>
                <div className='mx-auto my-3'><FaCogs   size={32} title="Other Skills" /> </div> 
            </div>
        </div>
    )
}

export default Skills