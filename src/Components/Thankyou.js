import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
    const [sessionId, setSessionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedSessionId = localStorage.getItem('sessionId');
        if (storedSessionId) {
            setSessionId(storedSessionId);
        }
    }, []);

    setTimeout(() => {
        localStorage.removeItem('sessionId');
        localStorage.removeItem('surveyResponses');
        
        navigate('/');
    }, 5000);

    return (
        <div className="w-10/12 h-screen mx-auto flex flex-col items-center justify-center ">
            <div className="flex flex-col gap-8 text-center p-10">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
                <p className="text-2xl text-gray-700 mb-6">
                    We appreciate your feedback. Your responses have been recorded.
                </p>
                <p className="text-xl text-gray-500 mb-6">
                    Your session ID is: <span className="font-semibold text-gray-800">{sessionId}</span>
                </p>
                <Link to="/" className="text-white w-fit mx-auto bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default ThankYou;
