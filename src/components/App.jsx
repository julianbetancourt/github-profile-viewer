import React from 'react';
import Nav from './Nav.jsx';
import Profile from './Profile.jsx';
import About from './About.jsx';
import Repo from './Repo.jsx'
import RepoList from './RepoList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'julianbetancourt',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({userData: data});
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null})
      }.bind(this)
    });
  }
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page=' + this.state.perPage + '&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({userRepos: data});
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null})
      }.bind(this)
    });
  }

  handleFormSubmit(username) {
    this.setState({username: username}, function () {
      this.getUserData();
      this.getUserRepos();
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Nav onFormSubmit={this.handleFormSubmit.bind(this)}/>
        <main>
          <Profile {...this.state}/>
          <section id="columns">
            <div className="container">
              <About {...this.state}/>
              <RepoList {...this.state} />
            </div>
          </section>
        </main>
      </div>

    );

  }
}

App.defaultProps = {
  clientId: 'f1cfd9e86d95cb859a8a',
  clientSecret: 'cc60dbd4edf3d16bfa4f5d976f0aa393d7c89ef2'
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

export default App;
