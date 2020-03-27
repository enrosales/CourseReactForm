import React, { Component } from "react";
import FormApp from "./components";

export const myFirstContext = React.createContext();

export default class App extends Component {
  state = {
    name: "",
    gender: "male",
    birth: "",
    email: "",
    mobile: "",
    customId: "",
    membership: "classic",
    userPreview: true,
    users: []
  };
resetForm = () => {
  this.setState({
    name: "",
    gender: "male",
    birth: "",
    email: "",
    mobile: "",
    customId: "",
    membership: "classic",
    userPreview: true
  })
}
  actualizar = (name, text) => {
    this.setState({
      [name]: text
    });
  };

  onGenderChange = e => {
    this.setState({
      gender: e.target.value
    });
  };

  onMembershipChange = e => {
    this.setState({
      membership: e.target.value
    });
  };

  setNewAvatar = () => {
    return `/avatar/${this.state.gender}.jpg`;
  };
  newUser = () => {
    const { name, email, gender } = this.state;
    const user = { name: name, email: email, gender: gender };
    return user;
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      users: [...this.state.users, this.newUser()]
    });
    //guardando el usuario en el localStorage
    localStorage.setItem(
      "array-of-users-logged",
      JSON.stringify(this.state.users)
    );
  };
  paging = () => {
    this.setState({
      userPreview: !this.state.userPreview
    })
  };

  render() {
    return (
      <div className="App">
        <FormApp
          avatar={this.setNewAvatar()}
          name={this.state.name}
          email={this.state.email}
          membership={this.state.membership}
          userPreview={this.state.userPreview}
          users={this.state.users}
          onClickPaging={this.paging}
          onChange={this.actualizar}
          onResetForm={this.resetForm}
          onGenderChange={this.onGenderChange}
          onMembershipChange={this.onMembershipChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
