import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSession} from '../firebase/UserProvider'


function ProfileRedirect({component:Component, ...rest}) {
     const {user}=useSession();
    return (
        <div>
           
            <Route {...rest}  render={(props)=> !user ? (<Component {...props}   />):(<Redirect to={{pathname:`/profile/${user.uid}`, state:{from:props.location} }}/> ) } />
            
        </div>
    )
}

export default ProfileRedirect
