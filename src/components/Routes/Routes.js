import React from 'react'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import About from '../About/About'
import HowItWorks from '../HowItWorks/HowItWorks'
import GroupCarousel from '../Groups/Groups'
import EventCarousel from '../Events/Events'
import Footer from '../Footer/Footer'

const Routes = () => {
    return (
        <div>
            <Nav />
            <Home />
            <About />
            <HowItWorks />
            <GroupCarousel />
            {/* <EventCarousel />
            <Footer /> */}
        </div>
    )
}

export default Routes