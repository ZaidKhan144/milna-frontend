import React, { useState, useEffect } from 'react'
import { MainForm } from './CreateGroupFormStyles'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createGroup, updateGroup } from '../../../actions/groups'
import { useHistory } from 'react-router-dom'


const CreateGroupForm = ({currentId, setCurrentId}) => {

    const [groupData, setGroupData] = useState({
        groupName: '', location: '', description: '', selectedFile: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()
    const { group } = useSelector((state) => currentId ? state.groups.find((grp) => grp._id === currentId) : state.groups)

    // const { group } = useSelector((state) => state.groups)

    useEffect(() => {
        if(group) setGroupData(group)
    }, [group])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updateGroup(currentId, groupData))
        } else {
            // dispatching createGroup on handleSubmit
            dispatch(createGroup(groupData))
        }

        history.push(`/groupMain/${group._id}`)
    }


    return (
        <div>
            <MainForm>
                <form autoComplete="off" onSubmit={handleSubmit}>
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

export default CreateGroupForm