import React from 'react'
import { MainForm } from './CreateGroupStyles'

const CreateGroup = () => {
    return (
        <div>
            <MainForm>
                <form autoComplete="off" action="">
                    <label htmlFor="Group Name">Your Group Name: </label>
                    <input type="text" />
                    <label htmlFor="Location">Location: (City, State)</label>
                    <input type="text" />
                    <label htmlFor="Description">Description: </label>
                    <input type="text" />
                    <label htmlFor="Upload Picture">Upload Picture: </label>
                    <textarea name="Upload Picture" id="" cols="30" rows="3"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </MainForm>
        </div>
    )
}

export default CreateGroup