import React from 'react';
import { create } from 'react-test-renderer';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import { FileItem } from '../../../../state/files/types';
import FileList from '../FileList';

describe('FileList', () => {
  it('Snapshot empty files', () => {
    const component = create(<FileList files={[]} isFetching={false} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Shallow Snapshot with Files ', () => {
    const renderer = ShallowRenderer.createRenderer();
    const file: FileItem[] = [
      {
        id: 4,
        name: 'some name.csv',
        download: '45645--some-name.csv',
        updateAt: 45465464
      }
    ];
    const component = renderer.render(
      <FileList files={file} isFetching={false} />
    );
    expect(component).toMatchSnapshot();
  });
});
