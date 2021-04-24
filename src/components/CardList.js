import React from 'react'
import Card from './Card'
import image1 from '../images/windowClean.jpg'
import image2 from '../images/HomeCleaning.jpg'
import image3 from '../images/DeepCleaning.jpg'
import image4 from '../images/movingClean.jpg'
import image5 from '../images/officeClean.jpg'
import image6 from '../images/coronaClean.jpg'
import image7 from '../images/propertyShowClean.jpg'

const arrayOfServiceObj = [
    { serviceName: "Window Cleaning", price: "899 kr", image: image1 },
    { serviceName: "Home Cleaning", price: "1800 kr", image: image2 },
    { serviceName: "Deep Cleaning", price: "899 kr", image: image3 },
    { serviceName: "Moving Cleaning", price: "899 kr", image: image4 },
    { serviceName: "Office Cleaning", price: "899 kr", image: image5 },
    { serviceName: "Sanitization Cleaning", price: "899 kr", image: image6 },
    { serviceName: "Property Showing Cleaning", price: "899 kr", image: image7 }
]



function CardList() {

    return (
        <div className="flex flex-row flex-wrap justify-center items-center">

            {arrayOfServiceObj.map((service) => {
                return (<Card image={service.image} serviceName={service.serviceName} price={service.price} />)


            })
            }

        </div>
    )
}

export default CardList
