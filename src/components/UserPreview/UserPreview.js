import React, { Component } from "react";
import "./user-preview.css";

const UserPreviewContent = ({avatar,name, membership,email}) => {
  const userEmailClassname = (membership) => {
    switch (membership) {
      case 'gold':
        return 'user-email-gold';
      case 'silver':
        return 'user-email-silver';
      default:  /*  classic */
        return 'user-email-classic';
    }
  }
  return (
    <div>
      <div>
        <img className="img-preview" src={`${avatar}`} alt="" />
      </div>
      <div className="user-name">{name}</div>
      <div className={`user-email ${userEmailClassname(membership)}`}>{email}</div>
    </div>
  );
};

const UserListPreview = ({ users }) => {
  return (
    <div className="img-list">
        {users.map((user) => {
          return (
            <div key={Date.now()} className="row-img-list">
            <div>
                <img src={`/avatar/${user.gender}.jpg`} alt="" className="img-list-preview">
                </img>
            </div>
               <div>
               <p className="name-list-preview">{user.name}</p>
               <p className="email-list-preview">{user.email}</p>
               <hr/>
               </div>
            </div>
          )
        })}
    </div>
  )
}

export default class UserPreview extends Component {
 chooseBackgroundColorByMembership(){
   switch (this.props.membership) {
     case 'silver':
       return 'rgb(192, 192, 192)'
    case 'gold':
      return 'rgb(254, 214, 1)'
    default:
       return 'rgb(128, 128, 192)' /*classic*/
   }
 }
  backgroundUserPreview(){
    return {
        background: this.props.userPreview ? this.chooseBackgroundColorByMembership() /* cambia en condicion del miembro */ : 'rgb(97, 232, 197)', /* verde el user-list-preview*/
    }
}
  render() {
    return (
      <div style={this.backgroundUserPreview()} className="user-preview">
        { this.props.userPreview ?
        <UserPreviewContent {...this.props} />
         :
        <UserListPreview {...this.props}/>}
       { /* solo se mostrara si hay usuarios guardados en el local storage... */ }
          {this.props.users.length !== 0 && (
        <div className="paging" onClick={this.props.onClickPaging}>
          <p> {this.props.userPreview ? '>' : '<'} </p>
        </div>
      )}
      </div>
    )
  }
}
