const { differenceInCalendarDays } = require('date-fns');

module.exports = (start, end, total) => Math.round(total / differenceInCalendarDays(end, start));
