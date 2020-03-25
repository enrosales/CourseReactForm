import React, { Component } from "react";
import "./user-preview.css";

const UserPreviewContent = props => {
  return (
    <div>
      <div>
        <img className="img-preview" src={`${props.avatar}`} alt="" />
      </div>
      <div className="user-name">{props.name}</div>
      <div className="user-email">{props.email}</div>
    </div>
  );
};

const UserListPreview = props => {
  const { users } = props;
  console.log('users from the state: ' + users)
  return (
    <div>
        <ul>
        {users.map((user) => {
          return (
            <div>
              <li> <img src={`${props.avatar}`} alt=""></img> <p>{user.name}</p><span>{user.email}</span></li>
            </div>
          )
        })}
        </ul>
    </div>
  )
}
export default class UserPreview extends Component {
  render() {
    return (
      <div className="user-preview">
        { this.props.userPreview ?
        <UserPreviewContent {...this.props} />
         :
        <UserListPreview {...this.props}/>}
       { /* solo se mostrara si hay usuarios guardados en el local storage... */ }
          {this.props.users.length !== 0 && (
        <div className="paging" onClick={this.props.onClickPaging}>
          <p> > </p>
        </div>
      )}
      </div>
    )
  }
}
