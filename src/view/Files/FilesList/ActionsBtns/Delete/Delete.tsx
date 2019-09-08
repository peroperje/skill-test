import React, { useState, Dispatch } from 'react';

import { IconButton, DeleteIcon } from '../../../../../UI';
import { ActionsDipatch } from '../types';

interface UseDisable {
  disable: boolean;
  setDisable: Dispatch<boolean>;
}
export function useDisable(): UseDisable {
  const [disable, setDisable] = useState(false);
  return { disable, setDisable };
}

const Delete: React.FC<ActionsDipatch> = ({
  action
}: ActionsDipatch): JSX.Element => {
  const { disable, setDisable } = useDisable();

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
