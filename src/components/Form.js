import React, { useState } from 'react'
import Card from './Card'
import image from '../images/coronaClean.jpg'
function Form() {




    const initialValues = {

        personName: " ",

        time: " ",

        telephone: " "

    }

    const [formValues, setFormValues] = useState(initialValues)




    function onHandleSubmit(e) {

        e.preventDefault();



        console.log(formValues)

        // ska skickas till database via api /Api endpoint





    }



    function onHandleChange(e) {

        // fixa detta






        console.log("SINGLE NAME ", e.target.name);



        const name = [...e.target.name];



        console.log("NAME PROPERTIES ARRAY", name);




        console.log("VALUE", e.target.value);




        console.log("Form values ", formValues);

        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }




    return (

        <div className="flex  flex-col justify-center items-center m-5">
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Preferred Timing
      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" value="10" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Telephone Number
      </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" value="0769768446" />
                    </div>
                </div>


                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
                    price="Cancel" />

            </div>
        </div>
    )

}



export default Form