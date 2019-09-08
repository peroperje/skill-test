import React from 'react';
import * as shallow from 'react-test-renderer/shallow';

import App from '../App';

describe('App', () => {
  it('Shallow Snapshot', () => {
    const render = shallow.createRenderer();
    const component = render.render(<App />);
    expect(component).toMatchSnapshot();
  });
});
