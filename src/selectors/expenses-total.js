
//Function to get Total from expenses
export default (expenses) => {
	return expenses.map((expense)=> expense.amount).reduce(
		(sum, value)=> sum+value, 0);
}