import firebase from 'firebase/app';
import 'firebase/auth';
import {createUserDocument} from './user'


export const signup=async ({username,email, password})=>{
const resp= await firebase.auth().createUserWithEmailAndPassword(email,password);
const user = resp.user;
await user.updateProfile({displayName:`${username}`});
await createUserDocument(user);

return user;
}

export const logout =()=>{
return firebase.auth().signOut();

}

export const signin= async({email, password})=>{

const resp= await firebase.auth().signInWithEmailAndPassword(email, password);
const user=resp.user;
return user;
}

export const googleSignIn= async(provider)=>{

const resp= await firebase.auth().signInWithPopup(provider);
const oAuthUser=resp.user;
return oAuthUser;
}

export const facebookSignIn= async(provider)=>{

const resp=await firebase.auth().signInWithPopup(provider);
const oAuthUser=resp.user;
return oAuthUser;

 
}


export const resetPassword=async(email)=>{

const resp=await firebase.auth().sendPasswordResetEmail(email);
return resp;

}

