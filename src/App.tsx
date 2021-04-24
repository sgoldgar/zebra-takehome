import { hot } from 'react-hot-loader';
import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import ZebraIcon from './components/asset-components/ZebraIcon';

import './styles.less';
import CompareQuotesPage from './components/CompareQuotesPage';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ZebraIcon />
        <Router>
          <CompareQuotesPage path="/" />
        </Router>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
