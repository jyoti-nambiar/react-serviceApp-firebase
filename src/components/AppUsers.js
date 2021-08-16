import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {firestore} from '../firebase/config'
export default function AppUsers() {
    //state declaration
    const [users,
        setUsers] = useState([])

    //function call in useEffect to display app authenticated users
    useEffect(() => {
        const userRef = firestore.collection('users');
        const unsubscribe = userRef.onSnapshot((querySnapshot) => {
            const user = querySnapshot
                .docs
                .map((doc) => doc.data());

            setUsers(user);
        })

        return unsubscribe;

    }, [])

    return (
        <div className="md:px-32 py-8 w-full">
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">

                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {users.map((user) => {
                            return (
                                <tr key={user.uid}>
                                    <td className="w-1/3 text-left py-3 px-4">
                                        <Link to={`/profile/${user.uid}`}>{user.firstName}</Link>
                                    </td>
                                    <td className="w-1/3 text-left py-3 px-4">{user.lastName}</td>
                                    <td className="text-left py-3 px-4">
                                        <a className="hover:text-blue-500" href="tel:622322662">{user.phone}</a>
                                    </td>
                                    <td className="text-left py-3 px-4">
                                        <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">{user.email}</a>
                                    </td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
