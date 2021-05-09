import React from 'react'
import { Link } from 'react-router-dom'
import EventData from '../EventMain/EventData'
import { EventBody, Container, Top, Bottom } from './EventPageStyles'

const EventPage = ({eventPageId}) => {

    // ID is in string so here we are converting it in Integer
    let IntId = parseInt(eventPageId, 10)
    let EventPageData

    for(let i = 0; i< EventData.length; i++){
        // Checking if both the ID's match 
        if(EventData[i].id === IntId){
            // if it does then put your data in groupPageData
            EventPageData = EventData[i]
        }
    }

    return (
        
        <EventBody>
            <Link to="/eventMain">Back</Link>
            <h1>{EventPageData.eventName}</h1>
            <p>Hosted by {EventPageData.host}</p>
                <Container>
                    <Top>
                        <div>
                            <img src={EventPageData.image} alt={EventPageData.eventName} />
                        </div>
                        <div>
                            <div>
                                <img src={EventPageData.groupImg} alt={EventPageData.groupName} />
                                <p>{EventPageData.groupName}</p>
                            </div>
                            <p>{EventPageData.dateAndTime}</p>
                            <p>{EventPageData.location}</p>
                            <button>Attend</button>
                        </div>
                    </Top>
                    <Bottom>
                        <h1>Details</h1>
                        <p>{EventPageData.description}</p>
                    </Bottom>
                </Container>
        </EventBody>
    )
}

export default EventPage