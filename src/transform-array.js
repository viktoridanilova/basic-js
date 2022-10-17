const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  const changedArray = [].concat(arr);
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  for(let i=0; i < changedArray.length; i++) {
    const isDiscardNext = changedArray[i] === discardNext
    const isDiscardPrev = changedArray[i] === discardPrev
    const isDoubleNext = changedArray[i] === doubleNext
    const isDoublePrev = changedArray[i] === doublePrev
    const isPrevExpr = isDiscardPrev || isDoublePrev
    const isNextExpr = isDiscardNext || isDoubleNext
    debugger;
    if ((isNextExpr && i === arr.length - 1) || (isPrevExpr && i === 0)) {
      changedArray.splice(i, 1)
      continue
    }

    if (isDiscardNext) {
      changedArray.splice(i, 2);
      continue
    }
    if (changedArray[3] === discardPrev) changedArray.splice(3,1)

    if (isDiscardPrev) {
      changedArray.splice(i-1, 2)
      continue
    }
    if (isDoubleNext) {
      changedArray.splice(i, 1, changedArray[i+1])
      continue
    }
    if (changedArray[3] === doublePrev) changedArray.splice(3,1)
    if (isDoublePrev) {
      changedArray.splice(i, 1, changedArray[i-1])
      continue
    }
  }
   
  return changedArray
}

module.exports = {
  transform
};
