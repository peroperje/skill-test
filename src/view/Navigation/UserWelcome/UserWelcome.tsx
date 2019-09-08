import React from 'react';

import { Typography, Box, IconButton, PowerSettingsIcon } from '../../../UI';
import { StateProps, DispatchProps } from './types';

type Props = StateProps & DispatchProps;

const UserWelcome: React.FC<Props> = ({
  logout,
  firstName,
  lastName
}: Props): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography>
        Hi, {firstName} {lastName}
      </Typography>
      <IconButton onClick={logout} color="inherit">
        <PowerSettingsIcon />
      </IconButton>
    </Box>
  );
};

export default UserWelcome;
