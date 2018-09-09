import React from 'react';
import Foo from './Foo.js';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';


function Bar(props) {
    // `Foo` is not a "tag name"
    return <Foo />
}
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(Bar)
wrapper.find('Foo')

export default Bar;