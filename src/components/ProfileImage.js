import React,{useRef, useState, useEffect} from 'react'
import {downloadUrl, uploadImage} from '../firebase/user'
export default function ProfileImage({id}) {
const fileInput=useRef(null);
const[imageUrl, setImageUrl]=useState('');

const fileChange= async (files)=>{

const imageRef=await uploadImage(id, files[0]);
const downloadUrl= await imageRef.getDownloadURL();
setImageUrl(downloadUrl);

}


useEffect(()=>{

downloadUrl(id).then(url=>!!url && setImageUrl(url));


},[id])






    return (
        <>
            <img className="w-full h-auto lg:w-5/12 rounded" src={imageUrl||'https://source.unsplash.com/Mv9hjnEUHR4/600x800'} alt="profile-img"
					/>
					<div className="md:w-2/3">
                        <input className="m-2 hidden" 
                        type="file" name="file"  
                        ref={fileInput} 
                        onChange={(e)=>fileChange(e.target.files)} />
                        <button className="p-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1" type="button"onClick={()=>fileInput.current.click()} >Upload Image</button>
                    </div>
        </>
    )
}
