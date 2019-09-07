import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import state from './state';
import { ROOT_ROUTE, LOGIN_ROUTE } from './utils/route/routesDefinition';
import Navigation from './view/Navigation';
import RouteOnlyNonLogged from './utils/route/RouteOnlyNonLogged';
import Files from './view/Files';
import Login from './view/Login';
import RELogin from './RELogin';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={state}>
      <BrowserRouter>
        <RELogin />
        <div className="App">
          <header className="App-header">
            <Route path={ROOT_ROUTE} component={Navigation} />
            <div>
              <Route exact path={ROOT_ROUTE} component={Files} />
              <RouteOnlyNonLogged exact path={LOGIN_ROUTE} component={Login} />
            </div>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
