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

  cancelForm = () => {
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: "",
      gender: "male",
      birth: "",
      email: "",
      mobile: "",
      customId: "",
      membership: "classic"
    });
  };

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
    const { name, email } = this.state;
    const user = { name: name, email: email };
    return user;
  };
  onSubmit = e => {
    e.preventDefault();
    let u = this.state.users;
    u.push(this.newUser());
    this.setState({
      users: u
    });
    //guardando el usuario en el localStorage
    localStorage.setItem(
      "array-of-users-logged",
      JSON.stringify(this.state.users)
    );
  };
  paging = () => {
    this.setState({
      userPreview: false
    });
  };
  render() {
    return (
      <div className="App">
        <FormApp
          avatar={this.setNewAvatar()}
          name={this.state.name}
          email={this.state.email}
          userPreview={this.state.userPreview}
          users={this.state.users}
          onClickPaging={this.paging}
          onChange={this.actualizar}
          onGenderChange={this.onGenderChange}
          onMembershipChange={this.onMembershipChange}
          onCancel={this.cancelForm}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
