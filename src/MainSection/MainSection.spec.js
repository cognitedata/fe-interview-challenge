import React from 'react';
import { mount } from 'enzyme';
import MainSection from './MainSection';

describe('MainSection', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(<MainSection />);
    expect(wrapper).toHaveLength(1);
  });
});
