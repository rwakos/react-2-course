import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import Adapter from 'enzyme-adapter-react-15';

const createMockStore = configureMockStore([thunk]);

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
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('Should ADD expense to Database and store', (done) =>{
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Better',
        createdAt:1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should ADD expense with defaults to database and store', (done) =>{
    const store = createMockStore({});
    const expenseDefaults = {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
    };
    store.dispatch(startAddExpense(expenseDefaults)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});




/*test('Should ADD Anonymous expense default values', () =>{
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
});*/
