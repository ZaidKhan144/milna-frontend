import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../AppMain/AppMainStyles'

const SplitHeader = () => {
    return (
        <div>
            <Header>
                    <div>
                        <NavLink to="/groupMain" activeClassName='active' exact={true}>Groups</NavLink>
                        <NavLink to="/eventMain">Events</NavLink>
                    </div>
            </Header>
        </div>
    )
}

export default SplitHeader