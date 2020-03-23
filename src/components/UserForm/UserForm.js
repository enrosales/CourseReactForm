import React from "react";
import "./user-form.css";

const UserForm = (props) => (
  <div className="container-form">
    <form className="user-form">
      <div className="row">
        <div className="label">
          <label className="label-form"> Name </label>
        </div>
        <div className="input">
          <input type="text" className="textbox" name="name" placeholder="Name" required  onChange={props.onNameChange} />
        </div>
      </div>
      <div className="row" onChange={props.onGenderChange}>
        <div className="label">
          <label className="label-form"> Gender </label>
        </div>
        <div className="radio">
          <div className="radio-male">
            <input type="radio" defaultChecked name="gender" value="male" />{" "}
            Male
          </div>
          <div className="radio-female">
            <input type="radio" name="gender" value="female" /> Female
          </div>
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Date of Birth </label>
        </div>
        <div className="input">
          <input
            type="date"
            className="textbox"
            name="date-of-birth"
            placeholder="Date of Birth"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Email </label>
        </div>
        <div className="input">
          <input type="email" className="textbox" name="email" placeholder="Email" required />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Mobile </label>
        </div>
        <div className="input">
          <input
            type="tel"
            className="textbox"
            name="mobile"
            placeholder="Mobile"
            minLength="8"
          />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Customer ID </label>
        </div>
        <div className="input">
          <input
            type="text"
            className="textbox"
            name="customer-id"
            placeholder="Customer ID"
            required
          />
        </div>
      </div>
      <div className="row" onChange={props.onMembershipChange}>
        <div className="label">
          <label className="label-form"> Membership </label>
        </div>
        <div className="radio">
          <div className="radio-member">
            <input
              type="radio"
              defaultChecked
              name="membership"
              value="classic"
            /> Classic
          </div>
          <div className="radio-member">
            <input type="radio" name="membership" value="silver" /> Silver
          </div>
          <div className="radio-member">
            <input type="radio" name="membership" value="gold" /> Gold
          </div>
        </div>
      </div>
      <div className="row row-buttons">
        <div className="label"></div>
        <div className="input">
          <button type="reset" className="btn btn-cancel">
            CANCEL
          </button>
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
        </div>
      </div>
    </form>
  </div>
)

export default UserForm