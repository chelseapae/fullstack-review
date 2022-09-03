import React from 'react';

const RepoList = (props) => (
  <div>

    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    <ul>
      {props.repos.map((repo) =>
      <li key={repo.id}>
          {repo.watchers}<br/>
          {repo.name}
      </li>)}
    </ul>
    </div>
  </div>
)

export default RepoList;
