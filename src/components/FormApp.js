import React from 'react'
import UserForm from './UserForm/UserForm'
import UserPreview from './UserPreview/UserPreview'

const FormApp = (props) => (
    <div className="container">
        <UserPreview
            avatar = {props.avatar}
            name = {props.name}
            email = {props.email}
            userPreview = {props.userPreview}
            users = {props.users}
            onClickPaging={props.onClickPaging}
        />
        <UserForm
        onChange = {props.onChange}
        onGenderChange = {props.onGenderChange}
        onMembershipChange = {props.onMembershipChange}
        onCancel={props.onCancel}
        onSubmit={props.onSubmit}
        />
    </div>
)

export default FormApp