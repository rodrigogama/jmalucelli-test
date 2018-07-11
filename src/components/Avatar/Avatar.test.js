import React from 'react';
import { shallow, mount, } from 'enzyme';
import Avatar from './Avatar';
import image from '../../assets/img/img_avatar.png';
import image2 from '../../assets/img/img_avatar2.png';

describe('Avatar Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Avatar src={image}/>).find('.avatar-container').exists()).toBe(true);
  });

  it('should render the image passed as props', () => {
    const wrapper = mount(<Avatar src={image2}/>);
    const imgSrc = wrapper.find('.avatar-container').find('.avatar-img').prop('src');
    expect(imgSrc).toEqual(image2);
  });
});