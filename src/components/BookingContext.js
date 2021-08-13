import {createContext, useState, useEffect} from 'react';
import {useSession} from '../firebase/UserProvider';
import {firestore} from '../firebase/config';
export const BookingContext = createContext();

export const BookingProvider = (props) => {

    const [bookingCount,
        setBookingsCount] = useState(0);
    const [userId,
        setUserId] = useState(null);
    const [bookingUpdate,
        setBookingUpdate] = useState(false);
    const {user} = useSession();

    useEffect(() => {
        const fetchData = async() => {
            if (user) {
                setUserId(user.uid);
            }

            firestore
                .collection("userBookings")
                .where("uid", "==", `${userId}`)
                .get()
                .then((querySnapshot) => {
                    const tempDoc = []

                    querySnapshot.forEach((doc) => {
                        tempDoc.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    console.log("length", tempDoc.length);
                    setBookingsCount(tempDoc.length);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

        }

        fetchData();
    }, [userId, bookingCount]);

    return (

        <BookingContext.Provider value={bookingCount}>
            {props.children}
        </BookingContext.Provider>

    )

}

export const Consumer = BookingContext.Consumer;
