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
  console.log(e.target.value)
}

onMembershipChange = (e) => {
  console.log(e.target.value)
}
  render() {
    
    return (
      <div className="App">
           <FormApp 
           onGenderChange={this.onGenderChange}
           onMembershipChange = {this.onMembershipChange}             
           />
      </div>
    )
  }
}

