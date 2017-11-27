import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid data', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New Description';
	const wrapper = shallow(<ExpenseForm />);
	//Find first input:
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('description')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
	const value = 'New Note';
	const wrapper = shallow(<ExpenseForm />);
	//Find first input:
	wrapper.find('textarea').at(0).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('note')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid', () => {
	const value = '12.14';
	const wrapper = shallow(<ExpenseForm />);
	//Find second input which is amount:
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('amount')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('should set amount if is invalid', () => {
	const value = '12.1478';
	const wrapper = shallow(<ExpenseForm />);
	//Find second input which is amount:
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('amount')).toBe('');
	expect(wrapper).toMatchSnapshot();
});

test('should render correct submit', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
		});
});

test('should set new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange');
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
	expect(wrapper.state('calendarFocused')).toBe(focused);
});