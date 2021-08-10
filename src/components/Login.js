import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth'
import {signin,googlesignin} from '../firebase/auth';
import {useSession} from '../firebase/UserProvider';

function Login() {


    const initialValues = {

        email: "",

        password: ""


    }

    const [formValues, setFormValues] = useState(initialValues)
    const [error, setError] = useState("");
    const history = useHistory();
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user}=  useSession();

    //function call for submit
   async function onHandleSubmit(e) {

        e.preventDefault();

       let userLogin;
try{
userLogin= await signin(formValues) 

}catch(error){
console.log(error.message);
setError(error.message);
}
if(user){
history.push(`/profile/${userLogin.uid}`);
}

    }


    //function called for input fields onchange
    function onHandleChange(e) {

setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }


async function googleSignIn(){


try{
googlesignin(provider);

}catch(error){
const err=error;
setError(err);


}
if(user){
history.push(`/profile/${user.uid}`)
}
    }

    return (
        <>

            <div className="h-screen flex justify-center items-center">
                
                {(user) ? (<h2>Welcome {user.displayName}</h2>) : (


                    <div className="w-full max-w-xs">
                        <h1 className="text-2xl font-black my-4">Sign in to your account</h1>
                        <small className="text-red-600 my-4">{error}</small>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onHandleSubmit}>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="email">
                                    Email
      </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={onHandleChange}

                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="password">
                                    Password
      </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formValues.password}
                                    onChange={onHandleChange}
                                />

                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-black focus:shadow-outline" type="submit">
                                    Sign In
      </button>
      <hr className="mb-6 border-t" />
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/forgot-password">
                                    Forgot Password?
      </Link>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={googleSignIn}>
                                    <i className="fab fa-google m-2"></i>
                                    Sign-in with google
                                </button>
                            </div>
                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 m-4" to="/register">
                                Not Registered? Register
                            </Link>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2021 Spik&Span Corp. All rights reserved.
  </p>
                    </div >
                )}
            </div >
            
        </>
    )
}

export default Login
