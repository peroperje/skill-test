import React from 'react';

import Delete from './Delete';

import { IDProps } from './types';

const ActionsBtns: React.FC<IDProps> = ({ id }: IDProps) => (
  <div>
    <button>View</button>
    <button>Download</button>
    <Delete id={id} />
  </div>
);

export default ActionsBtns;
