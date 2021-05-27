import React, { useEffect } from 'react'
import GroupData from '../GroupMain/GroupData'
import { Container, Top, Bottom } from './GroupPageStyles'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getGroup } from '../../../actions/groups'

const GroupPage = ({groupPageId}) => {

    const { group, groups } = useSelector((state) => state.groups)

    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getGroup(id))
    }, [id])
    
    /* // ID is in string so here we are converting it in Integer
    let IntId = parseInt(groupPageId, 10)
    let groupPageData

    for(let i = 0; i< groups.length; i++){
        // Checking if both the ID's match 
        if(groups[i].id === IntId){
            // if it does then put your data in groupPageData
            groupPageData = groups[i]
        }
    }
    */
   console.log(group)
    return (
        <div>
           <Container>
                <Top>
                    <div>
                        <h1>{group.groupName}</h1>
                        <p>{group.location}</p>
                        <p>{group.members}</p>
                        <p>Organized by {group.organizer}</p>
                        <button>Join this Group</button>
                    </div>
                    <div>
                        <img src={group.selectedFile} alt={group.groupName} />
                    </div>
                </Top>
                <Bottom>
                    <h1>What we're about</h1>
                    <p>{group.description}</p>
                </Bottom>
            </Container>
        </div>
    )
}

export default GroupPage