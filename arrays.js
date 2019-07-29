var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newEndingArray = [array, ...element];
  return newEndingArray;
}
