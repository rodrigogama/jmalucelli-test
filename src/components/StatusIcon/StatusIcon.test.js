import React from 'react';
import { shallow, mount, } from 'enzyme';
import StatusIcon from './StatusIcon';

describe('StatusIcon Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<StatusIcon />).find('.fa-times-circle').exists()).toBe(true);
  });

  it('should render with valid icon', () => {
    const wrapper = mount(<StatusIcon isValid />);
    const icon = wrapper.find('.fa-check-circle');
    expect(icon.exists()).toBe(true);
  });
});