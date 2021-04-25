import React, { useState } from 'react'
import Card from './Card'
import image from '../images/coronaClean.jpg'
function MyBookingForm() {




    const initialValues = {

        personName: " ",

        time: " ",

        telephone: " "

    }

    const [formValues, setFormValues] = useState(initialValues)




    function onHandleSubmit(e) {

        e.preventDefault();

        console.log("personName:", formValues.personName, "time:", formValues.time, "telephone:", formValues.telephone)

        // ska skickas till database via api /Api endpoint

    }



    function onHandleChange(e) {

        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }




    return (

        <div className="flex  flex-col justify-center items-center m-5">
            <form className="w-full max-w-sm" onSubmit={onHandleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
      </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"
                            type="text"
                            placeholder="Enter Your Name"
                            name="personName"
                            value={formValues.personName}
                            onChange={onHandleChange} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Preferred Timing
      </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number"
                            placeholder="Enter Time"
                            name="time"
                            value={formValues.time}
                            onChange={onHandleChange} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Telephone Number
      </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number"
                            placeholder="Enter Telephone number"
                            name="telephone"
                            value={formValues.telephone}
                            onChange={onHandleChange} />
                    </div>
                </div>


                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Confirm Booking
      </button>
                    </div>
                </div>
            </form>





            {/*
            <div className="flex flex-col justify-center items-center bg-white py-20 ">
                <form onSubmit={onHandleSubmit} >

                    <label> Your Name </label> <input className="border" placeholder="Name" value={formValues.personName} name="personName" onChange={onHandleChange} /> <br />

                    <label> Preferred Timing: </label> <input className="border " placeholder="Time " type="number" name="time" value={formValues.time} onChange={onHandleChange} /><br />

                    <label> Telephone Number: </label> <input className="border " placeholder="Telephone " type="number" name="telephone" value={formValues.telephone} onChange={onHandleChange} /><br />


                    <button className="bg-purple-600">Confirm Booking </button>

                </form>





            </div>

*/}
            <div>
                <Card image={image} serviceName="Sanitization Clean"
                    price="Cancel" btnName="Book Again" />

            </div>
        </div >
    )

}



export default MyBookingForm