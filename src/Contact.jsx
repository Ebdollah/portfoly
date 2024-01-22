import React,{useState} from 'react'


function Contact() {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        message:"",
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputValue((inputvalue) => ({
            ...inputvalue,
            [name]:value
        }));
    };

    return (
        <div className="flex justify-center py-10 bg-gradient-to-r from-[#5b4444] to-[#3b3030]">
           <div className='rounded-lg border border-gray-700  bg-[#3E3232] h-[90vh] p-10 w-[400px]'>
             {/* Label for the input */}
             <label className="block text-sm font-medium text-slate-200">
                Name
            </label>
            {/* Input field */}
            <input
                type="text"
                id="name"
                name="name"
                value={inputValue.name}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter something..."
            />
           <label className="block text-sm mt-5 font-medium text-slate-200">
                Email
            </label>
            <input
                type="email"
                id = "email"
                name="email"
                value={inputValue.email}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter something..."
            />
            <label className="block text-sm mt-5 font-medium text-slate-200">
                message
            </label>
            <input 
                type="text"
                id="message"
                name="message"
                value={inputValue.message}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full h-40"
                placeholder="Enter something..."
            />
            <button className="rounded-lg p-3 bg-stone-100 mt-5 w-24 text-2xl hover:bg-white hover:text-black">Send</button>
           </div>
        </div>
    );


}

export default Contact