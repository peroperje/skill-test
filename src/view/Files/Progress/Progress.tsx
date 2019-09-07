import React from 'react';

import { LinearProgress } from '../../../UI';
import { StateProps } from './types';

const Progress: React.FC<StateProps> = ({
  showProgress
}: StateProps): JSX.Element | null => {
  return showProgress ? <LinearProgress color="secondary" /> : null;
};

export default Progress;
