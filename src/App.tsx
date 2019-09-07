import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import state from './state';
import { ROOT_ROUTE, LOGIN_ROUTE } from './utils/route/routesDefinition';
import { Container } from './UI';
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
        <Container>
          <Route path={ROOT_ROUTE} component={Navigation} />
          <Container>
            <Route exact path={ROOT_ROUTE} component={Files} />
            <RouteOnlyNonLogged exact path={LOGIN_ROUTE} component={Login} />
          </Container>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
