import React from 'react';
import ISLogged from '../../../../HoC/ISLogged';
import Delete from './Delete';

import { PropsId } from './types';

const ActionsBtns: React.FC<PropsId> = ({ id }: PropsId) => (
  <div>
    <button>View</button>
    <button>Download</button>
    <ISLogged>
      {(isLogged): React.ReactNode | boolean => {
        return isLogged && <Delete id={id} />;
      }}
    </ISLogged>
  </div>
);

export default ActionsBtns;
