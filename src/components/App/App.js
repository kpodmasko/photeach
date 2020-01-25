import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { history } from '../../helpers';
import RedirectToMain from '../RedirectToMain';
import MainPage from '../MainPage';
import PhotoPage from '../PhotoPage';
import SearchPage from '../SearchPage';
import SearchTypePage from '../SearchTypePage';
import SearchMicroPage from '../SearchMicroPage';
import ResultPage from '../ResultPage';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/photo" exact component={PhotoPage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/search/type" exact component={SearchTypePage} />
        <Route path="/search/micro" exact component={SearchMicroPage} />
        <Route path="/result" exact component={ResultPage} />
        <Route component={RedirectToMain} />
      </Switch>
    </Router>
  );
}

export default App;
