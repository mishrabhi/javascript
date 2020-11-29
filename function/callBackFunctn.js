
//A function that is passed to another function as a parameter is called a callback Function.
// function print(callback) {
//     callback();
// }

//The print() takes another functionas a parameter and calls it inside. This is valid in javascript and we call it as callback function.

//lets look at it by taking an example:-

function hello(a, b, cb){
    console.log(a)
    console.log(b)
    cb()
}
//When we call it this happens:
hello(2,3, function(){
    console.log("hii")
})  // 2
    // 3
    //hii


 //Lets take another example:-
 
 function add(a, b, cb) {
     var result = a + b;
     return cb(result)
 }
 var value = add(2,4, function(n){
     return n*n
 })
 console.log(value) //36