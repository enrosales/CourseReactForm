import React, { Component } from 'react'
import UserForm from './UserForm/UserForm'
import UserPreview from './UserPreview/UserPreview'

export default class FormApp extends Component {
    render() {
        return (
            <div className="container">
                <UserPreview />
                <UserForm />
            </div>
        )
    }
}
