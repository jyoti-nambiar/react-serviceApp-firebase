import React, { useState } from 'react'
import {createServiceDocument} from '../firebase/services'
import {storage} from '../firebase/config';


function AddNewService() {

    const initialValues = {

        serviceName: "",
        description: "",
        price: 0,
        imageUrl:""

    }

    const [formValues, setFormValues] = useState(initialValues);
    const [uploadImage, setUploadImage] = useState();
    const [imgUrl, setimgUrl]= useState("");
    function handleOnChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }

    function handleUploadImage(e) {
console.log("This is the uploaded image",e.target.files[0]);
        setUploadImage(e.target.files[0])


    }

function handleClick(){
const storageRef = storage.ref();

var uploadTask = storageRef.child(`images/${uploadImage.name}`).put(uploadImage);

uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    
    
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      setimgUrl(downloadURL);
    });
  }
);


}





    function handleOnSubmit(e){
        
 e.preventDefault();


const serviceName=formValues.serviceName;
const description=formValues.description;
const price= formValues.price;

try{

    createServiceDocument(serviceName, description,price,imgUrl );
    console.log("Document successfully written!");
}
catch(error){
    console.error("Error writing document: ", error);
}; 

    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="font-bold text-center my-4 text-xl" >Add new Service </h2>
            <form className="w-full max-w-sm" onSubmit={handleOnSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Service Name
      </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="serviceName"
                            value={formValues.serviceName}
                            onChange={handleOnChange} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                            Description
      </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="textfield" name="description"
                            value={formValues.description}
                            onChange={handleOnChange}

                        ></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Price
      </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number"
                            name="price"
                            value={formValues.price}
                            onChange={handleOnChange} />
                    </div>

                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <input type="file" name="file" onChange={handleUploadImage} />
                        <button className="p-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1" type="button" onClick={handleClick}>Upload</button>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Add Service
      </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewService
