import React from 'react'
import homeIll from '../../illustrations/hangout.svg'

const Home = () => {
    return (
        <div className="flex mx-40">
            <div>
                <h1 className="text-6xl pt-80 font-bold">Create community & make friends</h1> 
                <p className="mt-6 text-2xl">Join or create group with people who share same interest.</p>
            </div>
            <div>
                <img className="py-40" src={homeIll} alt="Hangout"/>
            </div>
        </div>
    )
}

export default Home