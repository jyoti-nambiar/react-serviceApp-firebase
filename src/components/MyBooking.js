import React, { useState, useEffect} from 'react'
import BookingCard from './BookingCard';
import {firestore} from '../firebase/config';
import {useSession} from '../firebase/UserProvider';

function MyBooking() {

const [bookings, setBookings] = useState([]);
const[bookingUpdate, setbookingUpdate]= useState(true);
const[userId, setUserId]= useState(null);

const {user}= useSession();


//fetch data from firebase
  useEffect(()=>{

if(bookingUpdate){

if(user){

setUserId(user.uid);

}
 const serviceRef= firestore.collection("userBookings").where("uid", "==", `${userId}` );
   const unsubscribe=serviceRef.onSnapshot((querySnapshot) => {
        const service=querySnapshot.docs.map((doc) => 
         doc.data() )
console.log(service)
setBookings(service);

      })
      
return unsubscribe;
 setbookingUpdate(false);

   }} , [user, userId, bookingUpdate]);



    return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 content-evenly m-2.5 px-2 py-2 ">
       
{bookings.map( (booking)=>{
    
 return(<><BookingCard key={booking.id} cardId={booking.id} image={booking.imageUrl }product={booking.title}  date={booking.date} time={booking.time} price={booking.cost} setbookingUpdate={setbookingUpdate} />

</>
   ); 
})
}

      </div>    
      
    )

}



export default MyBooking