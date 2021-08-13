import firebase from 'firebase'
import React, { useState, useEffect } from 'react'
import Card from './Card'
import {firestore} from '../firebase/config';
function CardList() {
     
    const [products, setProducts] = useState([]);

    

    useEffect(() => {
  const serviceRef = firestore.collection('services');
  const unsubscribe= serviceRef.onSnapshot((querySnapshot) => {
     
    const service= querySnapshot.docs.map((doc) => 
         doc.data() )
console.log(service);
setProducts(service);

      })
      
return unsubscribe;
       

    }, []);

    


function deleteItem(id) {
//console.log("This is serviceId",id);

 

     };
    
    

    return (

        <div className="grid grid-cols-3 gap-10 content-evenly m-10   ">
            
           {products.map((service) => {
                return <Card key={service.id} serviceId={service.id} image={service.imageurl} description={service.description} name={service.title} price={service.cost} btnName="Book" onDelete={deleteItem}  />
            })
            
 }

        </div>

    )
}

export default CardList
