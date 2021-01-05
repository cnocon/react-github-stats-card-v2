import React, { useEffect, useState } from 'react';
import { pluralizer, sum } from './CardUtils';
import './card.scss';

function Card({...props}) {
  const {username, accessToken, theme} = props;
  const [user, setUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [userLanguages, setUserLanguages] = useState({});

  const getUserReposData = (username, accessToken = '') => {
    let options;

    if (accessToken.length > 0) {
      options = {
        'method': 'GET',
        'headers': {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': `react-github-stats-card-v2`,
          'Authorization': `token ${accessToken}`
        }
      }
     } else {
       options = {
        'method': 'GET',
        'headers': {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': `react-github-stats-card-v2`
        }
      }
    };
  
    fetch(`https://api.github.com/users/${username}/repos`, options).then(response => {
        return response.json();
      }).then(data => {
        const languagesObj = {};
        try {
          data.forEach(repository => {
            if (repository.language && repository.language !== null) {
              if (languagesObj[repository.language]) {
                languagesObj[repository.language] += 1;
              } else {
                languagesObj[repository.language] = 1;
              }
            }
          });
          return [data, languagesObj];
        } catch(err) {
          const error = new Error(err);
          console.error(error);
        }
      }).then(payload => {
        try {
          setUserRepos(payload[0]);
          setUserLanguages(payload[1]);
        } catch(err) {
          const error = new Error(err);
          console.error(error);
        }
      }).catch(err => {
        console.error(err);
        return err;
      });
  }

  const getUserData = (username, accessToken = '') => {
    let options;

    if (accessToken.length > 0) {
      options = {
        'method': 'GET',
        'headers': {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': `react-github-stats-card-v2`,
          'Authorization': `token ${accessToken}`
        }
      };
    } else {
      options = {
        'method': 'GET',
        'headers': {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': `react-github-stats-card-v2`
        }
      };
    }
  
    fetch(`https://api.github.com/users/${username}`, options)
      .then(response => {
        return response.json();
      }).then(data => {
        setUser(data);
      }).catch(err => {
        console.error(err);
        return err;
      });
  }

  const sortedLanguages = Object.entries(userLanguages).sort((a, b) => (a[1][1] - b[1][1]));
  const topLanguages = sortedLanguages.length >= 3 ? sortedLanguages.slice(0,3) : sortedLanguages;
  const languagesMarkup = topLanguages.map(language => (
    <li key={`${language[0]}`}><b>{language[0]}</b><small>{language[1]} {pluralizer(parseInt(language[1]), 'repo')}</small></li>
  ));
  const watchersCount = sum(userRepos, 'watchers_count');
  const stargazersCount = sum(userRepos, 'stargazers_count');
  const openIssuesCount = sum(userRepos, 'open_issues_count');
  const company = !user.company ? `` : <p>Currently at {user.company}</p>;
  const totalYears = Math.round((Date.now() - new Date(user.created_at)) / 1000 / 60 / 60 / 24 / 365);
  const rule = languagesMarkup.length ? <div className='rule'></div> : ``;

  useEffect(() => {
    if (Object.keys(user).length === 0) getUserData(username, accessToken);

    if (userRepos.length === 0 || Object.keys(userLanguages.length === 0)) {
      getUserReposData(username, accessToken);
    }
  }, []);

  return (
    <div className={theme ? 'github-stats-card' : ''}>
      <header>
        <h3><a href={user.html_url} target="_blank" rel="noopener nofollow">@{username}</a>&nbsp;on GitHub</h3>
        {user && user.bio ? <h4>{user.bio}</h4> : ``}
        <h5>
          <span><b>{user.public_repos}</b>Public Repos</span>
          <span>|</span>
          <span><b>{user.public_gists}</b>Public Gists</span>
        </h5>
      </header>
      <div>
        {languagesMarkup.length ? <p><b>Top Languages</b></p> : ``}
        <ol>{languagesMarkup}</ol>
        {rule}
        <ul>
          <li><b>{openIssuesCount}</b>&nbsp;{pluralizer(parseInt(openIssuesCount), `open issue`)}</li>
          <li><b>{watchersCount}</b> {pluralizer(parseInt(watchersCount), `watcher`)}</li>
          <li>Starred <b>{stargazersCount}</b> {pluralizer(parseInt(stargazersCount), `time`)}</li>
          <li>Followed by <b>{user.followers}</b> {pluralizer(parseInt(user.followers), `member`)}</li>
          <li>Following <b>{user.following}</b> {pluralizer(parseInt(user.following), `member`)}</li>
        </ul>
      </div>
      <footer>
        <section>
          <p>
            <a href={user.html_url} target='_blank' rel='noreferrer nofollow'>@{user.login} on GitHub</a>
          </p>
          <p>{totalYears} {pluralizer(totalYears, 'Year')} of Membership</p>
          {company}
        </section>
        <img src="https://github.githubassets.com/images/icons/emoji/octocat.png?v8" alt="Octocat"/>
      </footer>
    </div>
  )
};

export default Card;