//Challenge 1:
//Create a function addTwo that accepts one input and add 2 to it.
function addTwo(num) {
    return num+2
}
console.log(addTwo(5))
console.log(addTwo(9))

//Challenge 2:
//Create a function addS that accepts one input and add 'S' to it.
function addS(input) {
    return input+ 's' 
}
console.log(addS('Abhishek'))
console.log(addS('Apple'))

//Challenge 3:
//Create a function map that takes two inputs:
//1.an array of numbers(a list of numbers)
//2.a 'collback function'- a function that is applied to each element of the array(inside the function "map").
//Have map return new array filled with numbers that are result of sing the 'callback function' on each of th input array.
//map([1,2,3,4,5]), multiplyByTwo); //-> [2,4,6,8,10]
//multiplyByTwo(1);  // ->2
//multiplyByTwo(2);  // ->4
function multiplyByTwo(num) {
    return num*2
}
let value = [];
function map(array, callback) {
for(i=0; i<array.length; i++){
    mul=multiplyByTwo(array[i]);
    value.push(mul)

}
return value
}
console.log(map([1,2,3], multiplyByTwo))