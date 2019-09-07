import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, ROOT_ROUTE } from '../../utils/route/routesDefinition';
import ISLogged from '../../HoC/ISLogged';
import UserWelcome from './UserWelcome';

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="Flex-row">
      <Link to={ROOT_ROUTE}>Home</Link>
      <ISLogged>
        {(isLogged): React.ReactNode => {
          return (
            <>
              {!isLogged && <Link to={LOGIN_ROUTE}>Sign in</Link>}
              {isLogged && <UserWelcome />}
            </>
          );
        }}
      </ISLogged>
    </div>
  );
};

export default Navigation;
