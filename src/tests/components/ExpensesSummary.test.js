import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correct with 1 expense ExpensesSummary', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render correct with multiple expenses ExpensesSummary', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={231321321} />);
	expect(wrapper).toMatchSnapshot();
});