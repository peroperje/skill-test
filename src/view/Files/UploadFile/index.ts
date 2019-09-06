import { connect, MapDispatchToProps } from 'react-redux';

import { SubmitDispatch } from './types';
import { uploadFileRequest } from '../../../state/files/actions';
import UploadFile from './UploadFile';

const mapDispatchToProps: MapDispatchToProps<
  SubmitDispatch,
  {}
> = dispatch => ({
  submit: (files): void => {
    const file = new FormData();
    file.append('file', files[0]);
    dispatch(uploadFileRequest(file));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UploadFile);
