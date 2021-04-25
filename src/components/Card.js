import React from 'react'
import ButtonBlue from './ButtonBlue'
import ButtonWhite from './ButtonWhite'
function Card({ image, serviceName, price, btnName }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white py-20 m-4">
                <div bg-indigo-300><img src={image} alt="cleaning" className=" object-contain h-48 w-60 rounded" /> </div>

                <div className="text-xs text-gray-600 uppercase font-bold">
                    {serviceName}
                </div>




                <div className="flex space-x-1">
                    <ButtonBlue btnValue={btnName} />
                    <ButtonWhite price={price} />
                </div>
            </div>
        </>
    )
}

export default Card;
