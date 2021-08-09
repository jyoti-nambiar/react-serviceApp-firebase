import React, { useState, useEffect } from 'react'
import BookingCard from './BookingCard';
import {firestore} from '../firebase/config';
import {useSession} from '../firebase/UserProvider';

function MyBooking() {

const [bookings, setBookings] = useState([]);

const {user}= useSession();


//fetch data from strapi
  useEffect(()=>{
const fetchData= async ()=>{

firestore.collection("userBookings").where("uid", "==", `${user.uid}` )
    .get()
    .then((querySnapshot) => {
        const tempDoc = []
        
      querySnapshot.forEach((doc) => {
         tempDoc.push({ id: doc.id, ...doc.data() })
      })
      console.log(tempDoc)
setBookings(tempDoc);

        }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
  
  

}

fetchData();

    }, [user.uid]);


    return (

    <div className="grid grid-cols-3 gap-10 content-evenly m-10   ">
       
{bookings.map( (booking)=>{
    
 return(<><BookingCard key={booking.id} cardId={booking.id} image={booking.imageUrl }product={booking.title} date={booking.date} time={booking.time} price={booking.cost} changeState={(cardDelete)=>{}} />

</>
   ); 
})
}

      </div>    
      
    )

}



export default MyBooking