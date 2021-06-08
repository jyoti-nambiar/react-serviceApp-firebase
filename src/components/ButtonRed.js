import React from 'react'

function ButtonRed({ btnValue, onClickFunc }) {
    return (
        <>
            <button className="p-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 m-1" onClick={onClickFunc}  >{btnValue} </button>
        </>
    )
}

export default ButtonRed
