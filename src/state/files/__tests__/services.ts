import { fetchFiles, deleteFile, uploadFile, url } from '../services';

describe('Files Service', () => {
  it('fetchFiles', done => {
    fetchFiles().then(res => {
      expect(res).toEqual({
        url,
        method: 'get'
      });
      done();
    });
  });
  it('uploadFile', done => {
    const file = {} as File;
    uploadFile({ file: file }).then(res => {
      expect(res).toEqual({
        url,
        method: 'post',
        data: { file: file },
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      done();
    });
  });
});
