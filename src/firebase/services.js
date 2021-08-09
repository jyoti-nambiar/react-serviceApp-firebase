import {firestore} from './config'

export const createServiceDocument= async (title, description, cost, imageurl)=>{

//get a reference to firebase firestore
const docRef= firestore.collection('services');

//create user object
const serviceInfo={
    title:title,
    description:description,
    cost:cost,
    imageurl:imageurl
    
}
 //write to cloud firestore
 return docRef.add(serviceInfo);

}