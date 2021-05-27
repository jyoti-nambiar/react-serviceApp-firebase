import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BookingCard from './BookingCard';
function MyBooking() {

const [bookings, setBookings] = useState([]);
const[deleteCard, setDeleteCard]=useState(false);
const userId=localStorage.getItem("userId");
const token=localStorage.getItem("jwt");

//fetch data from strapi
  useEffect(()=>{
const fetchData= async ()=>{

const response=await axios.get(`http://localhost:1337/user-bookings?users_permissions_user.id=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }});

//console.log("data it is",response.data);
let count= (response.data).length;
localStorage.setItem("numberOfBooking", count);
setBookings(response.data);

}

fetchData();

    }, [deleteCard]);



    return (

    <div className="grid grid-cols-3 gap-10 content-evenly m-10   ">
       
{bookings.map( (booking)=>{
    
 return(<BookingCard key={booking.id} cardId={booking.id} image={booking.img }product={booking.product.name} date={booking.date} time={booking.time} changeState={(cardDelete)=>{setDeleteCard(cardDelete);console.log("deletecard value", cardDelete)}} />
   ); 
})
}
      </div>     
    )

}



export default MyBooking