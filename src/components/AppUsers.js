import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {firestore} from '../firebase/config'
export default function AppUsers() {

    const [users,
        setUsers] = useState([])
    useEffect(() => {
        const userRef = firestore.collection('users');
        const unsubscribe = userRef.onSnapshot((querySnapshot) => {
            const user = querySnapshot
                .docs
                .map((doc) => doc.data());
            console.log(user);
            setUsers(user);
        })

        return unsubscribe;

    }, [])

    return (
        <div class="md:px-32 py-8 w-full">
            <div class="shadow overflow-hidden rounded border-b border-gray-200">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-800 text-white">

                        <tr>
                            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">
                        {users.map((user) => {
                            return (
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">
                                        <Link to={`/profile/${user.uid}`}>{user.firstName}</Link>
                                    </td>
                                    <td class="w-1/3 text-left py-3 px-4">{user.lastName}</td>
                                    <td class="text-left py-3 px-4">
                                        <a class="hover:text-blue-500" href="tel:622322662">{user.phone}</a>
                                    </td>
                                    <td class="text-left py-3 px-4">
                                        <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">{user.email}</a>
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
