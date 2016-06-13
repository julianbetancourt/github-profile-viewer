import React from 'react';

class Nav extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if (!username) {
      alert('Enter a user name');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }
  render() {
    return(
      <nav>
        <div className="container">
          <div className="brand">
            <h1><i className="ion-social-github"></i> GitHub Profile Viewer</h1>
          </div>
          <div className="search">
              <form className="search-box" onSubmit={this.handleSubmit.bind(this)}>
                <input ref="username" type="text" /><i className="ion-ios-search"></i>
              </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav
