import React, { useState, useEffect } from 'react'
import { MainForm } from './CreateGroupFormStyles'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../../actions/groups'

const CreateGroupForm = () => {

    const [groupData, setGroupData] = useState({
        groupName: '', location: '', description: '', selectedFile: ''
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createGroup(groupData))
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