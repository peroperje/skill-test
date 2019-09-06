const a = {
  type: '@files/FETCH_FILES_SUCCESS',
  payload: [
    {
      id: 1,
      name: 'someName',
      updateAt: 488993565,
      download: '/somePath/someFile.csv'
    }
  ]
};

const b = {
  type: '@files/DELETE_FILE_SUCCESS',
  payload: 1
};

export {};
