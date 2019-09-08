import React from 'react';

import ISLogged from '../../../../utils/HoC/ISLogged';
import View from './View';
import DownLoad from './DownLoad';
import Delete from './Delete';
import { PropsId, PropsDownLoad } from './types';

type Props = PropsId & PropsDownLoad;

const ActionsBtns: React.FC<Props> = ({ id, download }: Props) => (
  <div>
    <View id={id} />
    <DownLoad download={download} />
    <ISLogged>
      {(isLogged): React.ReactNode | boolean => {
        return isLogged && <Delete id={id} />;
      }}
    </ISLogged>
  </div>
);

export default ActionsBtns;
