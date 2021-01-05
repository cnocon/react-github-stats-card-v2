## React GitHub Stats Card (v2 is for react 17+ and react-dom 17+)

<img alt="Screenshot of component" src="https://raw.githubusercontent.com/cnocon/react-github-stats-card-v2/master/component-screenshot.png" width="320"/>

[Demo Site here](https://react-github-stats-card-v2-demo.netlify.app/)

### Installation

1. Install the package via npm.
```bash
npm install react-github-stats-card-v2
```

2. Import the component to file you want to use it in.
```js
import { Card } from 'react-github-stats-card-v2';
```

3. Place the component on the page.

* `username` is a required prop. Example: `username="cnocon"`
* `theme` is an optional prop that defaults to false if not explicitly passed. Example `theme={true}`
* `accessToken` is an optional prop that will raise your rate limit if you start encountering rate limiting errors in your application. Example `accessToken="abcdefghijklmnopqrstuv12345678910"`

```js 
<Card 
  username=A-GITHUB-USERNAME 
  theme={true} 
  accessToken=MY-GITHUB-PERSONAL-ACCESS-TOKEN 
/>
```

### Using Storybook

1. Clone this repository and cd into the root directory:
```bash
git clone git@github.com:cnocon/react-github-stats-card-v2.git
cd react-github-stats-card-v2
```

2. Run `npm install` from the project root.
```bash
npm install
```

3. Run `npm start`
```bash
npm start
```
