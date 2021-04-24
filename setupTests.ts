import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
// @ts-ignore
global.shallow = shallow;
// @ts-ignore
global.render = render;
// @ts-ignore
global.mount = mount;
