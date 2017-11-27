import moment from 'moment';
//Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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