import React from 'react'

function ButtonWhite({ btnValue, onClickFunc}) {


    return (
        <>
            <button className="p-1 bg-white-500 text-black font-semibold rounded-lg shadow-md " onClick={onClickFunc} >{btnValue}  </button>
        </>
    )
}

export default ButtonWhite
