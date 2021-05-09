import React from 'react'
import { Link } from 'react-router-dom'
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'
import { NavBar } from './AppMainStyles'
import GroupMain from '../GroupMain/GroupMain'
import EventMain from '../EventMain/EventMain'
import GroupPage from '../GroupPage/GroupPage'
import SplitHeader from '../SplitHeader/SplitHeader'
import EventPage from '../EventPage/EventPage'

const AppMain = () => {
    return (
        <div>
            <NavBar>
                <h1><Link to="/">Milna</Link></h1>
                <Link to="/">Start a new group</Link>
            </NavBar>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/groupMain/:id"></Route>
                    <Route exact path="/eventMain/:id"></Route>
                    <Route path="/"> <SplitHeader /> </Route>
                </Switch>
                <Switch>
                    <Route path="/" exact> <SplitHeader /> </Route>
                    <Route path="/groupMain" exact> <GroupMain /> </Route>
                    <Route path="/eventMain" exact> <EventMain /> </Route>
                    <Route path="/groupMain/:id" exact render={(groupPageProp) => <GroupPage groupPageId={groupPageProp.match.params.id} /> } />
                    <Route path="/eventMain/:id" exact render={(eventPageProp) => <EventPage eventPageId={eventPageProp.match.params.id} /> } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppMain