import React from 'react';

import { ActionsDipatch } from '../types';

const Delete: React.FC<ActionsDipatch> = ({
  action
}: ActionsDipatch): JSX.Element => {
  return <button onClick={action}>Delete</button>;
};

export default Delete;
