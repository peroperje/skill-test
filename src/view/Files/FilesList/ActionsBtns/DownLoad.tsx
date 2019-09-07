import React from 'react';
import { CloudDownload, IconButton } from '../../../../UI';
import { baseUrl } from '../../../../utils/config';
import { PropsDownLoad } from './types';

const DownLoad: React.FC<PropsDownLoad> = ({
  download
}: PropsDownLoad): JSX.Element => (
  <IconButton title="Download" href={`${baseUrl}/download/${download}`}>
    <CloudDownload />
  </IconButton>
);

export default DownLoad;
