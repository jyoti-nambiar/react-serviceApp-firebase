import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className="flex justify-between items-center bg-white text-black relative shadow-sm h-16 font-serif">
            <Link className="pl-8 text-3xl font-bold text-black-500" to="/">Spik&Span <i class="fas fa-spray-can"></i></Link>


            < div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/services">Our Services</Link>
                <Link className="p-4" to="/about">About Us</Link>
                <Link className="p-4" to="/My Booking">My Booking</Link>
                <Link className="p-4" to="/login">Login/Logout</Link>



            </div>
        </nav >

    )
}

export default Navbar