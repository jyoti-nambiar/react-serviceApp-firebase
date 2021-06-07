import axios from 'axios';
import React, { useState} from 'react'
import Modal from 'react-modal';
function Card({ serviceId, image, name, price, btnName, description }) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };


    const initialValues = {

        serviceName: "",
        date: "",
        time: "",
        mobileNum: 0


    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues);
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
   const url=image;
const username=localStorage.getItem("username");
const token=localStorage.getItem("jwt");



    function openModal() {
       setIsOpen(true)
       
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleOnChange(e) {

        setFormValues({ ...formValues, [e.target.name]: e.target.value });

    }

    function handleOnSubmit(e) {
        e.preventDefault();
        closeModal();
        const userinfo = localStorage.getItem("userId");
        //console.log(userinfo);
        setUserId(userinfo);
        //load data in user-bookings in strapi
        axios.post("http://localhost:1337/user-bookings", {
            name: username,
            date: formValues.date,
            time: formValues.time,
            price:price,
            mobileNum: formValues.mobileNum,
            img:url,
            product: serviceId,
            users_permissions_user: userId
        }
        ).then((res) => {
            console.log("this is the reponse after upload",res);

        }).catch((err) => {

            console.log(err)
        });



    }


    return (
        <>
            <div className="max-w-sm rounded overflow-hidden transition duration-500 ease-in-out bg-white-600 hover:bg-white-600 transform hover:-translate-y-1 hover:scale-110  ">
                <div>

                    <img src={image}  alt="" className="object-fill  w-full h-48" />

                    <div className="relative px-4 -mt-5  ">
                        <div className="bg-white p-6 rounded-lg shadow-lg">


                            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>

                            <div className="mt-1">
                                {price}
                                <span className="text-gray-600 text-sm">   kr</span>
                            </div>
                            <div className="mt-4">
                                {description}
                            </div>
                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                            </div>
                            <div className="mt-4">
                                {/*If logged in show modal or redirect to login */}
                                <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={token?(openModal):(()=>  window.location.href='/login')}>{btnName}</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                    ariaHideApp={false}
                                >
                                    <button onClick={closeModal}><i className="far fa-times-circle text-right"></i></button>
                                    <div>Booking Information</div>
                                    <form onSubmit={handleOnSubmit}>
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2" type="text" name="serviceName" value={username} onChange={handleOnChange} />
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2" type="date" name="date" value={formValues.date} onChange={handleOnChange} />
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Preferred Time</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2" type="time" name="time"  min="09:00" max="18:00" required value={formValues.time} onChange={handleOnChange} />
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telenumber">Telephone Number</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2" type="number" name="mobileNum" value={formValues.mobileNum} onChange={handleOnChange} />
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button>

                                    </form>
                                </Modal>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>








    )
}

export default Card;
