import React from 'react'

function ButtonGreen({ btnValue, onClickFunc }) {
    return (
        <>
            <button className="p-1 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 m-1" onClick={onClickFunc}  >{btnValue} </button>
        </>
    )
}

export default ButtonGreen