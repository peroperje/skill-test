import { connect, MapStateToProps } from 'react-redux';

import { ApplicationState } from '../../../state/types';
import {
  isFetching,
  isUploading,
  isDeleting
} from '../../../state/files/selectors';

import { StateProps } from './types';

import Progress from './Progress';

const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  ApplicationState
> = state => ({
  showProgress: isFetching(state) || isUploading(state) || isDeleting(state)
});

export default connect(mapStateToProps)(Progress);
