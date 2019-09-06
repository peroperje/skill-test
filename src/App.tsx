import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './App.css';
import state from './state';
import {
  ROOT_ROUTE,
  LOGIN_ROUTE,
  FILES_ROUTE
} from './utils/route/routesDefinition';
import RouteOnlyNonLogged from './utils/route/RouteOnlyNonLogged';
import Home from './view/Home';
import Files from './view/Files';
import Login from './view/Login';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={state}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="Flex-row">
              <Link to={ROOT_ROUTE}>Home</Link>
              <Link to={FILES_ROUTE}>File Manager</Link>
              <Link to={LOGIN_ROUTE}>Sign in</Link>
            </div>
            <div>
              <Route path={ROOT_ROUTE} exact component={Home} />
              <RouteOnlyNonLogged path={LOGIN_ROUTE} exact component={Login} />
              <Route path={FILES_ROUTE} exact component={Files} />
            </div>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
