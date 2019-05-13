const { differenceInCalendarDays } = require('date-fns');

module.exports = (start, end, dailyAmount) => {
    const now = new Date();
    const endDate = now > end ? end : now;
    return Math.round(dailyAmount * differenceInCalendarDays(endDate, start))
};