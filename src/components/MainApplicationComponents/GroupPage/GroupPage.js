import React, { useEffect } from 'react'
import GroupData from '../GroupMain/GroupData'
import { Container, Top, Bottom, EditButton } from './GroupPageStyles'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getGroup, deleteGroup } from '../../../actions/groups'
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar'


const GroupPage = ({setCurrentId}) => {

    const { group, groups, isLoading } = useSelector((state) => state.groups)

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

    //const handleClick = () => {
        // on clicking we are sending current group data to the form or we are setting current group id in the edit button
        // so that we can do something with it. 
        //setCurrentId(group._id)
        //history.push('/createGroup')
    //}

    // the reason for this condition is to prevent rendering something before data is actually fetched
     if(!group) return null

    return (
        isLoading ? <div style={{width: 50, height: 50 }}>
        <CircularProgressbar value={66} text={66} />
        </div> : (
            <div>
            <Container>
                    <Top>
                        <div>
                            <h1>{group.groupName}</h1>
                            <p>{group.location}</p>
                            <p>{group.members}</p>
                            <p>Organized by {group.organizer}</p>
                            <button>Join this Group</button>
                            {/* <EditButton onClick={handleClick} /> */}
                            <Link to={`/updateGroup/${group._id}`}>
                                Edit Group
                            </Link>
                        </div>
                        <div>
                            <img src={group.selectedFile} alt={group.groupName} />
                        </div>
                    </Top>
                    <Bottom>
                        <h1>What we're about</h1>
                        <p>{group.description}</p>
                        <button onClick={()=> {
                            dispatch(deleteGroup(group._id)) 
                            history.push('/groupMain')
                        }}>Delete</button>
                    </Bottom>
                </Container>
            </div>
        )
    )
}

export default GroupPage