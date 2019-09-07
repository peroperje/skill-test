import React from 'react';
import { StateProps, DispatchProps } from './types';

type Props = StateProps & DispatchProps;

const UserWelcome: React.FC<Props> = ({
  logout,
  firstName,
  lastName
}: Props): JSX.Element => {
  return (
    <div className="Flex-column">
      <>
        Hello {firstName} {lastName}
      </>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserWelcome;
