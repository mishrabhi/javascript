// function scoping

// 1=> variable and statment can access within function only, if declare or assign in 
// function.
//2 => Inner function can have access variables from outer.
//3=> Outer function cannot have access of variable from inner function.


// function foo(){
//     var a = 10;
//     console.log(a)
// }



// Exercise:


// var a = 10;
// var b = 20;
// function tree(){
//     c = a + b
// }
// tree()
// console.log(c)

// function raja(){
//     var a = 10;
//     var b = 39;
//     c = a + b
// }
// raja()
// console.log(c)


// function ashu(){
//     var a = 'ashutosh';
//     var b = 35;
//      c = a + b
// }
// ashu()
// console.log(c)

//Ques:
// var a = 10;
// function fee(){
//     var b = 20;
//     var c = 25;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// fee()
// console.log(a)
// console.log(b)
// console.log(c)


Question:
var a = 10;
function well(){
    var b= 20;
    c = 15;           //If c is not declared then it lies in global space.
    console.log(a) //10
    console.log(b)  //20
    console.log(c)  //15
}
well()
console.log(a) //10
console.log(b) //not defined
console.log(c) // 15
