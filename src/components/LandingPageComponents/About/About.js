import React from 'react'
import aboutIll from '../../../illustrations/having-fun.svg'
import './styles.css'

const About = () => {
    return (
        <div className="flex mx-20 about">
            <div className="py-20 about-image">
                <img src={aboutIll} alt="Having Fun"/>
            </div>
            <div className="py-40 px-10 about-text">
                <h1 className="text-4xl font-bold py-10">About Us</h1>
                <p className="text-2xl pr-40">Milna is an application for arranging online groups 
                    that host in-person or virtual events for people with similar interests.</p>
            </div>
           
        </div>
    )
}

export default About