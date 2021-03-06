jest.mock('../../../utils/service/request');
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
    const file = new FormData();
    uploadFile(file).then(res => {
      expect(res).toEqual({
        url,
        method: 'post',
        data: file,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      done();
    });
  });

  it('deleteFile ', done => {
    const id = 1;
    deleteFile(id).then(res => {
      expect(res).toEqual({
        url: `${url}/${id}`,
        method: 'delete'
      });
      done();
    });
  });
});
