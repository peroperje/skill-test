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
  showLineProgress: isUploading(state) || isDeleting(state),
  showCircularProgress: isFetching(state)
});

export default connect(mapStateToProps)(Progress);
