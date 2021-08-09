import React,{useEffect, useState} from 'react';
import {firestore} from '../firebase/config'
import {useParams} from 'react-router-dom'

const Profile=()=>{


// const[formValue, setFormValues]=useState(initialValue)
const [userDocument, setUserDocument]= useState(null);
const [isLoading, setIsLoading] = useState(false);
const params = useParams();



useEffect(()=>{

const docRef=firestore.collection("users").doc(params.id);
const unsubscribe=docRef.onSnapshot((document)=>{
if(document.exists){
    const data=document.data();
 
setUserDocument(data);
console.log(data);
}


})

return unsubscribe}, [params.id])

const handleOnSubmit= async(e)=>{
e.preventDefault();
const docRef = firestore.collection("users").doc(params.id);
setIsLoading(true);
// Set the "capital" field of the city 'DC'
return docRef.update({
   address:userDocument.address,
   city:userDocument.city,
   email:userDocument.email,
   firstName:userDocument.firstName,
   lastName:userDocument.lastName,
   phone:userDocument.phone,
   zipcode:userDocument.zipcode 

})
.then(() => {
    console.log("Document successfully updated!");
     setIsLoading(false);
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

}

const handleOnChange= (e)=>{
setUserDocument({ ...userDocument, [e.target.name]: e.target.value })

}




if(!userDocument){
return null;

}
const formCass= `big-form ${isLoading?'loading':' '}`;

return(
    <div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
			
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`}}
					>
<button className="p-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1" type="button" >Upload</button>


					</div>
				
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">My Profile!</h3>
						<form class={`px-8 pt-6 pb-8 mb-4 bg-white rounded ${formCass}`} onSubmit={handleOnSubmit}>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										First Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="firstName"
										type="text"
                    value={userDocument.firstName}
                    onChange={handleOnChange}
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Last Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="lastName"
										type="text"
										placeholder="Last Name"
                    value={userDocument.lastName}
                     onChange={handleOnChange}
                    

									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									name="email"
									type="email"
									placeholder="Email"
                  value={userDocument.email}
                   onChange={handleOnChange}
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
										Address
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="address"
										type="text"
                    value={userDocument.address}
                    onChange={handleOnChange}
									/>
						
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										City
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="city"
										type="text"
										placeholder=""
                    value={userDocument.city}
                     onChange={handleOnChange}
									/>
								</div>
							</div>
              	<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="Zipcode">
										Zipcode
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="zipcode"
										type="text"
										placeholder=""
                    value={userDocument.zipcode}
                     onChange={handleOnChange}
									/>
						
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="phonenumber">
										Phone number
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="phone"
										type="tel"
										placeholder=""
                    value={userDocument.phone}
                     onChange={handleOnChange}
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Update Profile
								</button>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
)
}

export default Profile;