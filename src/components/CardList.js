import React, {useState, useEffect} from 'react'
import Card from './Card'
import {firestore} from '../firebase/config';
function CardList() {

    const [products,
        setProducts] = useState([]);

    useEffect(() => {
        const serviceRef = firestore.collection('services');
        const unsubscribe = serviceRef.onSnapshot((querySnapshot) => {

            const service = querySnapshot
                .docs
                .map((doc) => doc.data())
            setProducts(service);

        })

        return unsubscribe;

    }, []);

    return (

        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 content-evenly m-2.5 px-2 py-2">

            {products.map((service) => {
                return <Card
                    key={service.id}
                    serviceId={service.id}
                    image={service.imageurl}
                    description={service.description}
                    name={service.title}
                    price={service.cost}
                    btnName="Book"/>
            })
}

        </div>

    )
}

export default CardList
