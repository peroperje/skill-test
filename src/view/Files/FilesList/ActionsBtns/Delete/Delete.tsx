import React, { useState } from 'react';

import { IconButton, DeleteIcon } from '../../../../../UI';
import { ActionsDipatch } from '../types';

const Delete: React.FC<ActionsDipatch> = ({
  action
}: ActionsDipatch): JSX.Element => {
  const [disable, setDisable] = useState(false);
  const handleOnClick = (): void => {
    setDisable(true);
    action();
  };
  return (
    <IconButton title="Delete" onClick={handleOnClick} disabled={disable}>
      <DeleteIcon />
    </IconButton>
  );
};

export default Delete;
