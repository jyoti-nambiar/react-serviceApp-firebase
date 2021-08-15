import React from 'react'

function CustomerCard({ image, customerName, content }) {
    return (
        <div className="flex flex-col justify-center items-center py-20 m-4">
            <div><img src={image} alt="cleaning" className=" h-28 w-28 rounded-full object-cover m-2.5 " /> </div>

            <div className="text-xs text-gray-600 uppercase font-bold m-2">
                {customerName}
            </div>
            <p>{content}</p>
        </div>
    )
}

export default CustomerCard
