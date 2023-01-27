// index/first letter always start with 0, in here the number 35 is index and it is counted from 0, then 1, 2, 3...
var numbers=[35, 65, 95, 35, 25, 375];

// get element by index
// console.log(numbers[0])
// to change element value use
numbers[0]=105;
// console.log(numbers);

numbers[5]=205;
// console.log(numbers);

//  find index/position of an element
var positionIndex=numbers.indexOf(25);
console.log(positionIndex);
