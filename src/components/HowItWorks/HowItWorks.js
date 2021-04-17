import React from 'react'
import HowItWorksIllOne from '../../illustrations/status-update.svg' 
import CurlOne from '../../illustrations/curly-thing-1.svg'
import HowItWorksIllTwo from '../../illustrations/find-event.svg'
import CurlTwo from '../../illustrations/curly-thing-2.svg'

const HowItWorks = () => {
    return (
        <div className="py-40 mx-60">
            
                <h1 className="text-6xl font-bold py-20">join a group</h1>
            
            <div className="flex"> 
                <div className="">
                    <img className="w-4/5" src={HowItWorksIllOne} alt="Group Status"/>        
                </div>
                <div>
                    <div className="border-l-4 border-white rounded-lg">
                    <p className="text-2xl pl-10 my-10 py-2">Do what you love, meet others who love it, 
                        find your community and the rest is history!</p></div>
                </div>
            </div>
            <div className="mt-40 flex justify-between">
                <img src={CurlOne} alt="Curl"/>
                <h1 className="self-end text-8xl font-bold">find an event</h1>
            </div>
            <div className="flex justify-end mt-20">
                <img className="w-2/6" src={HowItWorksIllTwo} alt="Find Event"/>
            </div>
            <div className="my-20 w-3/5 flex flex-row-reverse float-right mb-40">
                <div className="border-r-4 border-white w-20 rounded-lg"> </div>
                    <p className="text-right text-2xl "> Events are happening on just about any topic you can think of, 
                        from online gaming and photography to yoga and hiking.</p>
            </div>
            <div>
                <img className="float-right" src={CurlTwo} alt="Curl" />
            </div>
        </div>
    )
}

export default HowItWorks