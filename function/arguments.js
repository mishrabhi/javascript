// arguments passed when function cretaed.
// parameter pass when we call function.

// function add(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// add(2,3)

// if not pass any parametr then it take as a undefined.

// argument keyword

// function add(){
//     for(var i = 0; i<arguments.length; i++){
//         result = result + arguments[i];
//     }
// }

function info(){
    var obj = {
        name: 'moihni',
        age :24
    }
    return obj
}

var value = info()

console.log(value.name) 

value.education = "Btech"
console.log(value)

console.log(info())