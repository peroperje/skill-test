import store from 'store';

export interface StorageItems {
  token: string;
  email: string;
}

/**
 * @description The storage item name
 * @type {string}
 */
const JWT = 'skill-test';

const get = (): StorageItems => store.get(JWT);

const set = (value: StorageItems): void => {
  store.set(JWT, value);
};

const remove = (): void => {
  store.remove(JWT);
};

const exists = (): boolean => {
  const item = get();
  return typeof item !== 'undefined';
};

export default {
  get,
  set,
  remove,
  exists
};
