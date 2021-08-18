import {createContext, useState, useEffect} from 'react';
import {useSession} from '../firebase/UserProvider';
import {firestore} from '../firebase/config';
export const BookingContext = createContext();

export const BookingProvider = (props) => {

    const [bookingCount,
        setBookingsCount] = useState(0);
    const [userId,
        setUserId] = useState(null);
    
    const {user} = useSession();

    useEffect(() => {
        const fetchData = async() => {
            const tempDoc = [];
            if (user) {
                setUserId(user.uid);
            }

            firestore
                .collection("userBookings")
                .where("uid", "==", `${userId}`)
                .get()
                .then( (querySnapshot) => {
                    
                    querySnapshot.forEach((doc) => {
                        tempDoc.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    
                    setBookingsCount(tempDoc.length);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

        }

        fetchData();
    }, [user,userId, bookingCount]);

console.log(bookingCount);


    return (

        <BookingContext.Provider value={bookingCount}>

          
            {props.children}
        </BookingContext.Provider>

    )

}

export const Consumer = BookingContext.Consumer;
