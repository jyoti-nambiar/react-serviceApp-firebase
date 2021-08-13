import React from 'react'
import CardList from './CardList'
import MyBooking from './MyBooking'
import HomePage from './HomePage'
import About from './About'
import Register from './Register'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import UploadFile from './UploadFile'
import AddNewService from './AddNewService'
import {Route, Switch} from "react-router-dom"
import Profile from './Profile'
import ProfileRedirect from '../router/ProfileRedirect'
import AdminRoute from '../router/AdminRoute'
import AppUsers from './AppUsers';
function AppRoute() {

    return (

        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/services" component={CardList}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/myBooking" component={MyBooking}/>
            <AdminRoute exact path="/addNewService" component={AddNewService}/>
            <ProfileRedirect exact path="/register" component={Register}/>
            <ProfileRedirect exact path="/login" component={Login}/>
            <AdminRoute exact path="/appUser" component={AppUsers}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route exact path="/uploadFile" component={UploadFile}/>
            <Route exact path="/profile/:id" component={Profile}/>
        </Switch>

    )

}

export default AppRoute;
