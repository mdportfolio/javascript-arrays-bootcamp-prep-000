var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element)
  return newArray
}
function addElementToEndOfArray(array, element){
  array = [... array, element]
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  var newArray = array.push(element)
  return newArray
}
function accessElementInArray(array, index){
  return array[index]
}
/*function destructivelyRemoveElementFromBeginningOfArray(array){
  
}
function (array){}
function (array){}
*/