import React from 'react';

import Delete from './Delete';

import { PropsId } from './types';

const ActionsBtns: React.FC<PropsId> = ({ id }: PropsId) => (
  <div>
    <button>View</button>
    <button>Download</button>
    <Delete id={id} />
  </div>
);

export default ActionsBtns;
