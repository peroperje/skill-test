import { fetchFiles, deleteFile, uploadFile, url } from '../services';

describe('Files Service', () => {
  it('fetchFiles', done => {
    fetchFiles().then(res => {
      expect(res).toEqual({
        url,
        method: 'get'
      });
    });
  });
});
