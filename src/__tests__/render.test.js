import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import CheckboxWithLabel from '../components/checkbox/CheckboxWithLabel';
Enzyme.configure({ adapter: new Adapter() });
it('renders correctly', () => {
  const tree = renderer
    .create(<CheckboxWithLabel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});