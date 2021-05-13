import React from 'react'
import { HashRouter, Switch, Route, BrowserRouter, useLocation, useRouteMatch } from 'react-router-dom'
import GroupMain from '../GroupMain/GroupMain'
import EventMain from '../EventMain/EventMain'
import GroupPage from '../GroupPage/GroupPage'
import SplitHeader from '../SplitHeader/SplitHeader'
import EventPage from '../EventPage/EventPage'
import CreateGroup from '../CreateGroup/CreateGroup'
import AppMainNav from '../AppMainNav/AppMainNav'

const AppMain = () => {
    // const location = useLocation()
    // let match = useRouteMatch()

    return (
        <div>
            {/* <h1>{location.pathname}</h1> */}
            
                <AppMainNav />
                {/* {location.pathname === '/createGroup' ? <AppMainNav /> : null} */}
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
                    <Route path="/createGroup" exact> <CreateGroup /> </Route>
                </Switch>
        </div>
    )
}

export default AppMain