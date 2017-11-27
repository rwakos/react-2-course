import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDatesChange = ({startDate, endDate}) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }))
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = (e)=>{
		if (e.target.value === 'date'){
			this.props.sortByDate();
		} else if (e.target.value === 'amount') {
			this.props.sortByAmount();
		}
	}
	render() {
		return (
			<div>
				<input type="text"
					   value={this.props.filters.text}
					   onChange={this.onTextChange} />

				<select
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>

				<DateRangePicker
					startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
					endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
					onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
					focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount:() => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
