import React, {useContext} from 'react'
import {BookingContext} from '../components/BookingContext';
import { Link , useHistory} from 'react-router-dom'
import {logout} from '../firebase/auth'
import {useSession} from '../firebase/UserProvider';
function Navbar() {

const context= useContext(BookingContext);
console.log("this is context", context);
const history= useHistory();
const {user, isAdmin}= useSession();


 const logoutFunc=async ()=>{

await logout();
history.push('/login');
};





    return (
 
        <nav className="flex justify-between items-center bg-white text-black relative shadow-sm h-20 font-serif">
            


            <Link className="pl-8 text-3xl font-bold text-black-500" to="/">Spik&Span <i className="fas fa-spray-can"></i></Link>
        < div className="pr-8">
          {(user && isAdmin!==true) ? (<p className="float-right"> {`Welcome ${user.displayName}`}</p>):(user && isAdmin)?(<p className="float-right">{`Welcome admin`}</p>):(<></>)}
            </div>

            < div className="pr-8">
                
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/services">Our Services</Link>
                <Link className="p-4" to="/about">About Us</Link>
                <Link className="p-4" to="/myBooking">My Booking
              {console.log(context)}
                <span className="p-1">({context})</span>
              
                </Link>
                
                {/*Person with role admin can see Add new service */}
         {(!!user&& isAdmin)? (<><Link className="p-4" to="/addNewService">Add New Service</Link>
         <Link className="p-4" to="/appUser">Customer Profile</Link></>
         ):<></> }      

            {user? <Link className="p-4" to={`/profile/${user.uid}`}> Profile</Link>:<></> }




               {!user? (<><Link className="p-4" to="/Register">Register</Link>
                        <Link className="p-4" to="/login">Login</Link></>):((<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logoutFunc}>Logout</button>))}
                
                
            </div>
        </nav >
  
    )
}

export default Navbar