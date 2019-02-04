export default (expenses) => {
    // if no expenses are passed
    if (!expenses || expenses.length === 0) {
        return 0;
    }
    return expenses.reduce((sum, { amount })=> sum+amount,0);
};