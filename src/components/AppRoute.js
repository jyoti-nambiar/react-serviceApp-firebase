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
import { Route, Switch } from "react-router-dom"
import Profile from './Profile'
import ProfileRedirect from '../router/ProfileRedirect'
function AppRoute() {


    return (



        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/services" component={CardList}  />
            <Route exact path="/about" component={About} />
            <Route exact path="/myBooking" component={MyBooking} />
            <Route exact path="/addNewService" component= {AddNewService} />
            <ProfileRedirect exact path="/register" component={Register} />
            <ProfileRedirect exact path="/login" component={Login}  />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/uploadFile" component={UploadFile} />
            <Route exact path="/profile/:id" component={Profile}/>
        </Switch>


    )

}

export default AppRoute;
