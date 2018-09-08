
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from '../components/checkbox/CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  const checkboxNode = ReactDOM.findDOMNode(checkbox);

  // Verify that it's Off by default
  expect(checkboxNode.textContent).toEqual('Off');

  // Simulate a click and verify that it is now On
  TestUtils.Simulate.change(
    TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  );
  expect(checkboxNode.textContent).toEqual('On');
});

test('CheckboxWithLabel renders the text inside App', () => {
// eslint-disable-next-line
  const wrapper = mount(
    <CheckboxWithLabel labelOn="On" labelOff="Off"  />
    expect(checkbox.text()).toEqual('Off');
    //checkbox.find('input').simulate('change');
    //expect(checkbox.text()).toEqual('On');
  );
});
it('renders correctly', () => {
  const tree = renderer
    .create(<CheckboxWithLabel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});