import React from 'react'
import UserForm from './UserForm/UserForm'
import UserPreview from './UserPreview/UserPreview'

const FormApp = (props) => (
    <div className="container">
        <UserPreview />
        <UserForm 
        onGenderChange = {props.onGenderChange} 
        onMembershipChange = {props.onMembershipChange}
        />
    </div>
)

export default FormApp