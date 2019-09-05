import localStorage, { StorageItems } from '../index';

const storageObj: StorageItems = {
  token: '54656',
  email: 'hdkjhwk@dw.com'
};

beforeEach(() => {
  localStorage.remove();
});

describe('localStorage', () => {
  describe('get', () => {
    it('should return items', () => {
      localStorage.set(storageObj);
      const objFromStore = localStorage.get();
      expect(objFromStore).toEqual(storageObj);
    });
  });

  describe('exists', () => {
    it('should return false - storage obj does not exist', () => {
      const doesExists = localStorage.exists();
      expect(doesExists).toBe(false);
    });

    it('should return true - storage obj exists', () => {
      localStorage.set(storageObj);
      const doesExists = localStorage.exists();
      expect(doesExists).toBe(true);
    });
  });
});
