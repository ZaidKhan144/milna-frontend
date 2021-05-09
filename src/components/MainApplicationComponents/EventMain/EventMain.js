import React from 'react'
import EventData from './EventData'
import { Link } from 'react-router-dom'
import { Container } from '../GroupMain/GroupMainStyles'

const EventMain = () => {
    return (
        <div>
            <Container>
                {
                    EventData.map((eData) => {
                        return (
                            <Link key={eData.id} to={`eventMain/${eData.id}`} >
                            <div>
                                <img src={eData.image} alt={eData.eventName} />
                            </div>
                            <div>
                                <p>{eData.dateAndTime}</p>
                                <h1>{eData.eventName}</h1>
                                <p>{eData.groupName}</p>
                                <p>{eData.attendees}</p>
                            </div>
                        </Link>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default EventMain