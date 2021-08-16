import firebase from 'firebase/app';
import React, {useEffect, useState} from 'react';
import {firestore} from '../firebase/config'
import {useParams} from 'react-router-dom'
import ProfileImage from './ProfileImage';
import { useHistory } from 'react-router-dom';
import ButtonRed from './ButtonRed';
import {logout} from '../firebase/auth'
const Profile = () => {

    // const[formValue, setFormValues]=useState(initialValue)
    const [userDocument,
        setUserDocument] = useState(null);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {

        const docRef = firestore
            .collection("users")
            .doc(params.id);
        const unsubscribe = docRef.onSnapshot((document) => {
            if (document.exists) {
                const data = document.data();

                setUserDocument(data);
                
            			}

        })

        return unsubscribe
    }, [params.id])

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        const docRef = firestore
            .collection("users")
            .doc(params.id);
        
        return docRef
            .update({
            address: userDocument.address,
            city: userDocument.city,
            email: userDocument.email,
            firstName: userDocument.firstName,
            lastName: userDocument.lastName,
            phone: userDocument.phone,
            zipcode: userDocument.zipcode

        })
            .then(() => {
                console.log("Document successfully updated!");
                
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    }

    const handleOnChange = (e) => {
        setUserDocument({
            ...userDocument,
            [e.target.name]: e.target.value
        })

    }

const deleteProfile=(e) =>{
     e.preventDefault();
     firestore.collection("users")
            .doc(`${params.id}`)
            .delete()
            .then(() => {
                console.log("Document successfully deleted!");
               const userDelete = firebase.auth().currentUser; 
               userDelete.delete().then(() => {
               logout();
                history.push('/login');
               }
               
               )} )
.catch((error) => {
                console.error("Error removing document: ", error);
            });

        
        
        
        }
            

    if (!userDocument) {
        return(
 <div className="h-screen flex flex-col p-20 justify-center items-center bg-gray-300">
     <p>Register with us to create your profile

     </p>
 </div>


        )

    }
    

    return (
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">

                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col">

                        <ProfileImage id={params.id}/>

                    </div>

                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">My Profile!</h3>
                        <form
                            className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                            onSubmit={handleOnSubmit}>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="firstName"
                                        type="text"
                                        value={userDocument.firstName}
                                        onChange={handleOnChange}/>
                                </div>
                                <div className="md:ml-2">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={userDocument.lastName}
                                        onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={userDocument.email}
                                    onChange={handleOnChange}/>
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="password">
                                        Address
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="address"
                                        type="text"
                                        value={userDocument.address}
                                        onChange={handleOnChange}/>

                                </div>
                                <div className="md:ml-2">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="c_password">
                                        City
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="city"
                                        type="text"
                                        placeholder=""
                                        value={userDocument.city}
                                        onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Zipcode">
                                        Zipcode
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="zipcode"
                                        type="text"
                                        placeholder=""
                                        value={userDocument.zipcode}
                                        onChange={handleOnChange}/>

                                </div>
                                <div className="md:ml-2">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="phonenumber">
                                        Phone number
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="phone"
                                        type="tel"
                                        placeholder=""
                                        value={userDocument.phone}
                                        onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Update Profile
                                </button>
                                <ButtonRed btnValue="Delete Profile"  onClickFunc={deleteProfile}  />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;