import firebase from 'firebase'
import React, { useState, useEffect } from 'react'
import Card from './Card'

function CardList() {
     
    const [products, setProducts] = useState([]);

    

    useEffect(() => {

async function fetchData() {
  const services = await firebase.firestore().collection('services')
  services.get().then((querySnapshot) => {
      const tempDoc = []
      querySnapshot.forEach((doc) => {
         tempDoc.push({ id: doc.id, ...doc.data() })
      })
      console.log(tempDoc)
setProducts(tempDoc);
   })
 }
        fetchData();
        

    }, []);

    


function deleteItem(id) {
//console.log("This is serviceId",id);

 

     };
    
    

    return (

        <div className="grid grid-cols-3 gap-10 content-evenly m-10   ">
            
           {products.map((service) => {
               console.log(service.description)
                return <Card key={service.id} serviceId={service.id} image={service.imageurl} description={service.description} name={service.title} price={service.cost} btnName="Book" onDelete={deleteItem}  />
            })
            
 }

        </div>

    )
}

export default CardList
