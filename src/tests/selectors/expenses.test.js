import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should gen selectExpenses', () =>{
	const filters = {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by startDate value', () =>{
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter by endDate value', () =>{
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0)
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should filter by Date value', () =>{
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Should filter by Amount value', () =>{
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});