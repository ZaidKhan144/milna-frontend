import React from 'react'
import GroupData from '../GroupMain/GroupData'
import { Container, Top, Bottom } from './GroupPageStyles'

const GroupPage = ({groupPageId}) => {

    // ID is in string so here we are converting it in Integer
    let IntId = parseInt(groupPageId, 10)
    let groupPageData

    for(let i = 0; i< GroupData.length; i++){
        // Checking if both the ID's match 
        if(GroupData[i].id === IntId){
            // if it does then put your data in groupPageData
            groupPageData = GroupData[i]
        }
    }

    return (
        <div>
           <Container>
                <Top>
                    <div>
                        <h1>{groupPageData.groupName}</h1>
                        <p>{groupPageData.location}</p>
                        <p>{groupPageData.members}</p>
                        <p>Organized by {groupPageData.organizer}</p>
                        <button>Join this Group</button>
                    </div>
                    <div>
                        <img src={groupPageData.image} alt={groupPageData.groupName} />
                    </div>
                </Top>
                <Bottom>
                    <h1>What we're about</h1>
                    <p>{groupPageData.description}</p>
                </Bottom>
            </Container>
        </div>
    )
}

export default GroupPage