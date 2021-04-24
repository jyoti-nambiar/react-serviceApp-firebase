import React from 'react'
import CustomerCard from './CustomerCard'
import image1 from '../images/alice_pic.jpg'
import image2 from '../images/rob_pic.jpg'
import image3 from '../images/Ingrid_pic.jpg'

const arrayOfServiceObj = [
    { customerName: "Alice", content: "I like that I don't have to start the weekend with cleaning my home.", image: image1 },
    { customerName: "Robin", content: "Since we started using home cleaning through Spik&Span, we have had more time to spend with friends and family and also the energy and will to do fun things at these occasions.", image: image2 },
    { customerName: "Ingrid", content: "Home cleaning started to feel heavy due to increasing age and the solution with cleaning companies is great.", image: image3 },

]



function CustomerCardList() {
    return (
        <div className="flex flex-row p-20 justify-center align-center ">
            {arrayOfServiceObj.map((customer) => {
                return (<CustomerCard image={customer.image} customerName={customer.customerName} content={customer.content} />)


            })
            }
        </div>
    )
}

export default CustomerCardList
