import { connect, MapDispatchToProps } from 'react-redux';

import { deleteFileRequest } from '../../../../../state/files/actions';
import { PropsId, ActionsDipatch } from '../types';
import Delete from './Delete';

const mapDispatchToProps: MapDispatchToProps<ActionsDipatch, PropsId> = (
  dispatch,
  { id }
) => ({
  action: (): void => {
    dispatch(deleteFileRequest(id));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(Delete);
