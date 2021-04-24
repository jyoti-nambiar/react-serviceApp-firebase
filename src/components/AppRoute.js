import React from 'react'
import CardList from './CardList'
import Form from './Form'
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
            <Route exact path="/My Booking"><Form /></Route>
            <Route exact path="/login"><Login /></Route>
        </Switch>


    )
}

export default AppRoute;
