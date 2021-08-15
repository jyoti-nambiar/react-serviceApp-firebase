import React, { useState, useEffect } from 'react'
import CustomerCard from './CustomerCard'
import {firestore} from '../firebase/config';


function CustomerCardList() {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
  const customerRef = firestore.collection('customerComments');
  const unsubscribe= customerRef.onSnapshot((querySnapshot) => {
     
    const customer= querySnapshot.docs.map((doc) => 
         doc.data() )
console.log(customer);
setCustomer(customer);

      })
      
return unsubscribe;
       

    }, []);


    return (

        <div className="flex flex-row p-20 justify-center align-center ">
            {customer.map((customer) => {
                //console.log(customer.image.formats.thumbnail.url)
                return (<CustomerCard key={customer.id} image={customer.imageUrl} customerName={customer.name} content={customer.comment} />)


            })
            }
        </div>
    )
}

export default CustomerCardList
