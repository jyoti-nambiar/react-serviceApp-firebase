import React from 'react'
import CardList from './CardList'
import MyBookingForm from './MyBookingForm'
import HomePage from './HomePage'
import About from './About'
import Login from './Login'
import { Route, Switch } from "react-router-dom"

function AppRoute() {
    return (



        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/services"><CardList /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/My Booking"><MyBookingForm /></Route>
            <Route exact path="/login"><Login /></Route>
        </Switch>


    )
}

export default AppRoute;
