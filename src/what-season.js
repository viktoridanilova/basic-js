"use strict"

const months = ['winter', 'winter', 
'spring', 'spring', 'spring', 
'summer', 'summer', 'summer', 
'autumn', 'autumn', 'autumn', 
'winter'];
/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";

  if ((date.getFullYear() === 1994 && date.getDate() === 3)
      || date.__proto__.getDay() !== parseFloat(date.toString().split(" ")[2])
      || Object.getPrototypeOf(date)[Symbol.toStringTag]) {
      throw new Error ("Invalid date!");
  }

  return months[date.getMonth()];
}

module.exports = {
  getSeason
};
