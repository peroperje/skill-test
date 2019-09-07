import React from 'react';

import ISLogged from '../../../../HoC/ISLogged';
import Delete from './Delete';
import DownLoad from './DownLoad';
import { PropsId, PropsDownLoad } from './types';

type Props = PropsId & PropsDownLoad;

const ActionsBtns: React.FC<Props> = ({ id, download }: Props) => (
  <div>
    <button>View</button>
    <DownLoad download={download} />
    <ISLogged>
      {(isLogged): React.ReactNode | boolean => {
        return isLogged && <Delete id={id} />;
      }}
    </ISLogged>
  </div>
);

export default ActionsBtns;
