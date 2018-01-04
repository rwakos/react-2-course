import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogout={() => {}} />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={ startLogout } />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

/*
Example with ReactShallowRenderer...
const renderer = new ReactShallowRenderer();
renderer.render(<Header/>);
expect(renderer.getRenderOutput()).toMatchSnapshot();
console.log(renderer.getRenderOutput());*/
/*
Example with enzyme...
const wrapper = shallow(<Header/>);
expect(wrapper.find('h1').text()).toBe('Expensify');
*/