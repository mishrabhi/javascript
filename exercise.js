// // // // var object = {
// // // //     'name' : 'Abhishek',
// // // //     'age' : 22,
// // // //     'married' : false,
// // // //     'higherEducation' : {
// // // //         'degree' : 'BSc',
// // // //         'percentage' : '65%',
// // // //         'college' : 'RMLAU',
// // // //     },
// // // //     'friends' : [{
// // // //         'name' : 'Ajeet',
// // // //         'age' : 26,
// // // //         'gender' : 'male',
// // // //     },
// // // //      {
// // // //          'name' : 'Sumit',
// // // //          'age' : 24,
// // // //          'gender' : 'male',
// // // //      }]
// // // // }
// // // // console.log(object.name)
// // // // console.log(object.age)
// // // // console.log(object.married)
// // // // console.log(object.higherEducation)
// // // // console.log(object.higherEducation.degree)
// // // // console.log(object.higherEducation.percentage)
// // // // console.log(object.higherEducation.college)
// // // // console.log(object.friends)
// // // // console.log(object.friends[0])
// // // // console.log(object.friends[1])

// // // // var sen = `I have completed my ${object.higherEducation.degree} from ${object.higherEducation.college} with ${object.higherEducation.percentage}.`
// // // // console.log(sen)

// // // // console.log(object.friends[0].name)
// // // // console.log(object.friends[0].age)
// // // // console.log(object.friends[0].gender)

// // // // console.log(object.friends[1].name)
// // // // console.log(object.friends[1].age)
// // // // console.log(object.friends[1].gender)

// // // //Arithmetic Operators=>
// // // var a = 10;
// // // var b = 20;

// // // var sum = (a+b)
// // // console.log(sum)

// // // var sub = (a-b)
// // // console.log(sub)

// // // var mul = (a*b)
// // // console.log(mul)

// // // var div = (b/a)
// // // console.log(div)

// // // var rem = (b%a)
// // // console.log(rem)

// // // //Post Increment=>
// // // var m = 10
// // // z = m++
// // // console.log(z)
// // // z = m++
// // // console.log(z)

// // // var k = 50
// // // x = k++
// // // x = k++
// // // console.log(x)

// // // //Pre Increment=>
// // // var g = 25
// // // h = ++g
// // // console.log(g)

// // // var d = 83
// // // f = ++d
// // // console.log(f)

// // // //Post Decrement=> 
// // var m = 67
// // z = m--
// // console.log(z)
// // z = m--
// // console.log(z)

// // var t = 29
// // s = t--
// // s = t--
// // console.log(s)

// // //Pre Decrement=>
// // var s = 23
// // h = --s
// // console.log(h)

// // var k = 44
// // d = --k
// // console.log(d)

// //Addition Assignment=>
// var x = 10
// var y = 25
// var add = (x+=y)
// console.log(add)

// //Subtraction Assignment=>
// var sub = (x-=y)
// console.log(sub)

// //Multiplication Assignment=>
// var mul = (x*=y)
// console.log(mul)

// //Division Assignment=>
// var div = (y/=x)
// console.log(div)

// //Remainder Assignment=>
// var rem = (x%=y)
// console.log(rem)


// Loop Questions=>
//=>print 1 to 30=>

// for (n=1; n<=30; n++) {
//     console.log(` ${n}`) 
// }

//print reverse table of 2=>

// for (n=10; n>=1; n--) {
//     console.log(`2 X ${n} = ${2 * n}`)
// }   

//print alphabet a to z=>

//  for (n='a'; n<='z'; n++) {
//      console.log(n)
//  }  

// var i = 0;

// for(; ;){
//     console.log(i);
//     break;
// }

//Functions=>
// var a = 10;
// var b = 15;
// function add(a , b ){
//     c = a + b
//     console.log(c)
// }
// add(10,15)   

// function mul(a,b){
//     c = a*b
//     console.log(c)
// }
// mul(10,15)

// function add(){
//     var a = 10;
//     var b= 20;
//     var addition = a + b;
//     console.log(addition)
// }
// add()

// function fullName(){
//     var firstName = "Abshk"
//     var lastName = "Mishra"
//     var fullN = firstName + lastName
//     console.log(fullN)
// }

// =>Scoping=>

// // var a = 28;
// // var b = 24;
// function got(){
//     var a = 28;
//     var b = 24;
//     var c = 'Abhishek'
//     d = a+b+c
// }
// got()
// console.log(d)


// var a = 18;
// var b = 22;
// function kkk(){
//     c = a + b
//     console.log(c)
// }
// kkk()
// console.log(c)



// var name = 'Abhsk';
// function ppp(){
//     firstname = 'mishra'
// }
// ppp()
// console.log(firstname)



// function lll(){
//     var a = 12;
//     var b = 13;
//     var c = 11;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// lll()
  

// =>Arguments=>

// function raja(){
//     var obj = {
//         name: 'Abhishek',
//         age: 23,
//         lastname: 'Mishra'
//     }
//     return obj
// }
// var value = raja()
// console.log(value.lastname)

// value.arr = [1,2,3]
// console.log(value)
// console.log(raja())



// function satyam(){
//     var arr = [1,5,'raja', true]
//     var obj = {
//         name: 'Abhishek',
//         age: 23,
//         FriendName: 'Ajeet'
//     }
//     return arr
// }
// var value = satyam()
// console.log(value.arr)

// value.obj = {
//     location: 'Allahabad',
//     Education: 'bSC'
// }
// console.log(value)
// console.log(satyam()) 



// =>Some Problems =>


//1.Write a programme to count the no. of odd elements in an array.
// var arr = [2,4,5,13,9,7];
// var odd =[];
// for(var i = 0; i<arr.length; i++){
//     if(arr[i] % 2 !=0){
//         odd.push(arr[i])
//     }
// }
// console.log(odd.length)  //4

//2.WAP to give array of indexes of odd elements in an array.
// var array = [2,4,5,13,8,9,7];
// var odd = [];
// for (var i = 0; i<array.length; i++){
//     if(array[i] % 2 !=0){
//         odd.push(i)
//     }
// }
// console.log(odd)     


//3.WAP to reverse the elements of an array.
//  var array = [1,2,3,4,5];
//  var rev = [];
//  for(i=array.length-1; i>=0; i--){
//      rev.push(array[i])
//  }
//  console.log(rev)   //[5,4,3,2,1]

//4.WAP to find the largest no. in an array.
//   var array = [5,9,3,11,4];
//   var largest = 0;
//   for(i=0; i<array.length; i++){
//       if(array[i] > largest){
//           largest = array[i]
//       }
//   }
//   console.log(largest)  //11

//5.WAP to add the array elements.
// var array = [1,2,3,4,5];
// var sum = 0;
// for(i=0; i<array.length-1; i++){
//     sum = sum + array[i]
// }
// console.log(sum)   //10

//6.WAP to add even and odd nos. of an array.
//  var array =[1,3,4,6,5,9,8,12];
//  var odd =0;
//  var even =0;
//  for(i=0; i<array.length; i++){
//      if(array[i] % 2 !=0){
//          odd+=array[i] // odd = odd+array[i]
//      }
//      else even+=array[i]  //even = even+array[i]
//  }
//  console.log(odd)  //18
//  console.log(even)  //30


//7.WAP to find first and second largest no. in an array.
// var array = [5,7,11,8,17,9];
// for(i=0; i<array.length; i++){
    
//     for(j=i+1; j<array.length; j++){
//         if(array[i]>array[j]){
//             var temp = array[i]
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }
// }
// console.log('first greatest number',array[array.length-1])    //first greatest number 17
// console.log('second largest number',array[array.length-2])    //second largest number 11


//8.WAP to find first and second smallest number in an array.

// var array = [8,4,9,11,3,0];
// for(var i=0; i<array.length; i++){
//     for(var j=i+1; j<array.length; j++){
//         if(array[i]<array[j]){
//             var temp = array[i]
//             array[i]=array[j]
//             array[j]= temp
//         }
//     }
// }
// console.log('smallest number',array[array.length-1])
// console.log('second smallest number',array[array.length-2]) 


//9.WAP to count no. of times each elements occuring in an array.
// var array = [2,4,5,2,7,5];
// var obj = {};
// for(i=0; i<array.length; i++){
//     obj[array[i]] = 1
//     for(j=1; j<i; j++){
//         if(array[i] == array[j]){
//             obj[array[i]] = obj[array[j]] + 1
//         }
//     }
// }
// console.log(obj)  


//10.WAP to count how many digits in a number.







//11.WAP to check a number is palendrome or not.


// //12.WAP to print all the prime nos. b/w 1 to 100.     
// var num = [];
// var isPrime = true ;
// for(i=2; i<100; i++){
//      if(i%2 ==0){
//         isPrime = false;
//         break;
//      }  
// }

// if(isPrime) {
//     console.log("Number is prime", num)
// }else {
//     console.log("Bumber is not prime ", num);
// }


//Functions Question =>WAP to programme to find the odd nos. in an array using function.
// let arr = [2,4,5,6,7,8];
// let odd =[];
// function foo(){
//     for(i=0; i<arr.length; i++){
//         if(arr[i] % 2 !=0){
//             odd.push(arr[i])
//         }
//     }
//     console.log(odd.length)
// }
// foo()  //2