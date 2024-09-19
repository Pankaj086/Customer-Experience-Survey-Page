import React from 'react';
import { Link } from "react-router-dom";
// import welcomeimg from "../../public/welcome.jpeg"

function Home() {
    return (
        <div className="w-10/12 h-screen mx-auto flex justify-between items-center gap-4 -mt-8  ">
            <div className='lg:w-6/12 flex flex-col items-center justify-center gap-4'>
            <h1 className="text-5xl  md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">
                    Welcome !
                </h1>
                <p className="text-xl text-gray-700 mb-8 text-center">
                Welcome to our customer experience survey! Your feedback is incredibly valuable to us. Ready to get started? Click the <span className='text-red-600 font-semibold'>Start</span> button below!
                </p>
                <Link to="/questions">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-3xl">
                        Start
                    </button>
                </Link>
            </div>
            <div className='flex justify-center items-center'>
                <img className='hidden lg:block w-[30rem] h-[30rem] rounded-lg shadow-xl' src='/welcome.jpeg' alt=''/>
            </div>
        </div>
    );
}

export default Home;
