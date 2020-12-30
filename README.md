# GitHub Stats Card for React

Pass a [GitHub username](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email) and a boolean for whether or not you want the theme to be used, and get this:

![Widget Screenshot](stat-card-preview.png)

## Installation

```bash
npm install @cnocon/react-github-stats-card
```

## Example:

The Card function returns a functional React Component. Imports will be updated in the future to get rid of using `dist`.

```js
import Card from '@cnocon/react-github-stats-card/dist/Card';

function myComponent() {
  return <Card username='cnocon' theme={true} />
}
```

## Note: If you run into rate limiting errors from GitHub, you can pass your personal access token, demonstrated below, to increase that limit. Be sure to keep any hardcoded access token values out of your code!

```js
import Card from '@cnocon/react-github-stats-card/dist/Card';

function myComponent() {
  return <Card username='cnocon' theme={true} accessToken=MY_ACCESS_TOKEN/>
}
```
