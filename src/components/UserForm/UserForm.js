import React, {Component} from "react";
import "./user-form.css";
import InputControlado from './InputControlado'

export default class UserForm extends Component {
handleReset = (e) => {
  e.target.reset()
}
  render() {
    return (
      <div className="container-form">
    <form className="user-form" onSubmit={this.props.onSubmit} onReset={this.props.onResetForm}>
      <div className="row">
        <div className="label">
          <label className="label-form"> Name </label>
        </div>
        <InputControlado
            onChange={this.props.onChange}
            placeholder='Name'
            name='name'
            divClassName='input'
            className='textbox'
            type="text"
            required
          />
      </div>
      <div className="row" onChange={this.props.onGenderChange}>
        <div className="label">
          <label className="label-form"> Gender </label>
        </div>
        <div className="radio">
        <div className="radio-male">
            <input type="radio" name="gender" value="male" defaultChecked /> Male
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
        <InputControlado 
          onChange={this.props.onChange}
          placeholder="Date of Birth"
          name="birth"
          divClassName="input"
          className="textbox"
          type="date"
          required
        />
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Email </label>
        </div>
        <InputControlado 
          onChange={this.props.onChange}
          placeholder="Email"
          name="email"
          divClassName="input"
          className="textbox"
          type="email"
          required
        />
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Mobile </label>
        </div>
        <InputControlado
          onChange={this.props.onChange}
          placeholder="Mobile"
          name="mobile"
          divClassName="input"
          className="textbox"
          type="tel"
          required
        />
      </div>
      <div className="row">
        <div className="label">
          <label className="label-form"> Customer ID </label>
        </div>
        <InputControlado
          onChange={this.props.onChange}
          placeholder="Customer ID"
          name="customId"
          divClassName="input"
          className="textbox"
          type="text"
          required
        />
      </div>
      <div className="row" onChange={this.props.onMembershipChange}>
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
          <input type="reset" className="btn btn-cancel" value="Cancel"/>
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
        </div>
      </div>
    </form>
  </div>
    )
  }
}
