import React, { useState } from 'react'

function ResetPassword() {

    const [formValues, setFormValues] = useState();



    function onHandleChange(e) {


    }

    function onHandleSubmit(e) {
        e.preventDefault();

    }


    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-2xl font-black my-4">Reset Password</h1>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onHandleSubmit}>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
      </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
                            placeholder="Password"
                            name="password"
                            value=""

                        />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            confirm Password
      </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password"
                            placeholder="Password"
                            name="confirmPassword"
                            value=""

                        />

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
      </button>

                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Spik&Span Corp. All rights reserved.
  </p>
            </div >

        </div >

    )
}

export default ResetPassword
