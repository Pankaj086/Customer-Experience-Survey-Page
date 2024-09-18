import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../Utils/Data';
import Rating from '@mui/material/Rating';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Questions() {
    const [id, setId] = useState(0); 
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [sessionId, setSessionId] = useState('');
    const navigate = useNavigate();

    console.log(isCompleted);

    useEffect(() => {
        const existingSessionId = localStorage.getItem('sessionId');
        if (!existingSessionId) {
            const newSessionId = Date.now().toString();  // date.now unique sessionId ke liye hai
            localStorage.setItem('sessionId', newSessionId);
            setSessionId(newSessionId);
        } else {
            setSessionId(existingSessionId);
        }

        const storedResponses = JSON.parse(localStorage.getItem('surveyResponses')) || {};
        const currentResponse = storedResponses[id];
        if (currentResponse) {
            setValue(currentResponse.rating || 0);
            setMessage(currentResponse.message || ''); 
        } else {
            setValue(0);
            setMessage('');
        }
    }, [id]);

    const saveResponse = () => {
        const storedResponses = JSON.parse(localStorage.getItem('surveyResponses')) || {};
        storedResponses[id] = { rating: value, message: message };
        localStorage.setItem('surveyResponses', JSON.stringify(storedResponses));
    };

    const prevHandler = () => {
        if (id > 0) {
            saveResponse();
            setId(id - 1);
        }
    };

    const nextHandler = () => {
        if (id !== data.length - 1) {
            saveResponse();
            setId(id + 1);
        }
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const submitHandler = () => {
        saveResponse();
        const storedResponses = JSON.parse(localStorage.getItem('surveyResponses')) || {};
        storedResponses['completed'] = true;
        storedResponses['sessionId'] = sessionId;
        localStorage.setItem('surveyResponses', JSON.stringify(storedResponses));

        if (window.confirm("Do you want to submit the survey ?")) {
            setIsCompleted(true);
            navigate('/thankyou');
            setTimeout(() => {
                navigate('/');
            }, 5000);
        }
    };

    return (
        <div className='w-10/12 relative mx-auto flex flex-col gap-8 items-center'>
            <h1 className='fixed right-4 mt-4 px-4 py-2 bg-gray-600 text-white font-semibold text-lg rounded-lg'>{id+1}/{data.length}</h1>
            <h1 className='text-5xl mt-24 text-slate-700 font-semibold'>{data[id].title}</h1>

            {data[id].rating > 0 && (
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    max={data[id].rating}
                    sx={{ '& .MuiRating-icon': { fontSize: '60px' } }}
                />
            )}

            {data[id].text && (
                <div className='w-full max-w-xl mx-auto'>
                    <textarea
                        value={message}
                        onChange={handleChange}
                        placeholder='Please provide your feedback here...'
                        rows={4}
                        className='w-full border-2 border-gray-400 p-4 text-xl rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
            )}

            <div className='relative flex justify-between sm:flex-col'>
                <button
                className="text-white bg-red-500 pl-2 pr-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition fixed bottom-8 left-8 text-2xl"
                onClick={prevHandler}><NavigateNextIcon 
                        fontSize="large" 
                        style={{ transform: 'rotate(180deg)', transition: 'transform 0.3s ease' }} 
                    />Prev
                </button>
                {
                    id !== data.length - 1 ? (
                        <button
                        className="text-white bg-red-500 pr-2 pl-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition fixed bottom-8 right-8 text-2xl" 
                        onClick={nextHandler}>Next<NavigateNextIcon fontSize="large"/></button>
                    ) : (
                        <button 
                        className="text-white bg-green-500 px-6 py-4 rounded-lg shadow-md hover:bg-green-600 transition fixed bottom-8 right-8 text-2xl" onClick={submitHandler}>Submit</button>
                    )
                }
            </div>
        </div>
    );
}

export default Questions;
