import React from 'react'
import HowItWorksIllOne from '../../illustrations/status-update.svg' 
import CurlOne from '../../illustrations/curly-thing-1.svg'
import HowItWorksIllTwo from '../../illustrations/find-event.svg'
import CurlTwo from '../../illustrations/curly-thing-2.svg'
import HowItWorksIllThree from '../../illustrations/calendar.svg'
import './styles.css'

const HowItWorks = () => {
    return (
        <div className="py-40 mx-60 howitworks">
            
                <h1 className="py-20 hiwTitle">join a group</h1>
            
            <div className="flex join"> 
                <div className="join-image">
                    <img className="w-4/5" src={HowItWorksIllOne} alt="Group Status"/>        
                </div>
                <div>
                    <div className="border-l-8 divider">
                    <p className="hiw-Para pl-10 my-10 py-2 d">Do what you love, meet others who love it, 
                        find your community and the rest is history!</p></div>
                </div>
            </div>
            <div className="mt-40 flex justify-between">
                <img className="curl" src={CurlOne} alt="Curl"/>
                <h1 className="self-end hiwTitle">find an event</h1>
            </div>
            <div className="hiw-tablet">
                <div className="flex justify-end mt-20 event-image">
                    <img className="w-2/6" src={HowItWorksIllTwo} alt="Find Event"/>
                </div>
                <div className="my-20 w-3/5 flexing float-right event-desc">
                    <div className="border-r-8 w-20 divider event-divider"> </div>
                        <p className="hiw-Para text-right">Events are happening on just about any topic you can think of, 
                            from online gaming and photography to yoga and hiking.</p>
                </div>
            </div>
            
            <div className="mt-80 flexing justify-between group">
                <img className="float-right curl" src={CurlTwo} alt="Curl" />
                <h1 className="self-end hiwTitle">start a group</h1>
            </div>
            <div className="hiw-tablet">
                <div className="group-image">
                    <img className="w-2/5 my-20" src={HowItWorksIllThree} alt="Calendar"/>
                </div>
                <div className="flex group-desc">
                    <div className="border-l-8 divider w-10 h-15 "></div>
                    <p className="hiw-Para w-2/4">Create groups and events to gather people together and explore shared interests.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks