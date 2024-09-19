import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-center items-center relative bg-blue-200 shadow-xl'>
            <Link to="/">
                <img className='-mt-4 lg:-mt-8' 
                src="/mainlogo.svg" alt="customer survey" />
            </Link>
        </div>
    )
}

export default Navbar;