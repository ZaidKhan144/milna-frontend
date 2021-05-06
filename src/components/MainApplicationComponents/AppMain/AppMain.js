import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'
import { NavBar, Header } from './AppMainStyles'
import GroupMain from '../GroupMain/GroupMain'
import EventMain from '../EventMain/EventMain'

const AppMain = () => {
    return (
        <div>
            <NavBar>
                <h1><Link to="/">Milna</Link></h1>
                <Link to="/">Start a new group</Link>
            </NavBar>
            <BrowserRouter>
                <Header>
                    <div>
                        <NavLink to="/groupMain" activeClassName='active'>Groups</NavLink>
                        <NavLink to="/eventMain">Events</NavLink>
                    </div>
                </Header>
                <Switch>
                    <Route path="/groupMain" exact> <GroupMain /> </Route>
                    <Route path="/eventMain" exact> <EventMain /> </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppMain