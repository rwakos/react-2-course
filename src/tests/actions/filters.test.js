import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from 'moment';

test('Should gen setStartDate', () =>{
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('Should gen setEndDate', () =>{
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('Should gen setTextFilter', () =>{
	const text = 'X data'
	const action = setTextFilter(text);

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
});

test('Should gen setTextFilter Anonymous', () =>{
	const text = ''
	const action = setTextFilter();

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
});

test('Should gen sortByDate', () =>{
	expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('Should gen sortByAmount', () =>{
	expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});