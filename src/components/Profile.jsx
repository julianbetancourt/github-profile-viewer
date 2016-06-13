import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-header">
        <div className="container">
          <div className="photo">
            <img src={this.props.userData.avatar_url} alt="" />
          </div>
          <div className="name">
            <h2>{this.props.userData.name}</h2>
            <h3>@ {this.props.userData.login}</h3>
          </div>
          <div className="buttons">
            <div className="btn-group">
              <a href="#0" className="btn">{this.props.userData.followers} Followers</a>
              <a href="#0" className="btn">{this.props.userData.following} Following</a>
            </div>
            <a href={this.props.userData.html_url} target="_blank" className="btn">See profile</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Profile;
