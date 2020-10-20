// function scoping

// 1=> variable and statment can access within function only, if declare or assign in function.

// function foo(){
//     var a = 10;
//     console.log(a)
// }

// 2=>


// var a = 20;
// function foo(){         
// }
// foo()
// console.log(a)

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

var a = 10;
function fee(){
    var b = 20;
    var c = 25;
    console.log(a)
    console.log(b)
    console.log(c)
}
fee()
console.log(a)
console.log(b)
console.log(c)