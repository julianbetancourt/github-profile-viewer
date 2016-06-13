import React from 'react';

class Repo extends React.Component {


  render() {
    const {repo} = this.props;
    return (
      <div className="repository">
        <div className="repo-header">
          <div className="title">
            <h2><a target="_blank" href={repo.html_url}>{repo.name}</a></h2>
          </div>
          <div className="language-stars">
            <span className="language">{repo.language}</span>
            <span className="stars"><i className="ion-ios-star"></i>{repo.stargazers_count}</span>
          </div>
        </div>
        <div className="repo-description">
          <span>{repo.description}</span>
        </div>
      </div>
    );
  }


}

export default Repo;
