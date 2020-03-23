import React, { Component } from "react";
import "./user-preview.css";
export default class UserPreview extends Component {
  render() {
    return (
      <div className="user-preview">
        <div>
          <img className="img-preview" src="/logo192.png" alt="" />
        </div>
        <div className="user-name">Kendall Jenner</div>
        <div className="user-email">kendallJ@gmail.com</div>
        <div className="paging">
          <p> > </p>
        </div>
      </div>
    );
  }
}
