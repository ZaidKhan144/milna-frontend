import React from 'react'
import { Container } from './GroupMainStyles'
import GroupData from './GroupData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const GroupMain = () => {

        // useSelector allows you to extract data from redux store
        // we are acessing the whole groups reducer
        const { groups, isLoading } = useSelector((state) => state.groups)

        console.log(groups)

        // if no groups and not loading then nothing exists
        if(!groups.length && !isLoading) return 'No groups'

    return (
        !groups?.length ? <div style={{width: 50, height: 50 }}>
            <CircularProgressbar value={66} text={66} />
        </div> : (
        <div>
            <Container>
                { 
                    groups.map((gData) => {
                        return(
                            <Link key={gData._id} to={`groupMain/${gData._id}`}>
                                <div>
                                    <img src={gData.selectedFile} alt={gData.groupName} />
                                </div>
                                <div>
                                    <h1>{gData.groupName}</h1>
                                    <p>{gData.location}</p>
                                    <p>{gData.description}</p>
                                    <p>Members: {gData.members}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container> 
        </div>
        
        )
    )
}

export default GroupMain