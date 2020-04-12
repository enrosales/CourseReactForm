import React from 'react'
import UserForm from './UserForm/UserForm'
import UserPreview from './UserPreview/UserPreview'

const FormApp = ({avatar, name, email, membership, userPreview, users, onClickPaging,onChange, onSubmit, onResetForm, onMembershipChange, onGenderChange}) => (
    <div className="container">
        <UserPreview
            avatar = {avatar}
            name = {name}
            email = {email}
            membership = {membership}
            userPreview = {userPreview}
            users = {users}
            onClickPaging={onClickPaging}
        />
        <UserForm
        onChange = {onChange}
        onGenderChange = {onGenderChange}
        onMembershipChange = {onMembershipChange}
        onSubmit={onSubmit}
        onResetForm={onResetForm}
        />
    </div>
)

export default FormApp