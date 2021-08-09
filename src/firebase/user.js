import {firestore} from './config'

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

