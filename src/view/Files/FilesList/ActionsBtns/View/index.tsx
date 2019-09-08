import React, { useState } from 'react';

import { IconButton, Description } from '../../../../../UI';
import Modal from './Modal';
import { PropsId } from '../types';

const View: React.FC<PropsId> = ({ id }: PropsId): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOnClick = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <>
      <IconButton title="View" onClick={handleOnClick}>
        <Description />
      </IconButton>
      <Modal open={open} handleClose={handleClose} id={id} />
    </>
  );
};

export default View;
