import { addExpense, editExpense, removeExpense} from "../../actions/expenses";


test('Should remove expense', () =>{
	const action = removeExpense({id: '123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('Should Edit expense', () =>{
	const action = editExpense('123abc', {note: 'New note'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {note: 'New note'}
	});
});

test('Should ADD expense', () =>{
	const expenseData = {
		description: 'Some Bill'
		, note: ''
		, amount:0
		, createdAt:15005454
	};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('Should ADD Anonymous expense', () =>{
	const expenseData = {};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: ''
			, note: ''
			, amount:0
			, createdAt:0
			, id: expect.any(String)
		}
	});
});
