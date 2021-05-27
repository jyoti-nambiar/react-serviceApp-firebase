import React from 'react'

function CustomerCard({ image, customerName, content }) {
    return (
        <div className="flex flex-col justify-center items-center py-20 m-4">
            <div><img src={image} alt="cleaning" className=" object-contain h-48 w-60 rounded-lg" /> </div>

            <div className="text-xs text-gray-600 uppercase font-bold">
                {customerName}
            </div>
            <p>{content}</p>
        </div>
    )
}

export default CustomerCard
