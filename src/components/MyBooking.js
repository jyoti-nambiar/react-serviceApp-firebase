import React, {useState, useEffect} from 'react'
import BookingCard from './BookingCard';
import {firestore} from '../firebase/config';
import {useSession} from '../firebase/UserProvider';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
function MyBooking() {

    const [bookings,
        setBookings] = useState([]);
    const [bookingUpdate,
        setbookingUpdate] = useState(true);
    const [userId,
        setUserId] = useState(null);
    const [totalCost,
        setTotalCost] = useState([]);
    const [bookingCount,
        setbookingCount] = useState(0);
    const {user} = useSession();
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe('pk_test_51Ix6U6CxfG0XwLzbuosrl518XDhmHQtZq2M6mq0ng4tR2SJDtPxQ0bHDMrNIDYA18RoQBfG' +
            '7pfRV8fOcx06PQPfB00AZ7w0YgS');

    //fetch data from firebase
    useEffect(() => {

        if (bookingUpdate) {

            if (user) {

                setUserId(user.uid);

            }
            const serviceRef = firestore
                .collection("userBookings")
                .where("uid", "==", `${userId}`);
            const unsubscribe = serviceRef.onSnapshot((querySnapshot) => {
                const service = querySnapshot
                    .docs
                    .map((doc) => doc.data())
                console.log(service)
                setBookings(service);
                setbookingCount(service.length);

                let sumTotal = 0;
                service.forEach(data => sumTotal += Number(data.cost));

                setTotalCost(sumTotal);
                console.log("This is the total", sumTotal);
            })

            return unsubscribe;

        }
        setbookingUpdate(false);
    }, [user, userId, bookingUpdate]);

    //passing data to stripe server
    const handleClick = async(event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await axios.post('https://firebase-stripe-payment.herokuapp.com/create-checkout-session', {
            product: "bookingItems",
            price: totalCost,
            quantity: bookingCount
        });
        //console.log(response.data);
        const sessionId = response.data.id;

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({sessionId: sessionId});
        console.log(result);
        if (result.error) {
            result.error.message = "Transaction failure";
            // If `redirectToCheckout` fails due to a browser or network error, display the
            // localized error message to your customer using `result.error.message`.
        }

    };

    return ( <> <div
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 content-evenly m-10 min-h-screen ">

            {bookings.map((booking) => {

                return (<BookingCard
                    key={booking.id}
                    cardId={booking.id}
                    image={booking.imageUrl}
                    date={booking.date}
                    time={booking.time}
                    price={booking.cost}
                    setbookingUpdate={setbookingUpdate}product={booking.title}/>);
            })
}

        </div>
        {
        (bookings.length !== 0) && (
            <div className="float-right mr-24 sm:content-center">
                <p className="font-bold justify-self-end">Total Cost: {totalCost}</p>
                <button
                    className="p-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1 justify-self-end"
                    role="link"
                    onClick={handleClick}>
                    Checkout
                </button>
            </div>
        )
    } </>
    )

}



export default MyBooking