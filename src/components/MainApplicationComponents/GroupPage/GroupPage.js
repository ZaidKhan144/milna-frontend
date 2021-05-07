import React from 'react'
import GroupData from '../GroupMain/GroupData'

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
           <h1>{groupPageData.groupName}</h1>
        </div>
    )
}

export default GroupPage