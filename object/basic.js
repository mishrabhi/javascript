// // object declaration

// var obj = {
//     'name' : 'mohini'
// }

// console.log(obj)
// console.log(obj.length) //undefined

// // reading value by dot notation
// // console.log(obj.name);

// // var object = {
// //     'name' : 'abshk',
// //     'age' : 24,
// //     'married' : false
// // }

// // console.log(object)
// // console.log(object.age)

// // bracket notation
// var object = {
//     'name' : 'abshk',
//     'age' : 24,
//     'married' : false
    
// }

//  n = 'name',
//  a = 'age'

// console.log(object[n])
// console.log(object[a])

// //  dot notation

// // add value
// object.location = 'allahabad'
// console.log(object)

// console.log(object.location)

// // update value

// // object.age = '21'
// // console.log(object)

// // console.log(typeof object)


// // var obje = new Object()
// // console.log(obje)

// // obje.name = 'abhishek'
// // console.log(obje)


// //Exercise:

var object = {
    'name' : 'Abhishek',
    'age' : '22',
    'college' : 'VBPS',
    'city' : 'prayagraj',
    'hobby' : ['singing', 'dncing', 'travelling'],
    'education' : {
        10 : 84 ,
        12 : 80
    }
}
// var sen = `Hi, I am ${object.name}.My age is ${object.age}.I have studied from ${object.college} and currently living at ${object.city}.My hobby is ${object.hobby}.`

// console.log(sen)

console.log(object.hobby[1])

console.log(object.education[10])