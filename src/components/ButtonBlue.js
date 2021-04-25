import React from 'react'

function ButtonBlue({ btnValue }) {
    return (
        <>
            <button className="p-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1"> {btnValue} </button>
        </>
    )
}

export default ButtonBlue
