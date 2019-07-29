var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = (array, element) => {
  var newArray = [array, ...element];
  return newArray;
}
