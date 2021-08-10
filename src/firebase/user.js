
import {firestore, storage} from './config'

export const createUserDocument= async (user)=>{

//get a reference to firebase firestore
const docRef= firestore.doc(`/users/${user.uid}`);

//create user object
const userProfile={

    uid:user.uid,
    email:user.email,
    name:user.displayName,
    address:'',
    city:'',
    zipcode:'',
    phone:''


}
 //write to cloud firestore
 return docRef.set(userProfile)

}

export const uploadImage=(userId, file)=>{    
  return new Promise ((resolve, reject)=> { //file references
const filePath=`users/${userId}/Profile-image`;
const fileRef=storage.ref().child(filePath)

//upload task

const uploadTask=fileRef.put(file);

//on State change

uploadTask.on('state_changed', null,
 (error)=> reject(error), 
()=>{resolve(uploadTask.snapshot.ref)})
})
}


export const downloadUrl=(userId)=>{

const filePath=`users/${userId}/Profile-image`;
return storage.ref().child(filePath).getDownloadURL();


}