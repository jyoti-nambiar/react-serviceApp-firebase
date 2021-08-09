import {createContext,useState, useContext,useEffect} from 'react';
import {useSession} from '../firebase/UserProvider';
import {firestore} from '../firebase/config';
export const BookingContext =createContext();

export const BookingProvider=(props)=>{

const [bookingCount, setBookingsCount]= useState(0);
const {user}= useSession();

useEffect(()=>{
const fetchData= async ()=>{

firestore.collection("userBookings").where("uid", "==", `${user.uid}` )
    .get()
    .then((querySnapshot) => {
        const tempDoc = []
        
      querySnapshot.forEach((doc) => {
         tempDoc.push({ id: doc.id, ...doc.data() })
      })
      console.log("length",tempDoc.length);
setBookingsCount(tempDoc.length);
        }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
  
  

}

fetchData();

    }, [user.uid]);

return(

<BookingContext.Provider  value={bookingCount}>
{props.children}
</BookingContext.Provider>


)

}

export const Consumer=BookingContext.Consumer;




