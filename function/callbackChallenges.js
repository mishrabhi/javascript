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

//Challenge 4:
//The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
//let alphabet = ' ';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters,function(char){
//     alphabet += char;
// });
//console.log(alphabet);  //prints 'abcd'
function forEach(letters, char){
    return char(letters)
}
let value = '';
forEach(['a', 'b', 'c', 'd'], function(n){
    value = `'${n.join('')}'`
    return value
})
console.log(value)


//Challenge 5:
//In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
function multiplyByTwo(num){
    return num * 2
}
let temp = [];
function mapWith(array, multiplyByTwo){
    array.forEach((ele) =>{
        let mul = multiplyByTwo(ele);
        temp.push(mul)
    })
    return temp
}
console.log(mapWith([2,3], multiplyByTwo))


//Challenge 6:
//The function reduce takes an array and reduces the element to a single value.For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
//const nums = [4,1,3];
//const add = function(a,b) {return a+b;}
//reduce(nums, add, 0);   //->8
function addition(a,b){
    return a+b
}
function reduce(array, add, reducer){
    for(i=0; i<array.length; i++){
        addition = add(reducer, array[i])
        reducer = addition;
    }
    return reducer
}
console.log(reduce([4,2,5,6], addition, 0))  //17



























