import { connect, MapStateToProps } from 'react-redux';

import { ApplicationState } from '../../../state/types';
import { getFiles, isFetching } from '../../../state/files/selectors';
import { FileListProps } from './types';
import FileList from './FileList';

const mapStateToProps: MapStateToProps<
  FileListProps,
  {},
  ApplicationState
> = state => ({
  files: getFiles(state).reverse(),
  isFetching: isFetching(state)
});

export default connect(mapStateToProps)(FileList);
