// arguments passed when function cretaed.
// parameter pass when we call function.
// argument keyword is array like object.

// function add(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// add(2,3)

// if not pass any parametr then it takes as undefined.

// argument keyword

// function add(){
//     for(var i = 0; i<arguments.length; i++){
//         result = result + arguments[i];
//     }
// }

// function info(){
//     var obj = {
//         name: 'mohini',
//         age :24
//     }
//     return obj
// }

// var value = info()

// console.log(value.name) 

// value.education = "Btech"
// console.log(value)

// console.log(info())

// Ques.: 
// function raja(){
//     var obj = {
//         name: 'Abhishek',
//         age: 23,
//         location: 'Allahabad',
//     }
//     return obj
// }

// var value = raja()

// console.log(value.name)

// value.friendName ='Ajeet'
// console.log(raja())
// console.log(value)


// Question:-We Have to add some numbers using functions:

// function add(){
//     var result = 0;
//     for(var i=0; i<arguments.length; i++){
//         result = result + arguments[i]
//     }
//   console.log(result)
// }

// add(2,8,15,12)  //37

// Ques:- WAP to find the odd Nos. in an Array using function.
// function foo(){
//   let odd = [];
//   for(i=0; i<arguments.length; i++){
//     if(arguments[i] % 2 != 0){
//       odd.push(arguments[i])
//     }
//   }
//   return odd.length
// }
// console.log(foo(1,2,3,4,5,6,7))  //4

// Ques:- WAP to give array of indexes of odd elements in an array using functions.
// function foo(){
//   let odd = [];
//   for(i=0; i<arguments.length; i++){
//     if(arguments[i] % 2 != 0){
//       odd.push(arguments[i])
//     }
//   }
//   return odd
// }
// console.log(foo(1,2,3,4,5,6,7)) //[1,3,5,7]


// Ques:- WAP to reverse the array using function.
// function foo(){
//   let rev = [];
//   for(i=arguments.length-1; i>=0; i--){
//     rev.push(arguments[i])
//   }
//   return rev
// }
// console.log(foo(2,3,5,7)) //[7,5,3,2]

//Ques:- WAP to find the largest No. in an array using function.
// function foo(){
//   let largest = 0;
//   for(i=0; i<arguments.length; i++){
//     if(arguments[i] > largest){
//       largest = arguments[i]
//     }
//   }
//   return largest
// }
// console.log(foo(2,5,8,3,0,4))  //8

//Ques:- WAP to add even and odd nos. of an array using function.
function foo(){
  let odd = 0
  let even = 0
  for(i=0; i<arguments.length; i++){
    if(arguments[i] % 2 != 0){
      odd +=arguments[i] 
    }
    else even +=arguments[i]
  }
  return {odd, even}
}
console.log(foo(1,2,3,4,5,6,7,8))