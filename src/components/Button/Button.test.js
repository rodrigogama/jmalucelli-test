import React from 'react';
import { shallow, mount, } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Button />).find('.btn').exists()).toBe(true);
  });

  it('should render an icon (arrow-right) on button', () => {
    const wrapper = mount(<Button showIcon iconName="arrow-right" />);
    const icon = wrapper.find('.btn__text-container').find('.fa-arrow-right');
    expect(icon.exists()).toBe(true);
  });
});