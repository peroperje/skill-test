import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import state from './state';
import { ROOT_ROUTE, LOGIN_ROUTE } from './utils/route/routesDefinition';
import { Container, Box } from './UI';
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
          <Box mt={5}>
            <Route exact path={ROOT_ROUTE} component={Files} />
            <RouteOnlyNonLogged exact path={LOGIN_ROUTE} component={Login} />
          </Box>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
