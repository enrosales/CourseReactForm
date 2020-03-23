import React, { Component } from 'react'
import FormApp from './components'

export const myFirstContext = React.createContext()

export default class App extends Component {
  state = {
    name: '',
    gender: "male",
    birth: '',
    email: '',
    mobile: '',
    customId: '',
    membership: "classic",
  }

onGenderChange = (e) => {
  this.setState({
    gender: e.target.value
  })
}

onMembershipChange = (e) => {
  this.setState({
    membership: e.target.value
  })
}

onNameChange = (e) => {
  this.setState({
    name: e.target.value
  })
}

onEmailChange = (e) => {
  this.setState({
    email: e.target.value
  })
}

setNewAvatar = () => {
  return `/avatar/${this.state.gender}.jpg`;
}
  render() {
    return (
      <div className="App">
           <FormApp
           avatar = { this.setNewAvatar() }
           name = {this.state.name}
           email = {this.state.email}
           onNameChange = {this.onNameChange}
           onEmailChange = {this.onEmailChange}
           onGenderChange = {this.onGenderChange}
           onMembershipChange = {this.onMembershipChange}
           />
      </div>
    )
  }
}

