import React from 'react';

class About extends React.Component {
  render() {
    return (
      <aside className="left">
        <div className="about">
          <div className="item main">
            <h2>About</h2>
          </div>
          <div className="item">
            <span><i className="ion-ios-location"></i>Lives in {this.props.userData.location}</span>
          </div>
          <div className="item">
            <span><i className="ion-ios-email"></i><a href={"mailto:" + this.props.userData.email}>{this.props.userData.email}</a></span>
          </div>
          <div className="item">
            <span><i className="ion-folder"></i>{this.props.userData.public_repos} Public repos</span>
          </div>
        </div>
      </aside>
    );
  }
}

export default About;
