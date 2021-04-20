import React from 'react'
import aboutIll from '../../illustrations/having-fun.svg'

const About = () => {
    return (
        <div className="flex mx-40">
            <div className="py-20">
                <img src={aboutIll} alt="Having Fun"/>
            </div>
            <div className="py-40 px-10">
                <h1 className="text-4xl font-bold py-10">About Us</h1>
                <p className="text-2xl pr-40">Milna is an application for arranging online groups 
                    that host in-person or virtual events for people with similar interests.</p>
            </div>
           
        </div>
    )
}

export default About