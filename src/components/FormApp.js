import React from 'react'
import UserForm from './UserForm/UserForm'
import UserPreview from './UserPreview/UserPreview'

const FormApp = (props) => (
    <div className="container">
        <UserPreview 
            avatar = {props.avatar}
            name = {props.name}
            email = {props.email}
        />
        <UserForm
        onNameChange = {props.onNameChange}
        onEmailChange = {props.onEmailChange}
        onGenderChange = {props.onGenderChange}
        onMembershipChange = {props.onMembershipChange}
        />
    </div>
)

export default FormApp