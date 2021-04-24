import React from 'react'

function ButtonWhite({ price }) {
    return (
        <>
            <button className="p-1 bg-white-500 text-black font-semibold rounded-lg shadow-md ">{price}</button>
        </>
    )
}

export default ButtonWhite
