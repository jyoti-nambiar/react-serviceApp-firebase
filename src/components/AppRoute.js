import React from 'react'
import CardList from './CardList'
import MyBooking from './MyBooking'
import HomePage from './HomePage'
import About from './About'
import Register from './Register'
import Login from './Login'
import ResetPassword from './ResetPassword'
import ForgotPassword from './ForgotPassword'
import UploadFile from './UploadFile'
import AddNewService from './AddNewService'
import { Route, Switch } from "react-router-dom"

function AppRoute() {


    return (



        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/services"><CardList /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/myBooking"><MyBooking /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/forgot-password"><ForgotPassword /></Route>
            <Route exact path="/reset-password"><ResetPassword /></Route>
            <Route exact path="/uploadFile"><UploadFile /></Route>
            <Route exact path="/addService"><AddNewService /></Route>
        </Switch>


    )

}

export default AppRoute;
