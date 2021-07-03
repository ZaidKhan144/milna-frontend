import React from 'react'
import { useDispatch } from 'react-redux'
import { getGroups } from '../../../actions/groups'
import { useState, useEffect } from 'react'
import { HashRouter, Switch, Route, BrowserRouter, useLocation, useRouteMatch } from 'react-router-dom'
import GroupMain from '../GroupMain/GroupMain'
import EventMain from '../EventMain/EventMain'
import GroupPage from '../GroupPage/GroupPage'
import SplitHeader from '../SplitHeader/SplitHeader'
import EventPage from '../EventPage/EventPage'
import CreateGroupForm from '../CreateGroupForm/CreateGroupForm'
import AppMainNav from '../AppMainNav/AppMainNav'

const AppMain = () => {
    // const location = useLocation()
    // let match = useRouteMatch()

    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()

    // dispatching groups when AppMain components render 
    useEffect(() => {
        dispatch(getGroups())
    }, [dispatch])

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
                    <Route path="/groupMain/:id" exact> <GroupPage setCurrentId={setCurrentId} /> </Route>
                    <Route path="/eventMain/:id" exact> <EventPage /> </Route>
                    <Route path="/createGroup" exact> <CreateGroupForm currentId={currentId} setCurrentId={setCurrentId} /> </Route>
                </Switch>
        </div>
    )
}

export default AppMain