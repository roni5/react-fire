import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import CheckboxWithLabel from '../components/checkbox/CheckboxWithLabel';
Enzyme.configure({ adapter: new Adapter() });

test('CheckboxWithLabel renders the text inside App', () => {
  // eslint-disable-next-line
    const wrapper = mount(
      <CheckboxWithLabel labelOn="On" labelOff="Off"  />
      //expect(checkbox.text()).toEqual('Off');
      //checkbox.find('input').simulate('change');
      //expect(checkbox.text()).toEqual('On');
    );

  expect(wrapper).toMatchSnapshot();
  });