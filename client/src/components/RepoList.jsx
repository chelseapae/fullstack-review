import React from 'react';

const RepoList = (props) => (
  <div>

    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    <ul>
      {props.repos.map((repo) =>
      <li key={repo.id}>
      <b>Repo Name:</b> &nbsp;
        <a href={repo.html_url} target="_blank">
           {repo.name} <br/>
        </a>
          <b>Watchers:</b> &nbsp;
          {repo.watchers}
      </li>)}
    </ul>
    </div>
  </div>
)

export default RepoList;
