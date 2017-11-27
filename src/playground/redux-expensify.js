import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ( { id } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text ='') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

//SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
        return [
            ...state, action.expense
        ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                return expense;
            }
        });

        default:
        return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy:'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'amount'
            
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };

        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.date
        };

        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.date
        };

        default:
        return state;
    }
};

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
        const textMatch = text !== undefined && expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){ //Decreasing...
            return a.createdAt < b.createdAt ? 1: -1;
        } else if (sortBy === 'amount'){  //Decreasing...
            return a.amount < b.amount ? 1: -1;
        }
    });
};

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const ex1 = store.dispatch(addExpense({description:'Rent Apr', amount:100, createdAt: -21000}));
const ex2 = store.dispatch(addExpense({description:'Coffe', amount:200, createdAt: -1000}));
/*
store.dispatch(removeExpense({id: ex1.expense.id}));
store.dispatch(editExpense(ex2.expense.id, {amount:400}));
store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(270));
store.dispatch(setEndDate());
*/
/*store.dispatch(setStartDate(0));
store.dispatch(setEndDate(999));*/
//store.dispatch(setTextFilter('e'));
store.dispatch(sortByAmount());
const demoState = {
    expenses: [
        {
            id: 'asdfdfghdffasfd',
            description: 'Jan Rent',
            note: 'payment note...',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters:{
        text: 'rent',
        sortBy:'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};



