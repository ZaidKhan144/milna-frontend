import React from 'react'
import { Container } from './GroupMainStyles'
import GroupData from './GroupData'
import { Link } from 'react-router-dom'

const GroupMain = () => {

    return (
        <div>
            <Container>
                {
                    GroupData.map((gData) => {
                        return(
                            <Link key={gData.id} to={`groupMain/${gData.id}`} >
                                <div>
                                    <img src={gData.image} alt={gData.groupName} />
                                </div>
                                <div>
                                    <h1>{gData.groupName}</h1>
                                    <p>{gData.location}</p>
                                    <p>{gData.description}</p>
                                    <p>{gData.members}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container> 
        </div>
    )
}

export default GroupMain