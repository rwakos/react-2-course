import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = -101} = {}) => ({
    type: 'SET',
    count: typeof count === 'number' ? count : 1
});

//Redux Reducers: 
// 1. Are pure functions
// 2. Never change state or action

const countReducer = (state = {count:0}, action) => {
    switch (action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count:action.count
        };
        case 'RESET':
        return {
            count:0
        };
        default:
        return state;
    }
}

const store = createStore();
/*
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.subscribe(() => {
    console.log(store.getState());
});*/

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount());
store.dispatch(setCount({count:0}));
store.dispatch(resetCount());

/*store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
});*/
