import firebase from 'firebase/app';
import 'firebase/auth';

function GoogleProvider(provider) {
   
  // [START auth_google_signin_popup]
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      
      // This gives you a Google Access Token. You can use it to access the Google API.
     
      
      // The signed-in user info.
     
    
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error)
      // ...
    });
  // [END auth_google_signin_popup]


}


export default GoogleProvider