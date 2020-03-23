import React, { Component } from "react";
import "./user-preview.css";
export default class UserPreview extends Component {
  render() {
    return (
      <div className="user-preview">
        <div>
          <img className="img-preview" src={`${this.props.avatar}`} alt="" />
        </div>
        <div className="user-name">{this.props.name}</div>
        <div className="user-email">{this.props.email}</div>
        <div className="paging">
          <p> > </p>
        </div>
      </div>
    );
  }
}
