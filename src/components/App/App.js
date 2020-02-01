import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { history } from '../../helpers';
import RedirectToMain from '../RedirectToMain';
import MainPage from '../MainPage';
import PhotoUploadPage from '../PhotoUploadPage';
import SearchTypePage from '../SearchTypePage';
import ResultPage from '../ResultPage';
import {
  AppStateContext,
  AppStateReducer,
  initialAppState
} from '../../appState';

function App() {
  const [appState, dispatch] = useReducer(AppStateReducer, initialAppState);

  return (
    <AppStateContext.Provider value={[appState, dispatch]}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/photo/upload" exact component={PhotoUploadPage} />
          <Route path="/search/type" exact component={SearchTypePage} />
          <Route path="/result" exact component={ResultPage} />
          <Route component={RedirectToMain} />
        </Switch>
      </Router>
    </AppStateContext.Provider>
  );
}

export default App;
