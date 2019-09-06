import React from 'react';

const FilesList: React.FC = (): JSX.Element => {
  return (
    <div className="Flex-column" style={{ width: '600px' }}>
      <div className="Flex-row">
        <div>File name</div>
        <div>Uploaded on</div>
        <div>Action</div>
      </div>
      <div className="Flex-row">
        <div>some_name.cv</div>
        <div>56467879</div>
        <div>
          <button>View</button>
          <button>Download</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="Flex-row">
        <div>some_name.cv</div>
        <div>56467879</div>
        <div>
          <button>View</button>
          <button>Download</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="Flex-row">
        <div>some_name.cv</div>
        <div>56467879</div>
        <div>
          <button>View</button>
          <button>Download</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="Flex-row">
        <div>some_name.cv</div>
        <div>56467879</div>
        <div>
          <button>View</button>
          <button>Download</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FilesList;
