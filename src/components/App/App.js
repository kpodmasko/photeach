import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { history } from '../../helpers';
import RedirectToMain from '../RedirectToMain';
import MainPage from '../MainPage';
import PhotoPage from '../PhotoPage';
import PhotoCameraPage from '../PhotoCameraPage';
import PhotoUploadPage from '../PhotoUploadPage';
import SearchPage from '../SearchPage';
import SearchTypePage from '../SearchTypePage';
import SearchMicroPage from '../SearchMicroPage';
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
          <Route path="/photo" exact component={PhotoPage} />
          <Route path="/photo/camera" exact component={PhotoCameraPage} />
          <Route path="/photo/upload" exact component={PhotoUploadPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/search/type" exact component={SearchTypePage} />
          <Route path="/search/micro" exact component={SearchMicroPage} />
          <Route path="/result" exact component={ResultPage} />
          <Route component={RedirectToMain} />
        </Switch>
      </Router>
    </AppStateContext.Provider>
  );
}

export default App;
