import React from 'react';

import { IconButton, DeleteIcon } from '../../../../../UI';
import { ActionsDipatch } from '../types';

const Delete: React.FC<ActionsDipatch> = ({
  action
}: ActionsDipatch): JSX.Element => {
  return (
    <IconButton title="Delete" onClick={action}>
      <DeleteIcon />
    </IconButton>
  );
};

export default Delete;
