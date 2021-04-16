import React from 'react'
import HowItWorksIllOne from '../../illustrations/status-update.svg' 

const HowItWorks = () => {
    return (
        <div className="py-40 mx-60">
            
                <h1 className="text-6xl font-bold py-20">join a group</h1>
            
            <div className="flex"> 
                <div className="">
                    <img className="w-4/5" src={HowItWorksIllOne} alt="Group Status"/>        
                </div>
                <div>
                    <div className="border-l-4 border-white">
                    <p className="text-2xl pl-10 my-10 py-2">Do what you love, meet others who love it, 
                        find your community and the rest is history!</p></div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks