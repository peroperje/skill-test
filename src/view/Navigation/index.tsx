import React from 'react';
import { makeStyles, createStyles, Theme } from '../../UI';
import { AppBar, Toolbar, Button } from '../../UI';
import { LOGIN_ROUTE, ROOT_ROUTE } from '../../utils/route/routesDefinition';
import ISLogged from '../../utils/HoC/ISLogged';
//import { Link } from 'react-router-dom';
import Link from '../../utils/route/CollisionLink';
import UserWelcome from './UserWelcome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Navigation: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            className={classes.title}
            component={Link}
            to={ROOT_ROUTE}
            color="inherit"
          >
            Home
          </Button>
          <ISLogged>
            {(isLogged): React.ReactNode => {
              return (
                <>
                  {!isLogged && (
                    <Button component={Link} to={LOGIN_ROUTE} color="inherit">
                      Login
                    </Button>
                  )}
                  {isLogged && <UserWelcome />}
                </>
              );
            }}
          </ISLogged>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navigation;
