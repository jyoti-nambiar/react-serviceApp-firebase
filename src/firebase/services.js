import {firestore} from './config'

export const createServiceDocument= async (title, description, cost, imageurl)=>{

//get a reference to firebase firestore
const docRef= firestore.collection('services').doc();


 //write to cloud firestore
 return docRef.set({
title:title,
    description:description,
    cost:cost,
    imageurl:imageurl,
    id:docRef.id

 });

}