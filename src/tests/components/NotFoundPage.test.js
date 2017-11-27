import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import expenses from '../fixtures/expenses';


test('should render NotFoundPage', () => {
	const wrapper = shallow(<NotFoundPage {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});