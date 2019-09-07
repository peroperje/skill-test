import React from 'react';

import { baseUrl } from '../../../../utils/config';
import { PropsDownLoad } from './types';

const DownLoad: React.FC<PropsDownLoad> = ({
  download
}: PropsDownLoad): JSX.Element => (
  <a href={`${baseUrl}/download/${download}`}>
    <button>Download</button>
  </a>
);

export default DownLoad;
