import React from 'react';
import { shallow, mount, } from 'enzyme';
import Toolbar from './Toolbar';

describe('Toolbar Component', () => {
  it('should render without crashing', () => {
    expect(shallow(<Toolbar />).find('.toolbar.toolbar-primary').exists()).toBe(true);
  });
});