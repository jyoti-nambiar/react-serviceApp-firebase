import React, {useContext,useState} from 'react'
import {BookingContext} from '../components/BookingContext';
import {Link, useHistory} from 'react-router-dom'
import {logout} from '../firebase/auth'
import {useSession} from '../firebase/UserProvider';
import { Transition } from "@headlessui/react";
function Navbar() {

    const context = useContext(BookingContext);
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const {user, isAdmin} = useSession();
    const logoutFunc = async() => {

        await logout();
        history.push('/login');
    };

    return (

        <nav className="flex justify-between items-center bg-white text-black relative shadow-lg h-20 font-serif">

            {/*Website Logo */}
            <Link className="pl-8 text-3xl font-bold text-black-500" to="/">Spik&Span
                <i className="fas fa-spray-can"></i>
            </Link>
            < div className="pr-8">
                {(user && isAdmin !== true)
                    ? (
                        <p className="float-right">
                            {`Welcome ${user.displayName}`}</p>
                    )
                    : (user && isAdmin)
                        ? (
                            <p className="float-right">{`Welcome admin`}</p>
                        )
                        : ( <></>)}
            </div>

            < div className="pr-8 hidden md:block">

                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/services">Our Services</Link>
                <Link className="p-4" to="/about">About Us</Link>
                {(!!user) && <><Link className="p-4" to="/myBooking">My Booking
                    <span className="p-1">({context})</span>

                </Link>
                <Link className="p-4" to={`/profile/${user.uid}`}>
                            Profile</Link>
                </>
                }

                {/*Person with role admin can see Add new service */}
                {(!!user && isAdmin)
                    ? (<>< Link className = "p-4" to = "/addNewService" > Add New Service </Link>
         <Link className="p-4" to="/appUser ">Customer Profile</Link></>
)
                    : <></>}


                {!user
                    ? ( <>< Link className = "p-4" to = "/Register" > Register </Link>
                        <Link className="p-4" to="/login">Login</Link></>):((<button  onClick={logoutFunc}>Logout</button>))}

            </div>
 <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-white">
                <Link className="p-4" to="/services">Our Services</Link>
                {(!!user) && <><Link className="p-4" to="/myBooking">My Booking
                    <span className="p-1">({context})</span>

                </Link>
                <Link className="p-4" to={`/profile/${user.uid}`}>
                            Profile</Link>
                </>
                }

                {/*Person with role admin can see Add new service */}
                {(!!user && isAdmin)
                    && (<>< Link className = "p-4" to = "/addNewService" > Add New Service </Link>
         <Link className="p-4" to="/appUser ">Customer Profile</Link></>
)
                }


                {!user
                    ? ( <>< Link className = "p-4" to = "/Register" > Register </Link>
                        <Link className="p-4" to="/login">Login</Link></>):((<button className=" bg - blue - 500 hover : bg - blue - 700 text - white font - bold py - 2 px - 4 rounded " onClick={logoutFunc}>Logout</button>))}
              </div>
            </div>
          )}
        </Transition>

        </nav>

    )
}

export default Navbar