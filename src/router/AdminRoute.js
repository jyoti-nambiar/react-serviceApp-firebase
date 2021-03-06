import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSession} from '../firebase/UserProvider'

export default function AdminRoute({component:Component, ...rest}) {

const {user, isAdmin}= useSession();

    return (
        <Route
        {...rest} render={(props)=>
            {if(!!user && isAdmin){
                return <Component {...props} />
                        }else{
                return <Redirect to="./login" />
                            }
            }
        }
        />

    )
}
