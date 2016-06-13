import React from 'react';
import Repo from './Repo.jsx';

class RepoList extends React.Component {
  render() {
    return (
      <div className="repositories">
        {this.props.userRepos.map(repo => {
          return <Repo repo={repo} key={repo.id} {...this.props} />
        })}
      </div>
    );
  }
}


export default RepoList;
