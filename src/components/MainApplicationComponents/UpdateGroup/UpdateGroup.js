import React, { useState, useEffect } from 'react'
import { MainForm } from '../CreateGroupForm/CreateGroupFormStyles'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { updateGroup } from '../../../actions/groups'

const UpdateGroup = ({currentId, setCurrentId}) => {

    const [groupData, setGroupData] = useState({
        groupName: '', location: '', description: '', selectedFile: ''
    })

    const { id } = useParams()

    const group = useSelector((state) => id ? state.groups.groups.find((grp) => grp._id === id) : null)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(group) setGroupData(group)
    }, [group])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(id){
            // If currentId is not null then dispatch updateGroup
            dispatch(updateGroup(id, groupData))
            history.push('/groupMain')
        }
    }

    return (
        <div>
            <MainForm>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h1>Editing a Group:</h1>
                    <label htmlFor="Group Name">Your Group Name: </label>
                    <input type="text" value={groupData.groupName} onChange={(e) => setGroupData({ ...groupData, groupName: e.target.value })} />
                    <label htmlFor="Location">Location: (City, State)</label>
                    <input type="text" value={groupData.location} onChange={(e) => setGroupData({ ...groupData, location: e.target.value })} />
                    <label htmlFor="Description">Description: </label>
                    <input type="text" value={groupData.description} onChange={(e) => setGroupData({ ...groupData, description: e.target.value })} />
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setGroupData({ ...groupData, selectedFile: base64 })}
                    />
                    <button type="submit">Submit</button>
                </form>
            </MainForm>
        </div>
    )
}

export default UpdateGroup